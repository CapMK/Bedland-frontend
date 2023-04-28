import { ButtonVariantProps, HoverVariant } from 'components/atoms/Button/Button.types';

type PossibleButtons = {
  primaryBorders: {
    buttonType: ButtonVariantProps;
    text: string;
    hover: HoverVariant;
  };
  primary: {
    buttonType: ButtonVariantProps;
    text: string;
    hover: HoverVariant;
  };
};

export default PossibleButtons;
