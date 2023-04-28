import { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { AppStore, rootMiddleware, rootReducer, RootState } from 'store/store';
import { Provider } from 'react-redux';
import { MemoryRouter, useLocation } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';

const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid='location-display'>{location.pathname}</div>;
};

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  initialUrl?: string;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    initialUrl = '/',
    store = configureStore({
      reducer: rootReducer,
      middleware: rootMiddleware,
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  const Wrapper = ({ children }: PropsWithChildren<object>): JSX.Element => (
    <ThemeProvider>
      <MemoryRouter initialEntries={[initialUrl]}>
        <Provider store={store}>{children}</Provider>
        <LocationDisplay />
      </MemoryRouter>
    </ThemeProvider>
  );

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from '@testing-library/react';
