import type { JSX } from 'react';
import { useFieldArray } from 'react-hook-form';
import { CONDITION_OPERATOR_OPTIONS, LOGIC_OPERATOR_OPTIONS } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';
import { ELogicalOperator } from 'src/types/enums';

import { Box, Button, Chip, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';

import { CustomSelectField, CustomTextField } from 'src/components';

import { StyledCenteredDivider, StyledFilterGroup } from '../styled';

import { useStageFormContext } from './validationSchema';

import { AddLineIcon, CloseLineIcon, DeleteBinLineIcon } from 'src/assets/icons';

interface IProps {
  index: number;
  removeGroup: (index: number) => void;
}

const Group = ({ index, removeGroup }: IProps): JSX.Element => {
  const { control, setValue } = useStageFormContext();

  const {
    fields: conditions,
    append: addCondition,
    remove: removeCondition,
  } = useFieldArray({
    control,
    name: `groups.${index}.conditions`,
  });

  const handleAddCondition = (): void => {
    const lastIndex = conditions.length - 1;

    setValue(`groups.${index}.conditions.${lastIndex}.nextOperator`, ELogicalOperator.AND);

    addCondition({
      field: 'Amount',
      operator: 'Equals',
      value: '',
    });
  };

  const handleRemoveCondition = (conditionIndex: number): void => {
    const isLast = conditionIndex === conditions.length - 1;
    const isFirst = conditionIndex === 0;

    if (isLast && conditions.length > 1) {
      setValue(`groups.${index}.conditions.${conditionIndex - 1}.nextOperator`, undefined);
    }

    if (!isLast && !isFirst) {
      const nextOperator = conditions[conditionIndex]?.nextOperator;

      setValue(`groups.${index}.conditions.${conditionIndex - 1}.nextOperator`, nextOperator);
    }

    removeCondition(conditionIndex);
  };

  return (
    <StyledFilterGroup>
      <Stack justifyContent="space-between" alignItems="center" mb={4}>
        <Chip
          variant="outlined"
          label={<Typography>Group {index + 1}</Typography>}
          size="small"
          color="success"
        />
        <IconButton onClick={() => removeGroup(index)}>
          <DeleteBinLineIcon width={16} height={16} pathFill={colorPalette.other.icon} />
        </IconButton>
      </Stack>
      <Box>
        {conditions?.map((field, conditionIndex) => (
          <Box key={field.id}>
            <Grid spacing={2} container>
              <Grid size={4}>
                <CustomSelectField
                  name={`groups.${index}.conditions.${conditionIndex}.field`}
                  items={[{ value: 'Amount', label: 'Amount' }]}
                  size="small"
                  sx={{ background: 'rgba(0, 0, 0, 0.04)' }}
                />
              </Grid>
              <Grid size={3}>
                <CustomSelectField
                  name={`groups.${index}.conditions.${conditionIndex}.operator`}
                  items={CONDITION_OPERATOR_OPTIONS}
                  size="small"
                  sx={{ background: 'rgba(0, 0, 0, 0.04)' }}
                />
              </Grid>
              <Grid size={4}>
                <CustomTextField
                  name={`groups.${index}.conditions.${conditionIndex}.value`}
                  placeholder="Value"
                  size="small"
                  sx={{ background: 'rgba(0, 0, 0, 0.04)' }}
                />
              </Grid>
              <Grid size={1}>
                <IconButton
                  sx={{ height: '100%', width: '100%' }}
                  onClick={() => handleRemoveCondition(conditionIndex)}
                >
                  <CloseLineIcon width={16} height={16} pathFill={colorPalette.other.icon} />
                </IconButton>
              </Grid>
            </Grid>
            {conditionIndex < conditions.length - 1 && (
              <Stack justifyContent="center" alignItems="center" my={3} position="relative">
                <Box width={110} px={1} zIndex={1} bgcolor="white">
                  <CustomSelectField
                    name={`groups.${index}.conditions.${conditionIndex}.nextOperator`}
                    items={LOGIC_OPERATOR_OPTIONS}
                    size="small"
                  />
                </Box>
                <StyledCenteredDivider />
              </Stack>
            )}
          </Box>
        ))}
        <Button
          fullWidth
          startIcon={<AddLineIcon />}
          variant="outlined"
          color="secondary"
          sx={{ marginTop: (theme) => theme.spacing(4) }}
          onClick={handleAddCondition}
        >
          Add Condition to Group
        </Button>
      </Box>
    </StyledFilterGroup>
  );
};

export default Group;
