import VotingsItem from 'components/molecules/VotingsItem/VotingsItem';
import Widget from 'components/templates/Widget/Widget';
import Scroll from 'components/atoms/Scroll/Scroll';
import votings from './VotingsWidget.utils';

const VotingsWidget = () => (
  <Widget variant='votings' mode='dark' title='Votings' isArrowButton onClick={() => null}>
    <Scroll contentSize={21.75}>
      {votings.map((voting) => (
        <VotingsItem deadlineDate={voting.deadlineDate} key={voting.id} />
      ))}
    </Scroll>
  </Widget>
);

export default VotingsWidget;
