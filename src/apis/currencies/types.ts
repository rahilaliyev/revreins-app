import type { ECurrencyCode } from 'src/types/enums';
import type { ID } from 'src/types/interfaces';

export interface ICurrency extends ID {
  name: string;
  code: ECurrencyCode;
  symbol: string;
  icon: string;
  status: boolean;
}
