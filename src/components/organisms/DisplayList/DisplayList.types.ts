import { Building, ResidentsFlats } from 'types/shared.types';

export type DisplayListType = Building[] | ResidentsFlats[];

export type DisplayListProps = { displayList: DisplayListType };
