import Typography from 'components/atoms/Typography/Typography';
import Icon from 'components/atoms/Icon/Icon';
import { NavLink } from 'react-router-dom';
import { PropsWithChildren } from 'react';

import * as Styled from './Page.styled';

type PageProps = {
  title?: string;
  goBack?: string;
};

const defaultProps: PageProps = {
  title: '',
  goBack: '',
};

const Page = ({ title, goBack, children }: PropsWithChildren<PageProps>) => (
  <Styled.Box>
    <Styled.Title>
      {goBack && (
        <NavLink to={goBack}>
          <Icon name='arrowLeft' color='text' size={16} isActive activeColor='text' />
        </NavLink>
      )}
      <Typography variant='header2' color='text'>
        {title}
      </Typography>
    </Styled.Title>
    <Styled.Content>{children}</Styled.Content>
  </Styled.Box>
);

export default Page;

Page.defaultProps = defaultProps;
