import { UserRoles } from 'store/reducers/user/user_slice';
import Typography from '../Typography/Typography';
import * as Styled from './AccountInfo.styled';

const AccountInfo = ({ userRole, userLogin }: { userRole: UserRoles; userLogin: string }) => (
  <Styled.AccountInfo>
    <Typography variant='header5' color='text'>
      {userLogin ?? userLogin}
    </Typography>
    <Typography variant='subHeader' color='inputGrey'>
      {userRole}
    </Typography>
  </Styled.AccountInfo>
);
export default AccountInfo;
