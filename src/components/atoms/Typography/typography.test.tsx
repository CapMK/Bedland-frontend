import { cleanup } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { renderWithProviders } from 'utils/test.utils';
import Typography from './Typography';
import { TypographyProps } from './Typography.types';

describe('Typography', () => {
  afterEach(cleanup);
  const item = ({ variant, color, children }: PropsWithChildren<TypographyProps>) =>
    renderWithProviders(
      <Typography variant={variant} color={color}>
        {children}
      </Typography>,
      {},
    );

  it('should renders correctly typography - paragraph', () => {
    expect(
      item({ variant: 'paragraph', color: 'blueDark', children: 'Paragraph' }),
    ).toMatchSnapshot();
  });

  it('should renders correctly typography - header4', () => {
    expect(item({ variant: 'header4', color: 'blueDark', children: 'header4' })).toMatchSnapshot();
  });
});
