import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import { Action, State } from '@table-library/react-table-library/types/common';
import { useRowSelect, SelectTypes } from '@table-library/react-table-library/select';
import { GenericTableProps } from './GenericTable.types';
import { mapColumnHeaders, tableTheme } from './GenericTable.utils';

const GenericTable = ({ nodes, isSelect, tableName }: GenericTableProps) => {
  const data = { nodes };
  const theme = useTheme([getTheme(), tableTheme(isSelect, tableName)]);
  const columns = mapColumnHeaders(nodes[0], isSelect);

  const onSelectChange = (action: Action, state: State) => {
    console.log(action, state);
  };

  const select = useRowSelect(
    data,
    {
      onChange: onSelectChange,
    },
    {
      rowSelect: SelectTypes.MultiSelect,
      buttonSelect: SelectTypes.MultiSelect,
    },
  );

  return (
    <CompactTable
      columns={columns}
      data={data}
      theme={theme}
      select={isSelect ? select : null}
      layout={{ custom: true }}
    />
  );
};

export default GenericTable;
