import { Building } from 'types/shared.types';
import { DisplayListType } from 'components/organisms/DisplayList/DisplayList.types';

export const sortOptions = ['name', 'city', 'date added'] as const;

export type sortType = (typeof sortOptions)[number];

export type SortButtonProps = {
  text: string;
  changeSortOption: (sortOption: sortType) => void;
};

export const IsBuildingGuard = (list: DisplayListType): list is Building[] =>
  (list as Building[])[0].name !== undefined;
