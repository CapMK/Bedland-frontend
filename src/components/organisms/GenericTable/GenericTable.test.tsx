import { renderWithProviders } from 'utils/test.utils';
import { buildingDetailsNodes, nodes } from 'utils/mock/mockGenericTable';
import { TABLE_NAMES } from './GenericTable.types';
import { mapColumnHeaders, columnsRenderers, setColumnWidths } from './GenericTable.utils';
import GenericTable from './GenericTable';

describe('Generic Table', () => {
  it('buildings table  renders correctly with selects', () => {
    const snapshot = renderWithProviders(
      <GenericTable nodes={buildingDetailsNodes} isSelect tableName={TABLE_NAMES.buildingsTable} />,
      {},
    );
    expect(snapshot).toMatchSnapshot();
  });
  it('buildings table  renders correctly without selects', () => {
    const snapshot = renderWithProviders(
      <GenericTable
        nodes={buildingDetailsNodes}
        isSelect={false}
        tableName={TABLE_NAMES.buildingsTable}
      />,
      {},
    );
    expect(snapshot).toMatchSnapshot();
  });

  it('mapColumnHeaders correctly creates mapped object if isSelect is true', () => {
    const columns = mapColumnHeaders(nodes[0], true);

    expect(columns[0]?.select).toBeTruthy();
    expect(columns.length).toEqual(5);
    expect(Object.keys(columns[0]).length).toEqual(3);
    expect(Object.keys(columns[1]).length).toEqual(2);
  });
  it('mapColumnHeaders correctly creates mapped object if isSelect is false', () => {
    const columns = mapColumnHeaders(nodes[0], false);

    expect(columns[0]?.select).toEqual(undefined);
    expect(columns.length).toEqual(5);
    expect(Object.keys(columns[0]).length).toEqual(2);
    expect(Object.keys(columns[1]).length).toEqual(2);
  });

  it('Column widths for Table are correctly preprocessed', () => {
    expect(setColumnWidths(TABLE_NAMES.buildingsTable)).toEqual(
      '0.17fr 0.13fr 0.23fr 0.21fr 0.21fr 0.05fr ',
    );
    expect(setColumnWidths(TABLE_NAMES.testsTable)).toEqual(
      'minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) ',
    );
  });
  it('columnsRenderers resolves correctly', () => {
    expect(columnsRenderers.deadline(nodes[0])).toEqual('11/17/1995');
    expect(
      columnsRenderers.lastMaintenance({ lastMaintenance: new Date('11/17/1995'), id: 1 }),
    ).toEqual('11/17/1995');
  });
});
