import { STATUS_VARIANTS } from 'components/organisms/GenericTable/GenericTable.types';

export const nodes = [
  {
    flatsNumber: 1,
    floor: 1,
    id: 1,
    residents: ['John Paul II', 'Keanu Reeves', 'Arnold Schwarzeneger'],
    deadline: new Date('11/17/1995'),
    editColumn: true,
  },
  {
    flatsNumber: 2,
    floor: 2,
    id: 2,
    residents: ['John Paul II', 'Keanu Reeves', 'Arnold Schwarzeneger'],
    deadline: new Date('11/17/1995'),
    editColumn: true,
  },
  {
    flatsNumber: 3,
    floor: 3,
    id: 3,
    residents: ['John Paul II', 'Keanu Reeves', 'Arnold Schwarzeneger'],
    deadline: new Date('11/17/1995'),
    editColumn: true,
  },
];

export const buildingDetailsNodes = [
  {
    flatsNumber: 1,
    floor: 1,
    id: 1,
    residents: ['John Paul II', 'Keanu Reeves', 'Arnold Schwarzeneger'],
    monthlyPayments: STATUS_VARIANTS.Submitted,
    lastMaintenance: new Date('11/17/1995'),
    editColumn: true,
  },
  {
    flatsNumber: 2,
    floor: 2,
    id: 2,
    residents: ['John Paul II', 'Keanu Reeves', 'Arnold Schwarzeneger'],
    monthlyPayments: STATUS_VARIANTS.Incomplete,
    lastMaintenance: new Date('11/17/1995'),
    editColumn: true,
  },
  {
    flatsNumber: 3,
    floor: 3,
    id: 3,
    residents: ['John Paul II', 'Keanu Reeves', 'Arnold Schwarzeneger'],
    monthlyPayments: STATUS_VARIANTS.Arrearage,
    lastMaintenance: new Date('11/17/1995'),
    editColumn: true,
  },
];

export const residentsDetailsNodes = [
  {
    building: 'Miedziana Street 3',
    flat: 1,
    floor: 1,
    id: 1,
    residents: ['John Paul II', 'Keanu Reeves', 'Arnold Schwarzeneger'],
    contactDetails: '+48 777613008',
    sendMessage: true,
  },
  {
    building: 'Miedziana Street 3',
    flat: 2,
    floor: 2,
    id: 2,
    residents: ['John Paul II', 'Keanu Reeves', 'Arnold Schwarzeneger'],
    contactDetails: '+48 777613008',
    sendMessage: true,
  },
  {
    building: 'Miedziana Street 3',
    flat: 3,
    floor: 3,
    id: 3,
    residents: ['John Paul II', 'Keanu Reeves', 'Arnold Schwarzeneger'],
    contactDetails: '+48 777613008',
    sendMessage: true,
  },
];

export default nodes;
