import { type ChangeEvent, type JSX, useEffect } from 'react';
import { useWatch } from 'react-hook-form';

import { type SelectChangeEvent, Stack, TableCell, Typography } from '@mui/material';

import { CustomSelectField, CustomTextField } from 'src/components';

import { useAssumptionsFormContext } from '../validationSchema';

interface IProps {
  stageIdx: number;
  segmentIdx: number;
}

const ConversionSegmentCell = ({ stageIdx, segmentIdx }: IProps): JSX.Element => {
  const { setValue, control } = useAssumptionsFormContext();

  const rateMode = useWatch({
    control,
    name: `stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.rateMode`,
  });

  useEffect(() => {
    if (rateMode !== 'manual_rate') {
      setValue(`stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.manualRate`, null, {
        shouldDirty: true,
      });
    }
  }, [rateMode]);

  console.log(rateMode);

  return (
    <>
      <TableCell align="right" width={150}>
        <CustomSelectField
          size="small"
          defaultValue=""
          name={`stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.rateMode`}
          placeholder="Average of Last X Months"
          items={[
            ...Array.from({ length: 12 }, (_, i) => ({
              label: `Last ${i + 1} Months`,
              value: `last_${i + 1}_months`,
            })),
            { label: 'Manual Rate', value: 'manual_rate' },
          ]}
        />
        {rateMode === 'manual_rate' && (
          <CustomTextField
            size="small"
            name={`stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.manualRate`}
            placeholder="Enter rate"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue(
                `stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.manualRate`,
                Number(e.target.value),
                { shouldDirty: true, shouldValidate: true },
              )
            }
          />
        )}
      </TableCell>
      <TableCell align="right" width={130}>
        <Stack gap={1}>
          <CustomTextField
            size="small"
            name={`stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.stageCycleMonths`}
            placeholder="35"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue(
                `stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.stageCycleMonths`,
                Number(e.target.value),
                { shouldDirty: true, shouldValidate: true },
              )
            }
          />
          <Typography fontWeight={500}>days</Typography>
        </Stack>
      </TableCell>
    </>
  );
};

export default ConversionSegmentCell;
