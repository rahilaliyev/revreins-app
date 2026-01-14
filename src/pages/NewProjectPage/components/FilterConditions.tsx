import type { JSX } from 'react';
import { useFieldArray } from 'react-hook-form';
import { colorPalette } from 'src/theme/colorpalette';
import { ELogicalOperator } from 'src/types/enums';

import { Box, Button, Stack, Typography } from '@mui/material';

import { StyledNoFilterGroup } from '../styled';

import Group from './Group';
import { useStageFormContext } from './validationSchema';

import { AddLineIcon, FilterLineIcon } from 'src/assets/icons';

const FilterConditions = (): JSX.Element => {
  const { control } = useStageFormContext();

  const {
    fields: groups,
    append: addGroup,
    remove: removeGroup,
  } = useFieldArray({
    control,
    name: 'groups',
  });

  const handleAddGroup = (): void => {
    addGroup({
      conditions: [
        {
          field: 'Amount',
          operator: 'Equals',
          value: '',
          nextOperator: ELogicalOperator.AND,
        },
        {
          field: 'Amount',
          operator: 'Equals',
          value: '',
          nextOperator: ELogicalOperator.AND,
        },
        {
          field: 'Amount',
          operator: 'Equals',
          value: '',
          nextOperator: ELogicalOperator.AND,
        },
      ],
    });
  };

  return (
    <Box mt={8}>
      <Stack justifyContent="space-between">
        <Typography variant="body1" fontWeight={500}>
          Filter Groups
        </Typography>
        <Button
          onClick={handleAddGroup}
          size="small"
          startIcon={<AddLineIcon pathFill={colorPalette.inverted.invertedBg} width={16} height={16} />}
        >
          <Typography variant="caption1" fontWeight={500}>
            New Group
          </Typography>
        </Button>
      </Stack>
      {groups.length ? (
        groups?.map((field, index) => <Group key={field.id} index={index} removeGroup={removeGroup} />)
      ) : (
        <StyledNoFilterGroup>
          <FilterLineIcon width={40} height={40} pathFill="#D1D5DC" />
          <Typography variant="body1" mt={3} mb={1}>
            No Filters Applied
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            All Lead records will be included
          </Typography>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            startIcon={<AddLineIcon pathFill={colorPalette.other.icon} />}
            sx={{ background: 'white' }}
            onClick={handleAddGroup}
          >
            <Typography variant="body2" fontWeight={500}>
              Add Your First Filter
            </Typography>
          </Button>
        </StyledNoFilterGroup>
      )}
    </Box>
  );
};

export default FilterConditions;
