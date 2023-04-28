import BuildingImg from 'assets/img/BuildingImg.png';
import AddAnother from 'assets/img/AddAnother.svg';

export type TileProps = {
  title: string;
  subtitle: string;
  id: string;
  img?: string;
};

export const tileDefaultProps: { img: string } = {
  img: BuildingImg,
};

export type AddAnotherTileProps = {
  img?: string;
};

export const anotherTileDefaultProps: { img: string } = {
  img: AddAnother,
};
