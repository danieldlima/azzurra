import React, {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren
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
    label: string;
    className?: string;
    fontWeight?: 'light' | 'normal' | 'medium' | 'bold';
    size?: 'xs' | 'sm' | 'normal' | 'lg' | 'xl' | 'paragraph';
    color?: 'primary' | 'secondary';
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
    lg: 'text-xl sm:text-3xl',
    xl: 'text-2xl sm:text-5xl',
    paragraph: 'text-lg leading-6'
  };

  const classColor = {
    primary: 'text-azzurra-navy-blue',
    secondary: 'text-azzurra-gold'
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
