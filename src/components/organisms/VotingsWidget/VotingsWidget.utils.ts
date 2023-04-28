export type Votings = { deadlineDate: Date; id: number };

const votings: Votings[] = [
  { deadlineDate: new Date(2023, 2, 16), id: 1 },
  { deadlineDate: new Date(2023, 9, 2), id: 2 },
  { deadlineDate: new Date(2023, 2, 22), id: 3 },
  { deadlineDate: new Date(2023, 2, 28), id: 4 },
  { deadlineDate: new Date(2023, 3, 4), id: 5 },
];

export default votings;
