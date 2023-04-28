import Scroll from 'components/atoms/Scroll/Scroll';
import NotificationItem from 'components/molecules/NotificationItem/NotificationItem';
import Widget from 'components/templates/Widget/Widget';

import notifications from './NotificationWidget.utils';

const NotificationWidget = () => {
  const size = 10;
  return (
    <Widget variant='notifications' mode='dark' title='Latest Notifications' onClick={() => null}>
      <Scroll contentSize={18.75}>
        {notifications.slice(0, size).map((notification) => (
          <NotificationItem
            icon={notification.icon}
            date={notification.date}
            text={notification.text}
            key={notification.id}
          />
        ))}
      </Scroll>
    </Widget>
  );
};

export default NotificationWidget;
