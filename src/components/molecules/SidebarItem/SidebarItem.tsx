import { PropsWithChildren, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Typography from 'components/atoms/Typography/Typography';
import { CSSProperties } from 'styled-components';
import { ThemeContext } from 'theme/ThemeContext';
import Icon from 'components/atoms/Icon/Icon';
import { IconName } from 'components/atoms/Icon/icon.types';
import * as Styled from './SidebarItem.styled';

export type SidebarItemProps = {
  label: string;
  iconName: IconName;
  linkTo: string;
};

const SidebarItem = ({ label, iconName, linkTo }: PropsWithChildren<SidebarItemProps>) => {
  const { palette } = useContext(ThemeContext);
  const amount = 1;

  return (
    <Styled.StyledItemList palette={palette}>
      <NavLink to={linkTo} id={`sidebar-item-${label}`}>
        {({ isActive }) => (
          <Styled.StyledDiv
            style={
              {
                borderLeft: `4px solid ${isActive ? palette.sidebarTabsPressed : 'transparent'}`,
              } as CSSProperties
            }
          >
            <Styled.ContentDiv>
              <Icon
                name={iconName}
                color='sidebarTabs'
                size={18}
                isActive={isActive}
                activeColor='sidebarTabsPressed'
              />
              <Typography variant='header4' color={isActive ? 'sidebarTabsPressed' : 'sidebarTabs'}>
                {label[0].toUpperCase() + label.slice(1)}
              </Typography>
            </Styled.ContentDiv>
            {label === 'voting' || label === 'messages' ? (
              <Styled.Badge palette={palette} style={{ color: '#fff' }}>
                {amount}
              </Styled.Badge>
            ) : null}
          </Styled.StyledDiv>
        )}
      </NavLink>
    </Styled.StyledItemList>
  );
};

export default SidebarItem;
