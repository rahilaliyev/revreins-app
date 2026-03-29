import { type JSX, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import { DATE_MONTH_FORMAT, MONTH_WORD_FORMAT } from 'src/contants';

import {
  Box,
  IconButton,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import {
  StyledAccordionTable,
  StyledCurrentMonthIndicator,
  StyledCurrentMonthText,
  StyledEditableCell,
  StyledPolygonIconWrapper,
} from './styled';

import { ArrowDownSLineIcon, PolygonIcon } from 'src/assets/icons';

interface IRow {
  id: number;
  label: string;
  values: (number | string)[];
  children?: IRow[];
}

interface ITableRowProps {
  row: IRow;
  level?: number;
  onValueChange?: (rowId: string, monthIndex: number, value: string | number) => void;
  columns: string[];
}

interface IAccordionTableProps {
  data: IRow[];
  onChange?: (rowId: string, monthIndex: number, value: string | number) => void;
  columns: string[];
}

const Row = ({ row, level = 0, onValueChange, columns }: ITableRowProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(row.children?.length);

  const handleValueChange = (monthIndex: number, value: string): void => {
    if (onValueChange) {
      onValueChange(row.id?.toString(), monthIndex, value);
    }
  };

  return (
    <>
      <TableRow hover className={level === 0 ? 'root-row' : 'child-row'}>
        <TableCell>
          <Box display="flex" alignItems="center" pl={level * 3}>
            {hasChildren && (
              <IconButton
                size="small"
                onClick={() => setOpen(!open)}
                sx={{ transform: open ? 'rotate(0deg)' : 'rotate(270deg)' }}
              >
                <ArrowDownSLineIcon width={12} height={12} />
              </IconButton>
            )}
            <Typography variant="body2" fontWeight={600} ml={1}>
              {row.label}
            </Typography>
          </Box>
        </TableCell>

        {columns.map((m, key) => {
          const currentMonth = dayjs().month();
          const isFutureMonth = key > currentMonth;

          const className = key === currentMonth ? 'current-month' : isFutureMonth ? 'future-month' : '';

          return (
            <TableCell key={m} align="right" className={className}>
              {isFutureMonth ? (
                <StyledEditableCell
                  value={row.values[key]}
                  variant="standard"
                  size="small"
                  onChange={(e) => handleValueChange(key, e.target.value)}
                  slotProps={{
                    input: {
                      disableUnderline: true,
                    },
                  }}
                />
              ) : (
                row.values[key]
              )}
            </TableCell>
          );
        })}
      </TableRow>

      {hasChildren &&
        open &&
        row.children?.map((child) => (
          <Row key={child.id} row={child} level={level + 1} onValueChange={onValueChange} columns={columns} />
        ))}
    </>
  );
};

export const AccordionTable = ({ data, onChange, columns }: IAccordionTableProps): JSX.Element => {
  const tableRef = useRef<HTMLTableElement>(null);
  const [indicatorLeft, setIndicatorLeft] = useState(0);

  useEffect(() => {
    const calculatePosition = (): void => {
      if (!tableRef.current) {
        return;
      }

      const currentMonthCell = tableRef.current.querySelector(`thead tr th.current-month`) as HTMLElement;

      if (currentMonthCell) {
        const tableRect = tableRef.current.getBoundingClientRect();
        const cellRect = currentMonthCell.getBoundingClientRect();
        setIndicatorLeft(cellRect.left - tableRect.left);
      }
    };
    calculatePosition();

    window.addEventListener('resize', calculatePosition);
    return (): void => window.removeEventListener('resize', calculatePosition);
  }, [columns]);

  return (
    <Box position="relative">
      <TableContainer>
        <StyledAccordionTable aria-label="collapsible table" ref={tableRef}>
          <TableHead>
            <TableRow>
              <TableCell width={250}>Funnel Stage</TableCell>
              {columns.map((month) => {
                const currentMonth = dayjs().format(DATE_MONTH_FORMAT);

                return (
                  <TableCell
                    key={month}
                    align="right"
                    width={100}
                    className={month === currentMonth ? 'current-month' : ''}
                  >
                    {dayjs(month, DATE_MONTH_FORMAT).format(MONTH_WORD_FORMAT)}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <Row key={row.id} row={row} onValueChange={onChange} columns={columns} />
            ))}
          </TableBody>
        </StyledAccordionTable>
      </TableContainer>
      <StyledCurrentMonthIndicator style={{ left: indicatorLeft }}>
        <StyledCurrentMonthText variant="caption2" color="text.secondary">
          Current period
        </StyledCurrentMonthText>
        <StyledPolygonIconWrapper>
          <PolygonIcon />
        </StyledPolygonIconWrapper>
      </StyledCurrentMonthIndicator>
    </Box>
  );
};
