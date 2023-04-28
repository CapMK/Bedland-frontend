import { renderWithProviders } from 'utils/test.utils';
import { cleanup } from '@testing-library/react';
import Widget from './Widget';
import { WidgetVariant, WidgetMode } from './Widget.types';

type testProps = { variant: WidgetVariant; isArrowButton: boolean; mode: WidgetMode };

describe('Widget', () => {
  const widget = ({ variant, isArrowButton, mode }: testProps) =>
    renderWithProviders(
      <Widget
        mode={mode}
        variant={variant}
        title='Widget in dark mode'
        isArrowButton={isArrowButton}
        onClick={() => null}
      />,
      {},
    );

  afterEach(cleanup);
  it('should renders correctly widget in dark mode', () => {
    expect(
      widget({ variant: 'notifications', isArrowButton: true, mode: 'dark' }),
    ).toMatchSnapshot();
  });

  it('should renders correctly widget in light mode', () => {
    expect(
      widget({ variant: 'notifications', isArrowButton: true, mode: 'light' }),
    ).toMatchSnapshot();
  });

  it('should renders correctly NotificationWidget', () => {
    expect(
      widget({ variant: 'notifications', isArrowButton: true, mode: 'dark' }),
    ).toMatchSnapshot();
  });

  it('should renders correctly PaymentsWidget', () => {
    expect(widget({ variant: 'payments', isArrowButton: true, mode: 'dark' })).toMatchSnapshot();
  });

  it('should renders correctly ContactsWidget', () => {
    expect(widget({ variant: 'contacts', isArrowButton: true, mode: 'dark' })).toMatchSnapshot();
  });

  it('should renders correctly VotingWidget', () => {
    expect(widget({ variant: 'votings', isArrowButton: true, mode: 'dark' })).toMatchSnapshot();
  });

  it('should renders correctly with button', () => {
    expect(
      widget({ variant: 'notifications', isArrowButton: true, mode: 'dark' }),
    ).toMatchSnapshot();
  });

  it('should renders correctly without button', () => {
    expect(
      widget({ variant: 'notifications', isArrowButton: false, mode: 'dark' }),
    ).toMatchSnapshot();
  });
});
