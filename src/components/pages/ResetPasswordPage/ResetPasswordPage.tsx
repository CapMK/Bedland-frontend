import Image from 'components/atoms/Image/Image';
import DefaultImage from 'assets/img/LogoResident.svg';
import MainBodyFull from 'components/templates/MainBodyFull/MainBodyFull';
import SetNewPassword from 'components/organisms/SetNewPassword/SetNewPassword';

const ResetPasswordPage = () => (
  <MainBodyFull>
    <Image src={DefaultImage} alt='' />
    <SetNewPassword />
  </MainBodyFull>
);
export default ResetPasswordPage;
