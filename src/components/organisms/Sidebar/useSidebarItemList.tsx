import getAppRoutesDetail from 'App/routing/getAppRoutesDetail';
import routes, { RoutesUrl } from 'App/routing/routes';
import { useAppSelector } from 'store/hooks';
import { selectUserRole } from 'store/reducers/user/user_slice';
import { Getters } from 'types/shared.types';

export const sidebarItems = [
  'dashboard',
  'buildings',
  'flats',
  'residents',
  'payments',
  'voting',
  'reports',
  'wall',
  'messages',
] as const;
export type SidebarItemLabel = (typeof sidebarItems)[number];

type ItemToLink = Getters<SidebarItemLabel, RoutesUrl>;

export const variantToLink: ItemToLink = {
  dashboard: routes.homeForLoggedIn,
  buildings: routes.buildings,
  residents: routes.residents,
  payments: routes.payments,
  voting: routes.voting,
  reports: routes.reports,
  wall: routes.wall,
  messages: routes.messages,
  flats: routes.flats,
} as const;

const useSidebarItemList = (): SidebarItemLabel[] => {
  const userRole = useAppSelector(selectUserRole);
  let sidebarItemList: SidebarItemLabel[] = [];

  if (userRole === 'manager')
    sidebarItemList = sidebarItems.filter(
      (el) => getAppRoutesDetail(variantToLink[el])?.accessForManager,
    );

  if (userRole === 'resident')
    sidebarItemList = sidebarItems.filter(
      (el) => getAppRoutesDetail(variantToLink[el])?.accessForResident,
    );

  return sidebarItemList;
};

export default useSidebarItemList;
