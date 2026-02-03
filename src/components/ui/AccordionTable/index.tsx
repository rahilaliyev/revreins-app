import { type JSX, useState } from 'react';

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

import { StyledAccordionTable } from './styled';

import { ArrowDownSLineIcon } from 'src/assets/icons';

type TMonth = 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun' | 'jul' | 'aug' | 'sep' | 'oct' | 'nov' | 'dec';

interface IFunnelRow {
  id: string;
  label: string;
  values: Record<TMonth, number | string>;
  children?: IFunnelRow[];
}

const MONTHS: TMonth[] = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const Row = ({ row, level = 0 }: { row: IFunnelRow; level?: number }): JSX.Element => {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(row.children?.length);

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

        {MONTHS.map((m) => (
          <TableCell key={m} align="right">
            {row.values[m]}
          </TableCell>
        ))}
      </TableRow>

      {hasChildren &&
        open &&
        row.children?.map((child) => <Row key={child.id} row={child} level={level + 1} />)}
    </>
  );
};

export const AccordionTable = ({ data }: { data: IFunnelRow[] }): JSX.Element => (
  <TableContainer>
    <StyledAccordionTable aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell>Funnel Stage</TableCell>
          {MONTHS.map((m) => (
            <TableCell key={m} align="right">
              {m.toLowerCase()}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <Row key={row.id} row={row} />
        ))}
      </TableBody>
    </StyledAccordionTable>
  </TableContainer>
);
