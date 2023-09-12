import { StatusType } from '@constant/api';

export interface Error {
  text: string;
  type: StatusType;
}

export interface ErrorFields {
  name?: Error | null;
  email?: Error | null;
  subject?: Error | null;
  generic?: Error | null;
  success?: Error | null;
}
