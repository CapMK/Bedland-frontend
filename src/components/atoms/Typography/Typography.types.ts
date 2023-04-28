import { CSSProperties } from 'react';
import { ColorNames, TypographyName } from 'theme/theme.types';

export type TypographyProps = {
  variant?: TypographyName;
  color?: ColorNames;
  style?: CSSProperties;
};
