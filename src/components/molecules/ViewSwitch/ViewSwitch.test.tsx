import { renderWithProviders } from 'utils/test.utils';
import { fireEvent, screen, cleanup } from '@testing-library/react';
import initialTheme from 'theme/initialTheme';
import ViewSwitch from './ViewSwitch';

describe('ViewSwitch', () => {
  afterEach(cleanup);
  const page = () => renderWithProviders(<ViewSwitch />, {});
  it('renders correctly', () => {
    expect(page()).toMatchSnapshot();
  });

  it('View Switch correctly changes after clicking', async () => {
    page();

    const viewSwitch = screen.getByTestId('view-switch');
    const viewSwitchSlider = screen.getByTestId('view-switch-slider');
    const listboxIcon = screen.getByTestId('listbox-icon').querySelector('path');
    const buildingPlanIcon = screen.getByTestId('buildingPlan-icon').querySelector('path');

    expect(listboxIcon?.getAttribute('stroke')).toBe(initialTheme.palette.blueDark);
    expect(buildingPlanIcon?.getAttribute('stroke')).toBe(initialTheme.palette.greyDark);
    expect(viewSwitchSlider).toHaveStyleRule('transform', 'translateX(0px)', {
      modifier: ':before',
    });

    await fireEvent.click(viewSwitch);
    expect(listboxIcon?.getAttribute('stroke')).toBe(initialTheme.palette.greyDark);
    expect(buildingPlanIcon?.getAttribute('stroke')).toBe(initialTheme.palette.blueDark);
    expect(viewSwitchSlider).toHaveStyleRule('transform', 'translateX(40px)', {
      modifier: ':before',
    });

    await fireEvent.click(viewSwitch);
    expect(listboxIcon?.getAttribute('stroke')).toBe(initialTheme.palette.blueDark);
    expect(buildingPlanIcon?.getAttribute('stroke')).toBe(initialTheme.palette.greyDark);
    expect(viewSwitchSlider).toHaveStyleRule('transform', 'translateX(0px)', {
      modifier: ':before',
    });
  });
});
