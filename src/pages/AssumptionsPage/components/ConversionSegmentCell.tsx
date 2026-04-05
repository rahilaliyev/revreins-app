import { type ChangeEvent, type JSX, useEffect } from 'react';
import { useWatch } from 'react-hook-form';

import { Stack, TableCell, Typography } from '@mui/material';

import { CustomSelectField, CustomTextField } from 'src/components';

import { useAssumptionsFormContext } from '../validationSchema';

interface IProps {
  stageIdx: number;
  segmentIdx: number;
}

const MONTH_ITEMS = Array.from({ length: 12 }, (_, i) => ({
  label: `${i + 1} Month${i > 0 ? 's' : ''}`,
  value: i + 1,
}));

const RATE_MODE_ITEMS = [
  ...Array.from({ length: 12 }, (_, i) => ({
    label: `Average of Last ${i + 1} Month${i > 0 ? 's' : ''}`,
    value: `last_${i + 1}_months`,
  })),
  { label: 'Manual Rate', value: 'manual_rate' },
];

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
  }, [rateMode, segmentIdx, stageIdx, setValue]);

  return (
    <>
      <TableCell align="right" width={150}>
        <CustomSelectField
          size="small"
          defaultValue=""
          name={`stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.rateMode`}
          placeholder="Average of Last X Months"
          items={RATE_MODE_ITEMS}
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
          <CustomSelectField
            size="small"
            name={`stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.stageCycleMonths`}
            placeholder="Months"
            items={MONTH_ITEMS}
          />
        </Stack>
      </TableCell>
    </>
  );
};

export default ConversionSegmentCell;
