import Image from 'components/atoms/Image/Image';
import DefaultImage from 'assets/img/Loginlogo.svg';
import LoginForm from 'components/organisms/LoginForm/LoginForm';
import MainBodyFull from 'components/templates/MainBodyFull/MainBodyFull';

const LoginPage = () => (
  <MainBodyFull>
    <Image src={DefaultImage} alt='' />
    <LoginForm />
  </MainBodyFull>
);
export default LoginPage;
