import styled from 'styled-components';
import { PaletteType } from 'theme/theme.types';

export const TileWrapper = styled.div<{ palette: PaletteType }>`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: ${({ palette }) => `0px 5px 8px ${palette.widgetsShadows}20`};
  color: ${({ palette }) => palette.inputGrey};
  display: flex;
  flex-direction: column;
`;

export const AddAnotherTileWrapper = styled.div<{ palette: PaletteType }>`
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: ${({ palette }) => `0px 5px 8px ${palette.widgetsShadows}20`};
  color: ${({ palette }) => palette.inputGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BuildingImage = styled.img`
  height: 11rem;
  object-fit: cover;
  padding: 0.5rem;
  width: 100%;
`;

export const CardContent = styled.div`
  padding: 0.5rem 1.031rem 0.938rem;
`;
