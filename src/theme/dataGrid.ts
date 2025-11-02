import type { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';

import { colorPalette } from './colorpalette';

export const dataGridTheme: DataGridComponents = {
  MuiDataGrid: {
    defaultProps: {
      disableColumnResize: true,
      columnHeaderHeight: 40,
      rowHeight: 40,
      hideFooter: true,
      disableColumnMenu: true,
      disableVirtualization: false,
    },
    styleOverrides: {
      root: {
        fontFamily: 'Gilroy, sans-serif',
        backgroundColor: colorPalette.primary.light,
        border: 'none',
        '& .MuiDataGrid-row--borderBottom ': {
          backgroundColor: `${colorPalette.primary.light} !important`,
        },
      },
      main: {
        width: '100%',
        overflow: 'auto',
      },
      row: {
        '&.Mui-selected': {
          backgroundColor: 'transparent',
        },
        '&:not(:last-child)': {
          borderBottom: `1px solid ${colorPalette.secondary.light}`,
        },
      },
      cell: {
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: 400,
        borderColor: 'transparent',
        color: colorPalette.common.black,
        overflowX: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',

        '&:focus': {
          outline: 'none',
        },
        '&:focus-within': {
          outline: 'none',
        },
      },
      columnHeaders: {
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      },
      columnHeader: {
        height: 'auto !important',
        backgroundColor: colorPalette.primary.light,
        padding: '8px 12px',
        fontSize: '12px',
        lineHeight: '18px',
        color: colorPalette.secondary.dark,
        borderBottom: `1px solid ${colorPalette.secondary.light}`,

        '&:focus-within': {
          outline: 'none',
        },

        '&--sortable': {
          cursor: 'default',
        },
      },
      columnHeaderTitleContainer: {
        whiteSpace: 'normal',
        height: '100%',
      },
      columnHeaderTitleContainerContent: {
        height: '100%',
        '& > .MuiBox-root': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      },
      columnSeparator: {
        display: 'none',
      },
      overlay: {
        backgroundColor: 'transparent',

        '& .MuiCircularProgress-root': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      virtualScrollerRenderZone: {
        backgroundColor: 'transparent',
        padding: '8px 12px',
      },
      virtualScrollerContent: {
        paddingBottom: '14px',
      },
    },
  },
};
