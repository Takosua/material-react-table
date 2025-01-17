import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { data } from './makeData';

const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enablePagination: false,
    enableRowPinning: true,
    enableRowSelection: true,
    enableStickyHeader: true,
    rowPinningDisplayMode: 'select-sticky',
    getRowId: (row) => row.email,
    muiTableContainerProps: {
      sx: {
        maxHeight: '400px',
      },
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
