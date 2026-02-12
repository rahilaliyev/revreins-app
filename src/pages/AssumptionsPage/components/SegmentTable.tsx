import type { JSX } from 'react';
import { useFieldArray } from 'react-hook-form';
import { colorPalette } from 'src/theme/colorpalette';
import { ELeadCustomFieldType } from 'src/types/enums';

import { useGetLeadCustomFields } from 'src/apis/breakdowns';

import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';

import { CustomSelectField, CustomTextField } from 'src/components';

import { StyledAssumptionTable, StyledDeleteIconWrapper } from '../styled';
import { useAssumptionsFormContext } from '../validationSchema';

import { AddLineIcon, DeleteBinLineIcon, Edit2LineIcon, InformationLineIcon } from 'src/assets/icons';

const SegmentTable = (): JSX.Element => {
  const { control } = useAssumptionsFormContext();

  const { fields, append, remove } = useFieldArray({
    name: 'segments',
    control,
  });

  const { data } = useGetLeadCustomFields({ type: ELeadCustomFieldType.CHOICES });

  const addSegmentField = (index: number): void => {
    append({
      name: `Segment ${index + 1}`,
      field: '',
    });
  };

  return (
    <TableContainer
      sx={{
        border: `1px solid ${colorPalette.other.stroke}`,
        borderRadius: (theme) => theme.spacing(4),
      }}
    >
      <StyledAssumptionTable aria-label="table">
        <TableHead sx={{ bgcolor: colorPalette.primary.bgSecondary }}>
          <TableRow>
            <TableCell>
              <Stack>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  sx={{ color: (theme) => theme.palette.primary.main }}
                >
                  Breakdown source field
                </Typography>
                <Tooltip
                  title={
                    <Typography variant="caption2" fontWeight={500}>
                      <Typography variant="caption2" fontWeight={700}>
                        Breakdown source
                      </Typography>
                      field will determine the field on which you can create your segments
                    </Typography>
                  }
                  placement="top-start"
                >
                  <IconButton sx={{ marginLeft: 4 }}>
                    <InformationLineIcon width={24} height={24} pathFill={colorPalette.other.icon} />
                  </IconButton>
                </Tooltip>
              </Stack>
            </TableCell>
            <TableCell width={200}>
              <CustomSelectField
                name="businessType"
                defaultValue="businessType"
                items={[{ value: 'businessType', label: 'Business type' }]}
                placeholder="Business Type"
                sx={{ background: colorPalette.background.main }}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="body1" fontWeight={600}>
                Segment Name
              </Typography>
            </TableCell>
            <TableCell align="right" width={200}>
              <Stack justifyContent="space-between">
                <Typography variant="body1" fontWeight={600}>
                  Segment Field
                </Typography>
                <Button
                  type="button"
                  onClick={() => addSegmentField(fields.length)}
                  size="small"
                  sx={{ padding: 0, width: (theme) => theme.spacing(8) }}
                >
                  <AddLineIcon width={16} height={16} pathFill={colorPalette.primary.bgSecondary} />
                </Button>
              </Stack>
            </TableCell>
          </TableRow>
          {fields.map((field, index) => (
            <TableRow key={field.id}>
              <TableCell>
                <CustomTextField
                  name={`segments.${index}.name`}
                  size="small"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <Edit2LineIcon width={20} height={20} pathFill={colorPalette.other.icon} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    maxWidth: (theme) => theme.spacing(60),
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: '2px solid',
                      borderColor: (theme) => theme.palette.primary.main,
                    },
                  }}
                />
              </TableCell>
              <TableCell width={250}>
                <Stack gap={4}>
                  <CustomSelectField
                    name={`segments.${index}.field`}
                    items={[{ value: 'midMarket', label: 'Mid market' }]}
                    size="small"
                  />
                  <StyledDeleteIconWrapper onClick={() => remove(index)}>
                    <DeleteBinLineIcon width={16} height={16} pathFill={colorPalette.other.icon} />
                  </StyledDeleteIconWrapper>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledAssumptionTable>
    </TableContainer>
  );
};

export default SegmentTable;
