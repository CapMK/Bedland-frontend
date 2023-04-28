import { PropsWithChildren, useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import * as Styled from './Scroll.styled';

export type ScrollProps = {
  contentSize: number;
};

const Scroll = ({ children, contentSize }: PropsWithChildren<ScrollProps>) => {
  const { palette } = useContext(ThemeContext);
  return (
    <Styled.ScrollBar contentSize={contentSize} palette={palette}>
      {children}
    </Styled.ScrollBar>
  );
};

export default Scroll;
