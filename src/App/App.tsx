import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Header from 'components/organisms/Header/Header';
import MainBodySidebar from 'components/templates/MainBodySidebar/MainBodySidebar';
import GlobalFontsStyle from 'assets/fonts/fonts';
import GlobalStyle from 'theme/globalStyles';
import Footer from 'components/organisms/Footer/Footer';
import { useAppSelector } from 'store/hooks';
import { selectUserIsLoggedIn } from 'store/reducers/user/user_slice';
import { RoutesForLoggedIn, RoutesForNotLoggedIn } from './routing/routing';

const App = () => {
  const isLoggedIn = useAppSelector(selectUserIsLoggedIn);
  return (
    <>
      <GlobalStyle />
      <GlobalFontsStyle />
      <Header />
      <MainBodySidebar>
        {isLoggedIn ? <Sidebar /> : null}
        {isLoggedIn ? <RoutesForLoggedIn /> : <RoutesForNotLoggedIn />}
      </MainBodySidebar>
      {isLoggedIn ? null : <Footer />}
    </>
  );
};
export default App;
