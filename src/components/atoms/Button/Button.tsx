import { PropsWithChildren, useState } from 'react';
import Icon from '../Icon/Icon';
import { IsIconNullGuard, ButtonProps, BUTTON_VARIANTS } from './Button.types';
import { getStyledButton, getIconColor, getWrapper, addHover } from './Button.utils';

const Button = ({
  wrapper,
  width,
  height,
  marginTop = 0,

  variant = BUTTON_VARIANTS.primary,
  color = 'orange',
  hover = 'default',
  hoverColor = 'blueLight',

  icon = null,
  iconSize = 20,
  iconColor,
  children,
  ...otherProps
}: PropsWithChildren<ButtonProps>) => {
  if (wrapper) {
    const { ButtonWrapper, styling } = getWrapper({ width, height, marginTop });
    return (
      <ButtonWrapper styling={styling} style={otherProps.style}>
        {children}
      </ButtonWrapper>
    );
  }

  const { StyledButton, styling } = getStyledButton(variant, color);
  const defaultIconColor = iconColor || getIconColor(styling.color);
  const [iconClr, setIconClr] = useState(defaultIconColor);
  const stylingWithHover = addHover({ hover, hoverColor, styling });

  return (
    <StyledButton
      styling={{ ...stylingWithHover }}
      onMouseEnter={() => {
        setIconClr(hover !== 'default' ? hoverColor : defaultIconColor);
      }}
      onMouseLeave={() => {
        setIconClr(defaultIconColor);
      }}
      {...otherProps}
    >
      {!IsIconNullGuard(icon) ? (
        <Icon name={icon} size={iconSize} color={iconClr} isActive={false} />
      ) : null}

      {children}
    </StyledButton>
  );
};

export default Button;
