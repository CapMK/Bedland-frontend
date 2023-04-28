import AccountPage from 'components/pages/AccountPage/AccountPage';
import BuildingsPage from 'components/pages/BuildingsPage/BuildingsPage';
import BuildingDetailsPage from 'components/pages/BuildingDetailsPage/BuildingDetailsPage';
import DashboardPage from 'components/pages/DashboardPage/DashboardPage';
import FlatsPage from 'components/pages/FlatsPage/FlatsPage';
import LoginPage from 'components/pages/LoginPage/LoginPage';
import MessagesPage from 'components/pages/MessagesPage/MessagesPage';
import PaymentsPage from 'components/pages/PaymentsPage/PaymentsPage';
import ReportsPage from 'components/pages/ReportsPage/ReportsPage';
import ResetPasswordPage from 'components/pages/ResetPasswordPage/ResetPasswordPage';
import ResidentsPage from 'components/pages/ResidentsPage/ResidentsPage';
import SettingsPage from 'components/pages/SettingsPage/SettingsPage';
import VotingPage from 'components/pages/VotingPage/VotingPage';
import WallPage from 'components/pages/WallPage/WallPage';
import { ReactNode } from 'react';
import routes, { RoutesUrl } from './routes';

type RouteDetail = {
  component: ReactNode;
  accessForManager: boolean;
  accessForResident: boolean;
};

type RouteMap = Map<RoutesUrl, RouteDetail>;

const getAppRoutesDetail = (route: RoutesUrl) => {
  const map: RouteMap = new Map([
    [
      routes.homeForNotLoggedIn,
      {
        component: LoginPage(),
        accessForManager: false,
        accessForResident: true,
      },
    ],
    [
      routes.homeForNotLoggedInManager,
      {
        component: LoginPage(),
        accessForManager: false,
        accessForResident: true,
      },
    ],
    [
      routes.homeForLoggedIn,
      {
        component: DashboardPage(),
        accessForManager: true,
        accessForResident: true,
      },
    ],
    [
      routes.buildings,
      {
        component: BuildingsPage(),
        accessForManager: true,
        accessForResident: false,
      },
    ],
    [
      routes.buildingDetails,
      {
        component: BuildingDetailsPage(),
        accessForManager: true,
        accessForResident: false,
      },
    ],
    [
      routes.payments,
      {
        component: PaymentsPage(),
        accessForManager: true,
        accessForResident: true,
      },
    ],
    [
      routes.voting,
      {
        component: VotingPage(),
        accessForManager: true,
        accessForResident: true,
      },
    ],
    [
      routes.messages,
      {
        component: MessagesPage(),
        accessForManager: true,
        accessForResident: true,
      },
    ],
    [
      routes.wall,
      {
        component: WallPage(),
        accessForManager: true,
        accessForResident: true,
      },
    ],
    [
      routes.flats,
      {
        component: FlatsPage(),
        accessForManager: false,
        accessForResident: true,
      },
    ],
    [
      routes.reports,
      {
        component: ReportsPage(),
        accessForManager: true,
        accessForResident: true,
      },
    ],
    [
      routes.residents,
      {
        component: ResidentsPage(),
        accessForManager: true,
        accessForResident: false,
      },
    ],
    [
      routes.resetPassword,
      {
        component: ResetPasswordPage(),
        accessForManager: true,
        accessForResident: true,
      },
    ],
    [
      routes.account,
      {
        component: AccountPage(),
        accessForManager: true,
        accessForResident: true,
      },
    ],
    [
      routes.settings,
      {
        component: SettingsPage(),
        accessForManager: true,
        accessForResident: true,
      },
    ],
  ]);
  return map.get(route);
};

export default getAppRoutesDetail;
