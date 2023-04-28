export const ColumnVariants = [
  'flatsNumber',
  'floor',
  'residents',
  'monthlyPayments',
  'lastMaintenance',
  'building',
  'flat',
  'status',
  'payment',
  'deadline',
  'payments',
  'contactDetails',
  'editColumn',
  'sendMessage',
] as const;

export type ColumnVariant = (typeof ColumnVariants)[number];

export type ColumnVariantsType = {
  [key in ColumnVariant]: string;
};

export const buildingsColumnVariants = [
  'flatsNumber',
  'floor',
  'residents',
  'monthlyPayments',
  'lastMaintenance',
  'editColumn',
] as const;

export type BuildingsColumnVariant = (typeof buildingsColumnVariants)[number];

export type BuildingsColumnVariantsType = {
  [key in BuildingsColumnVariant]: string;
};

export const testsColumnVariants = [
  'flatsNumber',
  'floor',
  'residents',
  'deadline',
  'editColumn',
] as const;

export type TestsColumnVariant = (typeof testsColumnVariants)[number];

export type TestsColumnVariantsType = {
  [key in TestsColumnVariant]: string;
};

export const TableNames = ['buildingsTable', 'testsTable', 'residentsTable'] as const;

export type TableName = (typeof TableNames)[number];

export type TableNamesType = {
  [key in TableName]: string;
};

export type TableNamesTypes = {
  [key in TableName]: key;
};

export const TABLE_NAMES: TableNamesTypes = {
  buildingsTable: 'buildingsTable',
  testsTable: 'testsTable',
  residentsTable: 'residentsTable',
};

export const residentsColumnVariants = [
  'floor',
  'residents',
  'building',
  'flat',
  'contactDetails',
  'sendMessage',
] as const;

export type ResidentsColumnVariant = (typeof residentsColumnVariants)[number];

export type ResidentsColumnVariantsType = {
  [key in ResidentsColumnVariant]: string;
};

export const StatusVariants = ['Incomplete', 'Submitted', 'Arrearage'] as const;

export type StatusVariant = (typeof StatusVariants)[number];

export type StatusVariantsType = {
  [key in StatusVariant]: key;
};

export const STATUS_VARIANTS: StatusVariantsType = {
  Incomplete: 'Incomplete',
  Submitted: 'Submitted',
  Arrearage: 'Arrearage',
} as const;

export const COLUMN_VARIANTS: ColumnVariantsType = {
  flatsNumber: 'Flats Number',
  floor: 'Floor',
  residents: 'Residents',
  monthlyPayments: 'Monthly Payments',
  lastMaintenance: 'Last Maintenance',
  building: 'Building',
  flat: 'Flat',
  status: 'Status',
  payment: 'Payment',
  deadline: 'Deadline',
  payments: 'Payments',
  contactDetails: 'Contact Details',
  editColumn: '',
  sendMessage: '',
} as const;

export type nodesTypes = {
  building?: string;
  flat?: number;
  status?: Element;
  payment?: string;
  deadline?: Date;
  flatsNumber?: number;
  floor?: number;
  residents?: string[];
  monthlyPayments?: StatusVariant;
  lastMaintenance?: Date;
  payments?: Element;
  contactDetails?: string;
  id: number;
  editColumn?: boolean;
  sendMessage?: boolean;
};

export type GenericTableProps = { nodes: nodesTypes[]; isSelect: boolean; tableName: TableName };
