import { RoutesUrl } from 'App/routing/routes';
import { IconName } from 'components/atoms/Icon/icon.types';
import { ColorNames } from 'theme/theme.types';

type DropdownItemProps = {
  linkRoute: RoutesUrl;
  iconName: IconName;
  color: ColorNames;
  label: string;
  onClick?: () => void;
};

export default DropdownItemProps;
