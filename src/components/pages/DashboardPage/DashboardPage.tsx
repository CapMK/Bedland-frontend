import ContactsWidget from 'components/organisms/ContactsWidget/ContactsWidget';
import NotificationWidget from 'components/organisms/NotificationWidget/NotificationWidget';
import PaymentWidget from 'components/organisms/PaymentWidget/PaymentWidget';
import VotingsWidget from 'components/organisms/VotingsWidget/VotingsWidget';
import Page from 'components/templates/Page/Page';
import * as Styled from './DashboardPage.styled';

const DashboardPage = () => (
  <Page title='Welcome Trish!'>
    <Styled.DashboardContent>
      <Styled.DashboardRow firstColumn={49.41} secondColumn={48.62}>
        <NotificationWidget />
        <PaymentWidget />
      </Styled.DashboardRow>
      <Styled.DashboardRow firstColumn={38.98} secondColumn={59.05}>
        <ContactsWidget />
        <VotingsWidget />
      </Styled.DashboardRow>
    </Styled.DashboardContent>
  </Page>
);

export default DashboardPage;
