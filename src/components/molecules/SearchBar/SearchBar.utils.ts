import { ExeListItemType, filterOptions } from './SearchBar.types';

export const STATIC_VALUES = {
  iconSize: 20,
  containerPaddingLeft: 14,
  contentGap: 9,
};

export const exeList: ExeListItemType[] = [
  { id: 1, name: 'Melchior' },
  { id: 2, name: 'Bartek' },
  { id: 3, name: 'Pogruqar' },
  { id: 4, name: 'Marcinek' },
  { id: 5, name: 'SzopPracz' },
];

export const searchFilter = (
  searchValue: string,
  list: ExeListItemType[],
  searchBy: (typeof filterOptions)[number] = 'name',
) => {
  const searchValueLowerCase = searchValue.toLowerCase();
  const filteredList = searchValue
    ? list.filter((item) => item[searchBy].toLowerCase().includes(searchValueLowerCase))
    : list;
  return filteredList;
};
