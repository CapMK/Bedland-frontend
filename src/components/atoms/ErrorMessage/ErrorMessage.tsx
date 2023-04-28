import { FC, PropsWithChildren } from 'react';

import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';
import * as Styled from './ErrorMessage.styled';

const ErrorMessage: FC<PropsWithChildren> = ({ children }) => (
  <Styled.ErrorRow>
    <div style={{ display: 'flex' }}>
      <Icon name='alert' color='redLight' size={20} isActive={false} />
    </div>
    <Typography variant='dataInputsAndTooltips' color='redLight'>
      {children}
    </Typography>
  </Styled.ErrorRow>
);

export default ErrorMessage;
