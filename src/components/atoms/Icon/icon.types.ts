import { Getters } from 'types/shared.types';
import { HexColor } from 'theme/theme.types';

export const iconsNames = [
  'arrowLeft',
  'building',
  'dashboard',
  'messages',
  'payments',
  'reports',
  'residents',
  'voting',
  'wall',
  'arrowRight',
  'search',
  'envelope',
  'alert',
  'settings',
  'logout',
  'user',
  'more',
  'document',
  'listbox',
  'buildingPlan',
  'filterButton',
  'remove',
  'arrowDown',
  'edit',
] as const;

export type IconName = (typeof iconsNames)[number];

type Path = {
  d: string;
  id: string;
  isPathFill?: boolean;
  strokeWidth?: string;
  isMask?: boolean;
};

type Mask = {
  path: Path[];
  fill: HexColor;
};

export type IconItem = {
  viewBox: string;
  path: Path[];
  mask?: Mask;
};

export type IconList = Getters<IconName, IconItem>;
