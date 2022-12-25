import React, {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  ReactNode
} from 'react';

import { addClassName } from '@root/modules/utils';

type PolymorphicAsProp<E extends ElementType> = {
  as?: E;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>;

const defaultElement = 'h3';

type TextProps<E extends ElementType = typeof defaultElement> =
  PolymorphicProps<E> & {
    label: ReactNode;
    className?: string;
    fontWeight?: 'light' | 'normal' | 'medium' | 'bold';
    size?: 'xs' | 'sm' | 'normal' | 'lg' | 'xl' | 'paragraph' | 'custom';
    color?: AzzurraColor;
  };
function Text<E extends ElementType = typeof defaultElement>({
  label,
  as,
  className = '',
  size = 'xl',
  color = 'primary',
  fontWeight = 'bold'
}: TextProps<E>) {
  const Component = as ?? defaultElement;

  const classSize = {
    xs: '',
    sm: '',
    normal: '',
    custom: '',
    lg: 'text-xl sm:text-3xl',
    xl: 'text-2xl sm:text-5xl',
    paragraph: 'text-lg leading-6'
  };

  const classColor = {
    primary: 'text-azzurra-navy-blue',
    secondary: 'text-azzurra-gold',
    black: 'text-black',
    white: 'text-white',
    'navy-blue': 'text-azzurra-navy-blue',
    'gold-100': 'text-azzurra-gold-100',
    'light-blue': 'text-azzurra-light-blue',
    'opaque-gold': 'text-azzurra-opaque-gold',
    brown: 'text-azzurra-brown'
  };

  const classFontWeight = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold'
  };

  return (
    <Component
      className={`${classFontWeight[fontWeight]} ${classColor[color]} ${
        classSize[size]
      } ${addClassName(className)}`}
    >
      {label}
    </Component>
  );
}

export default Text;
