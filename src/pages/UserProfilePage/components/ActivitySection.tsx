import type { JSX } from 'react';
import dayjs from 'dayjs';
import { UI_TIME_FORMAT } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';
import { EActivityType } from 'src/types/enums';

import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';

import { StyledActivityIconWrapper } from '../styled';

import { AddLineIcon, CalendarLineIcon, ChartIcon } from 'src/assets/icons';

const MOCK_DATA = [
  {
    id: 1,
    type: EActivityType.UPDATE,
    projectName: 'Toronto Market Forecast',
    activityTime: '2026-02-02T09:18:26.000000Z',
  },
  {
    id: 2,
    type: EActivityType.UPDATE,
    projectName: 'Vancouver Market Forecast',
    activityTime: '2026-02-02T09:18:26.000000Z',
  },
  {
    id: 3,
    type: EActivityType.UPDATE,
    projectName: 'International Markets',
    activityTime: '2026-02-02T09:18:26.000000Z',
  },
  {
    id: 4,
    type: EActivityType.PUBLISH,
    projectName: 'Toronto Market Forecast',
    activityTime: '2026-02-02T09:18:26.000000Z',
  },
  {
    id: 5,
    type: EActivityType.CREATE,
    projectName: 'International Markets',
    activityTime: '2026-02-02T09:18:26.000000Z',
  },
];

const ACTIVITY_TYPE = {
  [EActivityType.CREATE]: {
    icon: <AddLineIcon width={16} height={16} pathFill={colorPalette.info.main} />,
    bgColor: colorPalette.info.bgHover,
    title: 'Project Created',
    description: (name: string) => `Created project "${name}"`,
  },
  [EActivityType.UPDATE]: {
    icon: <ChartIcon />,
    bgColor: colorPalette.warning.bgHover,
    title: 'Project Updated',
    description: (name: string) => `Updated project "${name}"`,
  },
  [EActivityType.PUBLISH]: {
    icon: <CalendarLineIcon width={16} height={16} pathFill={colorPalette.success.main} />,
    bgColor: colorPalette.success.bgHover,
    title: 'Forecast Published',
    description: (name: string) => `Published forecast for "${name}"`,
  },
} as const;

const ActivitySection = (): JSX.Element => (
  <Box mt={6}>
    <Typography variant="subtitle1" mb={4}>
      Last Activity
    </Typography>
    <TableContainer
      sx={{
        border: `1px solid ${colorPalette.other.stroke}`,
        borderRadius: (theme) => theme.spacing(4),
      }}
    >
      <Table aria-label="table">
        <TableBody>
          {MOCK_DATA.map((el) => {
            const type = ACTIVITY_TYPE[el.type];

            return (
              <TableRow key={el.id}>
                <TableCell width={32}>
                  <StyledActivityIconWrapper sx={{ background: type.bgColor }}>
                    {type.icon}
                  </StyledActivityIconWrapper>
                </TableCell>
                <TableCell sx={{ paddingLeft: 0 }}>
                  <Typography>{type.title}</Typography>
                  <Typography>{type.description(el.projectName)}</Typography>
                </TableCell>
                <TableCell align="right">{dayjs(el.activityTime).format(UI_TIME_FORMAT)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default ActivitySection;
