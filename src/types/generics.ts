export type GenderType = 'F' | 'M';
export type Gender = {
  M: string;
  F: string;
};

export type ObservedSize = {
  width: number | undefined;
  height: number | undefined;
};

export type LanguageKey = 'pt-BR' | 'en-US';

export type SVGProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
  classes?: string;
};

export type SimpleIconProps = {
  size?: string | number;
  fill?: string;
  classe?: string;
};

export type PeriodHour = 6 | 12 | 24;

export type DOMSizes = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
};

export type OrdinationType = 'importance' | 'alphabetic' | 'groups';

export type MessageError = {
  '401': string;
  icu: string;
};

export type PluralizeText = {
  day: {
    plural: string;
    singular: string;
  };
};

export type ItemLabel = {
  id: number | string;
  label: string;
};

export type TableHeadItem = {
  prolonged?: string;
  all?: string[];
} & ItemLabel;
