import { CSSProperties, PropsWithChildren, useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import { TypographyProps } from './Typography.types';
import variantToElement from './Typography.utils';

const Typography = ({ variant, style, color, children }: PropsWithChildren<TypographyProps>) => {
  const { palette, typography } = useContext(ThemeContext);
  const Element = variantToElement[variant ?? 'paragraph'];

  const colorStyles: CSSProperties = {
    color: color ? palette[color] : 'none',
  };

  return (
    <Element
      style={{
        ...typography[variant ?? 'paragraph'],
        ...colorStyles,
        ...style,
      }}
    >
      {children}
    </Element>
  );
};

export default Typography;
