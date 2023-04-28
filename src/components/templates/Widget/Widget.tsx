import Button from 'components/atoms/Button/Button';
import Typography from 'components/atoms/Typography/Typography';
import { PropsWithChildren, useContext } from 'react';

import { ThemeContext } from 'theme/ThemeContext';
import { defaultWidgetProps, WidgetProps } from './Widget.types';
import * as Styled from './Widget.styled';
import variantToSize from './Widget.utils';

const Widget = ({
  variant,
  title,
  mode = 'dark',
  isArrowButton = false,
  onClick,
  children,
}: PropsWithChildren<WidgetProps>) => {
  const { palette } = useContext(ThemeContext);
  const colorCondition = mode === 'light' ? 'blueDark' : 'white';

  return (
    <Styled.WidgetElement
      palette={palette}
      mode={mode}
      minHeight={variantToSize[variant].minHeight}
      minWidth={variantToSize[variant].minWidth}
    >
      <Styled.WidgetHeader mode={mode} palette={palette}>
        <Typography variant='header3' color={colorCondition}>
          {title}
        </Typography>
        {isArrowButton ? (
          <Button
            variant='icon'
            icon='arrowRight'
            iconColor={colorCondition}
            iconSize={24}
            onClick={onClick}
          />
        ) : null}
      </Styled.WidgetHeader>
      {children}
    </Styled.WidgetElement>
  );
};

Widget.defaultProps = defaultWidgetProps;

export default Widget;
