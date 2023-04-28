import { cleanup } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import SidebarItem, { SidebarItemProps } from './SidebarItem';

describe('SidebarItem', () => {
  afterEach(cleanup);
  const item = ({ iconName, label, linkTo }: SidebarItemProps) =>
    renderWithProviders(<SidebarItem label={label} iconName={iconName} linkTo={linkTo} />, {});

  it('should render correctly sidebarItem for Buildings', () => {
    expect(item({ iconName: 'building', label: 'buildings', linkTo: '#' })).toMatchSnapshot();
  });

  it('should render correctly sidebarItem for Residents', () => {
    expect(item({ iconName: 'residents', label: 'residents', linkTo: '#' })).toMatchSnapshot();
  });

  it('should render correctly sidebarItem for Dashboard', () => {
    expect(item({ iconName: 'dashboard', label: 'dashboard', linkTo: '#' })).toMatchSnapshot();
  });

  it('should render correctly sidebarItem for Wall', () => {
    expect(item({ iconName: 'wall', label: 'wall', linkTo: '#' })).toMatchSnapshot();
  });

  it('should render correctly sidebarItem for Reports', () => {
    expect(item({ iconName: 'reports', label: 'reports', linkTo: '#' })).toMatchSnapshot();
  });

  it('should render correctly sidebarItem for Messages', () => {
    expect(item({ iconName: 'messages', label: 'messages', linkTo: '#' })).toMatchSnapshot();
  });

  it('should render correctly sidebarItem for Payments', () => {
    expect(item({ iconName: 'payments', label: 'payments', linkTo: '#' })).toMatchSnapshot();
  });

  it('should render correctly sidebarItem for Buildings', () => {
    expect(item({ iconName: 'voting', label: 'voting', linkTo: '#' })).toMatchSnapshot();
  });

  it('should render correctly sidebarItem for Flats', () => {
    expect(item({ iconName: 'building', label: 'flats', linkTo: '#' })).toMatchSnapshot();
  });
});
