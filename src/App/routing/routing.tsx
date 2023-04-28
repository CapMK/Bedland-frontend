import { Route, Routes } from 'react-router-dom';
import getAppRoutesDetail from './getAppRoutesDetail';
import routes from './routes';

export const RoutesForNotLoggedIn = () => (
  <Routes>
    <Route
      path={routes.homeForNotLoggedIn}
      element={getAppRoutesDetail(routes.homeForNotLoggedIn)?.component}
    />
    <Route
      path={routes.resetPassword}
      element={getAppRoutesDetail(routes.resetPassword)?.component}
    />
    <Route path='/*' element={getAppRoutesDetail(routes.homeForNotLoggedIn)?.component} />
  </Routes>
);

export const RoutesForLoggedIn = () => (
  <Routes>
    <Route
      path={routes.homeForLoggedIn}
      element={getAppRoutesDetail(routes.homeForLoggedIn)?.component}
    />
    <Route path={routes.payments} element={getAppRoutesDetail(routes.payments)?.component} />
    <Route path={routes.voting} element={getAppRoutesDetail(routes.payments)?.component} />
    <Route path={routes.messages} element={getAppRoutesDetail(routes.messages)?.component} />
    <Route path={routes.wall} element={getAppRoutesDetail(routes.wall)?.component} />
    <Route
      element={getAppRoutesDetail(routes.buildingDetails)?.component}
      path={routes.buildingDetails}
    />
    <Route path={routes.buildings} element={getAppRoutesDetail(routes.buildings)?.component} />
    <Route path={routes.flats} element={getAppRoutesDetail(routes.flats)?.component} />
    <Route path={routes.reports} element={getAppRoutesDetail(routes.reports)?.component} />
    <Route path={routes.residents} element={getAppRoutesDetail(routes.residents)?.component} />
    <Route path={routes.account} element={getAppRoutesDetail(routes.account)?.component} />
    <Route path={routes.settings} element={getAppRoutesDetail(routes.settings)?.component} />

    <Route path='/*' element={getAppRoutesDetail(routes.homeForLoggedIn)?.component} />
  </Routes>
);
