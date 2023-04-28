import { TypographyVariants } from 'theme/theme.types';

const variantToElement: TypographyVariants = {
  header1: 'h1',
  header2: 'h2',
  subtitles: 'h2',
  header3: 'h3',
  header4: 'h4',
  header5: 'h5',
  subHeader: 'h5',
  paragraph: 'p',
  dataInputsAndTooltips: 'p',
  unerlined: 'p',
  captions: 'p',
} as const;

export default variantToElement;
