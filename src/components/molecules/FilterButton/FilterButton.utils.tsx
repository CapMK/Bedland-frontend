import PossibleButtons from './FilterButton.types';

export const possibleButtons: PossibleButtons = {
  primaryBorders: {
    buttonType: 'primaryBorders',
    text: 'Filters selected',
    hover: 'default',
  },
  primary: {
    buttonType: 'primary',
    text: 'Select filters',
    hover: 'text',
  },
};

export const whichButton = (ifActive: boolean) =>
  ifActive ? possibleButtons.primaryBorders : possibleButtons.primary;
