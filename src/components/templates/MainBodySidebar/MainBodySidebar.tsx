import { PropsWithChildren, useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import { useAppSelector } from 'store/hooks';
import { selectUserIsLoggedIn } from 'store/reducers/user/user_slice';
import * as Styled from './MainBodySidebar.styled';

const MainBodySidebar = ({ children }: PropsWithChildren) => {
  const { palette } = useContext(ThemeContext);
  const isLoggedIn = useAppSelector(selectUserIsLoggedIn);
  return (
    <Styled.Box palette={palette} isLoggedIn={isLoggedIn}>
      {children}
    </Styled.Box>
  );
};

export default MainBodySidebar;
