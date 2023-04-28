export type Getters<T extends string, K> = {
  [k in T]: K;
};

export type Building = {
  id: string;
  name: string;
  address: string;
  managerId: string;
  floors: string;
  createDate: string;
  updateDate: string;
  version: number;
};

export type Flat = {
  id: string;
  version: number;
  createDate: string;
  updateDate: string;
  buildingId: string;
  number: string;
  floor: string;
  shapePath: string;
};

export type FlatWithAddress = Flat & { address: string; city: string };

export type ResidentsFlats = {
  flatId: string;
  flatNumber: string;
  flatAddress: string;
  flatCreateDate: string;
};

export type BuildingWithCity = Building & { city: string };

export type ResidentsFlatsWithCity = ResidentsFlats & { city: string };
