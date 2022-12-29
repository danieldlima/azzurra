import { useEffect, useRef, useState, RefObject } from 'react';

import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import ResizeObserverPolyfill from 'resize-observer-polyfill';

import { useBreakpointType } from '@root/modules/hooks/useBreakpointType';
import { getClientSizes } from '@root/modules/utils/getSizes';
import { BreakpointKeys, DOMSizes } from '@root/types';

type OptimizedType = 'debounce' | 'throttle';

type UseDimensionsReturned<T> = [
  ref: T,
  dimensions: {
    sizes: DOMSizes;
    window: Pick<DOMSizes, 'width' | 'height'>;
    breakpoint: BreakpointKeys;
  }
];

interface UseDimensionsOptions {
  wait: number;
  optimizedType: OptimizedType;
}

const INITIAL_STATE_REF = {
  width: 0,
  height: 0,
  bottom: 0,
  left: 0,
  right: 0,
  top: 0
};

const INITIAL_STATE_WINDOW = {
  width: 0,
  height: 0
};

export const useDimensions = <T extends HTMLDivElement = HTMLDivElement>(
  options: UseDimensionsOptions = {
    wait: 500,
    optimizedType: 'debounce'
  }
): UseDimensionsReturned<RefObject<T>> => {
  const [sizes, setSizes] = useState<DOMSizes>(INITIAL_STATE_REF);
  const [windowSize, setWindowSize] =
    useState<Pick<DOMSizes, 'width' | 'height'>>(INITIAL_STATE_WINDOW);

  const ref = useRef<T>(null!);
  const observerRef = useRef<ResizeObserver>(null!);

  const { wait, optimizedType } = options;
  const bodyElement =
    typeof document !== 'undefined' ? document.body : undefined;

  useEffect(() => {
    const DOMElement = ref.current;

    const observerFn = { throttle, debounce }[optimizedType](
      function debounceObserver(entries: ResizeObserverEntry[]) {
        const { contentRect } = entries[0];
        const clientSizes = getClientSizes();

        if (
          contentRect?.width &&
          contentRect?.height &&
          ref?.current?.getBoundingClientRect()
        ) {
          setSizes(ref?.current.getBoundingClientRect());
          setWindowSize(clientSizes);
        }
      },
      wait,
      { leading: false, trailing: true }
    );

    observerRef.current =
      new ResizeObserver(observerFn) || new ResizeObserverPolyfill(observerFn);

    return () => {
      if (observerRef.current && DOMElement && bodyElement) {
        observerRef.current.unobserve(bodyElement);
      }
    };
  }, [bodyElement, optimizedType, wait]);

  useEffect(() => {
    if (observerRef.current && bodyElement) {
      observerRef.current.observe(bodyElement);
    }
  }, [ref, bodyElement]);

  const breakpoint = useBreakpointType(windowSize?.width);

  const dimensions = {
    sizes,
    window: windowSize,
    breakpoint
  };

  return [ref, dimensions];
};
