export type BorderStyle =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';

export type FontWeight = '400' | '600' | '700';

export type TextTransform =
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'initial';
export type TextSVGAlignmentBaseline =
  | 'auto'
  | 'baseline'
  | 'before-edge'
  | 'text-before-edge'
  | 'middle'
  | 'central'
  | 'after-edge'
  | 'text-after-edge'
  | 'ideographic'
  | 'alphabetic'
  | 'hanging'
  | 'mathematical'
  | 'inherit';

export type SpacesCSS =
  | [number, number, number, number, LengthUnits]
  | [number, number, number, LengthUnits]
  | [number, number, LengthUnits];

export type Border = [string, BorderStyle, string];

export type LengthUnits = 'px' | 'em' | 'rem' | '%' | 'vw' | 'vh';

export type GridSizes = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type Grid =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16;

export type KeysGrid = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type GridJustification =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type GridItemsAlignment =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline';

export type ChartSizes = {
  margin?: ChartSizesMargin;
  marginAxis?: ChartSizesMarginAxis;
  layout?: ChartSizesLayout;
};

export type ChartSizesMargin = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export type ChartSizesMarginAxis = {
  y?: {
    feature?: number;
    icon?: number;
    value?: number;
  };
};

export type ChartSizesLayout = {
  width?: number;
  height?: number;
};

export interface Margins {
  mb?: number;
  mt?: number;
  ml?: number;
  mr?: number;
}

export type Position = 'top' | 'bottom' | 'left' | 'right';
