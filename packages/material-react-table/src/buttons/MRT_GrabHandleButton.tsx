import { type DragEventHandler } from 'react';
import IconButton, { type IconButtonProps } from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { parseFromValuesOrFunc } from '../column.utils';
import { type MRT_RowData, type MRT_TableInstance } from '../types';

interface Props<TData extends MRT_RowData> {
  iconButtonProps?: IconButtonProps;
  location?: 'column' | 'row';
  onDragEnd: DragEventHandler<HTMLButtonElement>;
  onDragStart: DragEventHandler<HTMLButtonElement>;
  table: MRT_TableInstance<TData>;
}

export const MRT_GrabHandleButton = <TData extends MRT_RowData>({
  iconButtonProps,
  location,
  onDragEnd,
  onDragStart,
  table,
}: Props<TData>) => {
  const {
    options: {
      icons: { DragHandleIcon },
      localization,
    },
  } = table;

  return (
    <Tooltip
      arrow
      enterDelay={1000}
      enterNextDelay={1000}
      placement="top"
      title={iconButtonProps?.title ?? localization.move}
    >
      <IconButton
        disableRipple
        draggable="true"
        size="small"
        {...iconButtonProps}
        onClick={(e) => {
          e.stopPropagation();
          iconButtonProps?.onClick?.(e);
        }}
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        sx={(theme) => ({
          '&:active': {
            cursor: 'grabbing',
          },
          '&:hover': {
            backgroundColor: 'transparent',
            opacity: 1,
          },
          cursor: 'grab',
          m: '0 -0.1rem',
          opacity: location === 'row' ? 1 : 0.3,
          p: '2px',
          transition: 'all 150ms ease-in-out',
          ...(parseFromValuesOrFunc(iconButtonProps?.sx, theme) as any),
        })}
        title={undefined}
      >
        <DragHandleIcon />
      </IconButton>
    </Tooltip>
  );
};
