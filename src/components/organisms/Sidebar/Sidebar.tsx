import { IconName } from 'components/atoms/Icon/icon.types';
import SidebarItem from 'components/molecules/SidebarItem/SidebarItem';
import { useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import { Getters } from 'types/shared.types';
import * as Styled from './Sidebar.styled';
import useSidebarItemList, { SidebarItemLabel, variantToLink } from './useSidebarItemList';

type ItemToIcon = Getters<SidebarItemLabel, IconName>;

export const variantToIcon: ItemToIcon = {
  dashboard: 'dashboard',
  buildings: 'building',
  residents: 'residents',
  payments: 'payments',
  voting: 'voting',
  reports: 'reports',
  wall: 'wall',
  messages: 'messages',
  flats: 'building',
} as const;

const variantToLabel = {
  dashboard: 'dashboard',
  buildings: 'buildings',
  residents: 'residents',
  payments: 'payments',
  voting: 'voting',
  reports: 'reports',
  wall: 'wall',
  messages: 'messages',
  flats: 'flats',
} as const;

const Sidebar = () => {
  const { palette } = useContext(ThemeContext);
  const itemsList: SidebarItemLabel[] = useSidebarItemList();
  return (
    <Styled.Box palette={palette}>
      <Styled.StyledList>
        {itemsList.map((item) => (
          <SidebarItem
            key={`id-sidebarItem -${item}`}
            iconName={variantToIcon[item]}
            label={variantToLabel[item]}
            linkTo={variantToLink[item]}
          />
        ))}
      </Styled.StyledList>
    </Styled.Box>
  );
};

export default Sidebar;
