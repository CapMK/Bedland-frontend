import { PropsWithChildren, useContext } from 'react';
import { ColorNames } from 'theme/theme.types';
import { ThemeContext } from 'theme/ThemeContext';
import * as Styled from './MainBodyFull.styled';

type MainBodyFullProps = {
  backgroundColor?: ColorNames;
};

const defaultProps: MainBodyFullProps = {
  backgroundColor: 'sidebar',
};

const MainBodyFull = ({
  backgroundColor = 'sidebar',
  children,
}: PropsWithChildren<MainBodyFullProps>) => {
  const { palette } = useContext(ThemeContext);
  return (
    <Styled.MainBodyFullLayout backgroundColor={palette[backgroundColor]}>
      {children}
    </Styled.MainBodyFullLayout>
  );
};

export default MainBodyFull;

MainBodyFull.defaultProps = defaultProps;
