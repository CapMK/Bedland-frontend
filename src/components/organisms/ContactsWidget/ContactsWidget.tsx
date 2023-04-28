import MessageItem from 'components/molecules/MessageItem/MessageItem';
import Widget from 'components/templates/Widget/Widget';
import Avatar from 'assets/img/Avatar.svg';
import { useNavigate } from 'react-router-dom';
import routes from 'App/routing/routes';
import Scroll from 'components/atoms/Scroll/Scroll';

type Contacts = { name: string; image: string };

const contacts: Contacts[] = [
  { name: 'Joe Livingstone', image: Avatar },
  { name: 'Hiram Bosh', image: Avatar },
  { name: 'Hannah Comberstone', image: Avatar },
  { name: 'Thomas Blake', image: Avatar },
  { name: 'Jessie Burton', image: Avatar },
  { name: 'Jack Sparrow', image: Avatar },
  { name: 'Gabriel Martinez', image: Avatar },
];

const ContactsWidget = () => {
  const size = 10;
  const navigate = useNavigate();

  return (
    <Widget
      variant='contacts'
      mode='light'
      title='Recent contacts'
      isArrowButton
      onClick={() => navigate(routes.messages)}
    >
      <Scroll contentSize={21.75}>
        {contacts.slice(0, size).map((contact) => (
          <MessageItem name={contact.name} image={contact.image} key={contact.name} />
        ))}
      </Scroll>
    </Widget>
  );
};

export default ContactsWidget;
