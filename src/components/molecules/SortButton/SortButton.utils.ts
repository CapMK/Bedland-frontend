import { DisplayListType } from 'components/organisms/DisplayList/DisplayList.types';
import getCity from 'components/organisms/DisplayList/DisplayList.utils';
import { IsBuildingGuard, sortOptions, sortType } from './SortButton.types';

export const sortList = (list: DisplayListType, sortOption: sortType): DisplayListType => {
  switch (sortOption) {
    case sortOptions[0]:
      if (IsBuildingGuard(list)) {
        return list.sort((a, b) => a.name.localeCompare(b.name));
      }
      return list.sort((a, b) => a.flatId.localeCompare(b.flatNumber));
    case sortOptions[1]:
      if (IsBuildingGuard(list)) {
        return list.sort((a, b) => getCity(a.address).localeCompare(getCity(b.address)));
      }
      return list.sort((a, b) => getCity(a.flatAddress).localeCompare(getCity(b.flatAddress)));
    case sortOptions[2]:
      if (IsBuildingGuard(list)) {
        return list.sort(
          (a, b) => new Date(a.createDate).getTime() - new Date(b.createDate).getTime(),
        );
      }
      return list.sort(
        (a, b) => new Date(a.flatCreateDate).getTime() - new Date(b.flatCreateDate).getTime(),
      );
    default:
      return list;
  }
};

export const listToSort: DisplayListType = [
  {
    id: '2',
    name: 'Miedziana',
    address: 'Miedziana Street 3, 22-233 Poznan',
    managerId: '1',
    floors: '7',
    version: 1,
    createDate: '2023-02-14T00:00:00',
    updateDate: '2023-02-14T00:00:00',
  },
  {
    id: '1',
    name: 'Berry',
    address: 'Berry Street 21, 22-233 Wroclaw',
    managerId: '1',
    floors: '5',
    version: 5,
    createDate: '2019-10-03T00:00:00',
    updateDate: '2023-01-01T00:00:00',
  },
  {
    id: '3',
    name: 'Seaport',
    address: 'Seaport Avenue 51, 22-233 Gdansk',
    managerId: '2',
    floors: '5',
    version: 2,
    createDate: '2019-10-01T00:00:00',
    updateDate: '2020-05-07T00:00:00',
  },
];

export const listSortedByName: DisplayListType = [
  {
    id: '1',
    name: 'Berry',
    address: 'Berry Street 21, 22-233 Wroclaw',
    managerId: '1',
    floors: '5',
    version: 5,
    createDate: '2019-10-03T00:00:00',
    updateDate: '2023-01-01T00:00:00',
  },
  {
    id: '2',
    name: 'Miedziana',
    address: 'Miedziana Street 3, 22-233 Poznan',
    managerId: '1',
    floors: '7',
    version: 1,
    createDate: '2023-02-14T00:00:00',
    updateDate: '2023-02-14T00:00:00',
  },
  {
    id: '3',
    name: 'Seaport',
    address: 'Seaport Avenue 51, 22-233 Gdansk',
    managerId: '2',
    floors: '5',
    version: 2,
    createDate: '2019-10-01T00:00:00',
    updateDate: '2020-05-07T00:00:00',
  },
];

export const listSortedByCity: DisplayListType = [
  {
    id: '3',
    name: 'Seaport',
    address: 'Seaport Avenue 51, 22-233 Gdansk',
    managerId: '2',
    floors: '5',
    version: 2,
    createDate: '2019-10-01T00:00:00',
    updateDate: '2020-05-07T00:00:00',
  },
  {
    id: '2',
    name: 'Miedziana',
    address: 'Miedziana Street 3, 22-233 Poznan',
    managerId: '1',
    floors: '7',
    version: 1,
    createDate: '2023-02-14T00:00:00',
    updateDate: '2023-02-14T00:00:00',
  },
  {
    id: '1',
    name: 'Berry',
    address: 'Berry Street 21, 22-233 Wroclaw',
    managerId: '1',
    floors: '5',
    version: 5,
    createDate: '2019-10-03T00:00:00',
    updateDate: '2023-01-01T00:00:00',
  },
];

export const listSortedByDateAdded: DisplayListType = [
  {
    id: '3',
    name: 'Seaport',
    address: 'Seaport Avenue 51, 22-233 Gdansk',
    managerId: '2',
    floors: '5',
    version: 2,
    createDate: '2019-10-01T00:00:00',
    updateDate: '2020-05-07T00:00:00',
  },
  {
    id: '1',
    name: 'Berry',
    address: 'Berry Street 21, 22-233 Wroclaw',
    managerId: '1',
    floors: '5',
    version: 5,
    createDate: '2019-10-03T00:00:00',
    updateDate: '2023-01-01T00:00:00',
  },
  {
    id: '2',
    name: 'Miedziana',
    address: 'Miedziana Street 3, 22-233 Poznan',
    managerId: '1',
    floors: '7',
    version: 1,
    createDate: '2023-02-14T00:00:00',
    updateDate: '2023-02-14T00:00:00',
  },
];

export const flatsListToSort: DisplayListType = [
  {
    flatId: '2',
    flatNumber: '2',
    flatAddress: 'ul. Legnicka 48H, 54-202 Wrocław',
    flatCreateDate: '2023-02-12T00:00:00',
  },
  {
    flatId: '1',
    flatNumber: '1',
    flatAddress: 'ul. Legnicka 48H, 54-202 Wrocław',
    flatCreateDate: '2023-02-14T00:00:00',
  },
  {
    flatId: '5',
    flatNumber: '4',
    flatAddress: 'ul. Kolorowa 6, 60-198 Poznań',
    flatCreateDate: '2023-02-13T00:00:00',
  },
];

export const flatsListSortedByName: DisplayListType = [
  {
    flatId: '1',
    flatNumber: '1',
    flatAddress: 'ul. Legnicka 48H, 54-202 Wrocław',
    flatCreateDate: '2023-02-14T00:00:00',
  },
  {
    flatId: '2',
    flatNumber: '2',
    flatAddress: 'ul. Legnicka 48H, 54-202 Wrocław',
    flatCreateDate: '2023-02-12T00:00:00',
  },
  {
    flatId: '5',
    flatNumber: '4',
    flatAddress: 'ul. Kolorowa 6, 60-198 Poznań',
    flatCreateDate: '2023-02-13T00:00:00',
  },
];

export const flatsListSortedByCity: DisplayListType = [
  {
    flatId: '5',
    flatNumber: '4',
    flatAddress: 'ul. Kolorowa 6, 60-198 Poznań',
    flatCreateDate: '2023-02-13T00:00:00',
  },
  {
    flatId: '1',
    flatNumber: '1',
    flatAddress: 'ul. Legnicka 48H, 54-202 Wrocław',
    flatCreateDate: '2023-02-14T00:00:00',
  },
  {
    flatId: '2',
    flatNumber: '2',
    flatAddress: 'ul. Legnicka 48H, 54-202 Wrocław',
    flatCreateDate: '2023-02-12T00:00:00',
  },
];

export const flatsListSortedByDateAdded: DisplayListType = [
  {
    flatId: '2',
    flatNumber: '2',
    flatAddress: 'ul. Legnicka 48H, 54-202 Wrocław',
    flatCreateDate: '2023-02-12T00:00:00',
  },
  {
    flatId: '5',
    flatNumber: '4',
    flatAddress: 'ul. Kolorowa 6, 60-198 Poznań',
    flatCreateDate: '2023-02-13T00:00:00',
  },
  {
    flatId: '1',
    flatNumber: '1',
    flatAddress: 'ul. Legnicka 48H, 54-202 Wrocław',
    flatCreateDate: '2023-02-14T00:00:00',
  },
];
