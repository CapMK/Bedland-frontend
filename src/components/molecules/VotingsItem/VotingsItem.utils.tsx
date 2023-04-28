import Badge from 'components/atoms/Badge/Badge';

export const dateDiffinDays = (startDate: Date, endDate: Date) => {
  const utcEndDate = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
  const utcStartDate = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  return Math.floor((utcEndDate - utcStartDate) / (24 * 60 * 60 * 1000));
};

export const addLeadingZero = (date: number) => {
  const stringDate = date.toString();
  return stringDate.length === 1 ? `0${stringDate}` : stringDate;
};

export const switchVariant = (curDate: Date, newDeadlineDate: Date) => {
  switch (true) {
    case dateDiffinDays(curDate, newDeadlineDate) < 0:
      return (
        <Badge variant='secondary'>
          {Math.abs(dateDiffinDays(curDate, newDeadlineDate))} days ago
        </Badge>
      );
    case dateDiffinDays(curDate, newDeadlineDate) < 8:
      return <Badge variant='danger'>{dateDiffinDays(curDate, newDeadlineDate)} days left</Badge>;
    case dateDiffinDays(curDate, newDeadlineDate) < 15:
      return <Badge variant='warning'>{dateDiffinDays(curDate, newDeadlineDate)} days left</Badge>;
    default:
      return <Badge variant='primary'>{dateDiffinDays(curDate, newDeadlineDate)} days left</Badge>;
  }
};
