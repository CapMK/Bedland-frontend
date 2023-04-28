import routes from 'App/routing/routes';
import LogoManager from 'assets/img/LogoManager.svg';
import LogoResident from 'assets/img/LogoResident.svg';
import AccountDropdown from 'components/organisms/AccountDropdown/AccountDropdown';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { selectUserIsLoggedIn } from 'store/reducers/user/user_slice';
import { ThemeContext } from 'theme/ThemeContext';
import * as Styled from './Header.styled';

const Header = () => {
  const isLoggedIn: boolean = useAppSelector(selectUserIsLoggedIn);
  const location = useLocation();
  const userRole = useAppSelector((state) => state.user.role);
  const { palette } = useContext(ThemeContext);

  return (
    <nav>
      <Styled.HeaderBox isLoggedIn={isLoggedIn} palette={palette}>
        <img
          src={
            userRole === 'manager' || location.pathname === routes.homeForNotLoggedInManager
              ? LogoManager
              : LogoResident
          }
          alt='Logo Bedland'
        />
        {isLoggedIn ? <AccountDropdown /> : null}
      </Styled.HeaderBox>
    </nav>
  );
};

export default Header;
