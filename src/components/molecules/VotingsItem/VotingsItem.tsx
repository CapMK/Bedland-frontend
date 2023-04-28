import Icon from 'components/atoms/Icon/Icon';
import Typography from 'components/atoms/Typography/Typography';
import { useContext, useState } from 'react';
import { mockDataForVotingChart } from 'utils/mock/chartsMockData';
import { ThemeContext } from 'theme/ThemeContext';
import Button from 'components/atoms/Button/Button';
import CustomChart from '../CustomChart/CustomChart';
import * as Styled from './VotingsItem.styled';
import { dateDiffinDays, addLeadingZero, switchVariant } from './VotingsItem.utils';

export type VotingsItemProps = {
  deadlineDate: Date;
};

const VotingsItem = ({ deadlineDate }: VotingsItemProps) => {
  const { palette } = useContext(ThemeContext);
  const [isUnfold, setIsUnfold] = useState<boolean>(false);
  const newDeadlineDate = new Date(deadlineDate);
  const curDate = new Date();

  const dataForm = `${addLeadingZero(
    newDeadlineDate.getMonth() + 1,
  )}/${newDeadlineDate.getFullYear()}`;

  return (
    <Styled.VotingsItemContainer palette={palette}>
      <Styled.VotingsItemHeader
        palette={palette}
        onClick={() => setIsUnfold(!isUnfold)}
        data-testid='votings-item'
      >
        <Icon name='document' color='inputGrey' size={20} isActive={false} />
        <Typography
          variant='header4'
          style={{
            marginLeft: '1.188rem',
            flex: 1,
            fontWeight: dateDiffinDays(curDate, newDeadlineDate) < 0 ? '400' : '600',
          }}
          color='inputGrey'
        >
          Resolution {dataForm}
        </Typography>
        <Typography
          variant='header5'
          style={{
            marginRight: '1.438rem',
          }}
        >
          {switchVariant(curDate, newDeadlineDate)}
        </Typography>
        <Styled.IconWrapper isUnfold={isUnfold} data-testid='votings-item-icon'>
          <Button
            variant='icon'
            icon='arrowRight'
            iconSize={20}
            iconColor='inputGrey'
            onClick={() => null}
          />
        </Styled.IconWrapper>
      </Styled.VotingsItemHeader>

      <Styled.UnfoldContainer
        isUnfold={isUnfold}
        date={dateDiffinDays(curDate, newDeadlineDate)}
        data-testid='unfolded-container'
      >
        <Typography
          variant='dataInputsAndTooltips'
          color='inputGrey'
          style={{ padding: '10px 6px' }}
        >
          Resolution on the transfer of the water supply network located in the housing estate to
          the municipal water supply and sewage company
        </Typography>

        {dateDiffinDays(curDate, newDeadlineDate) < 0 ? (
          <Styled.ChartWrapper>
            <CustomChart variant='voting' data={mockDataForVotingChart} title='voting example' />
          </Styled.ChartWrapper>
        ) : (
          <Button wrapper style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <Button wrapper style={{ marginRight: '2.8rem' }}>
              <Button variant='primary' type='button'>
                Vote now
              </Button>
            </Button>
          </Button>
        )}
      </Styled.UnfoldContainer>
    </Styled.VotingsItemContainer>
  );
};

export default VotingsItem;
