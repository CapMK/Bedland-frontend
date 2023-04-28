import { Getters } from 'types/shared.types';

const routeFeature = [
  'homeForLoggedIn',
  'homeForNotLoggedIn',
  'homeForNotLoggedInManager',
  'payments',
  'voting',
  'messages',
  'wall',
  'buildings',
  'buildingDetails',
  'flats',
  'reports',
  'residents',
  'resetPassword',
  'account',
  'settings',
] as const;
const routesUrl = [
  '/dashboard',
  '/login',
  '/login-manager',
  '/payments',
  '/voting',
  '/messages',
  '/wall',
  '/buildings',
  '/buildings/:id',
  '/flats',
  '/reports',
  '/residents',
  '/resetPassword',
  '/account',
  '/settings',
] as const;
type RouteFeature = (typeof routeFeature)[number];
export type RoutesUrl = (typeof routesUrl)[number];

type RoutesData = Getters<RouteFeature, RoutesUrl>;

const routes: RoutesData = {
  homeForLoggedIn: '/dashboard',
  homeForNotLoggedIn: '/login',
  homeForNotLoggedInManager: '/login-manager',
  payments: '/payments',
  voting: '/voting',
  messages: '/messages',
  wall: '/wall',
  buildings: '/buildings',
  buildingDetails: '/buildings/:id',
  flats: '/flats',
  reports: '/reports',
  residents: '/residents',
  resetPassword: '/resetPassword',
  account: '/account',
  settings: '/settings',
} as const;

export default routes;
