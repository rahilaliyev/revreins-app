import { type ChangeEvent, type JSX, useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { useConversionRateMutation } from 'src/apis/assumptions';
import type { IRate, IRateWithSegment } from 'src/apis/assumptions/types';

import { Stack, TableCell } from '@mui/material';

import { CustomSelectField, CustomTextField } from 'src/components';

import { useAssumptionsFormContext } from '../validationSchema';

interface IProps {
  stageIdx: number;
  segmentIndex: number;
  conversionId: number;
  segmentId?: number;
}

const MONTH_ITEMS = Array.from({ length: 12 }, (_, i) => ({
  label: `${i + 1} Month${i > 0 ? 's' : ''}`,
  value: i + 1,
}));

const AVERAGE_MONTH_ITEMS = [
  ...Array.from({ length: 12 }, (_, i) => ({
    label: `Average of Last ${i + 1} Month${i > 0 ? 's' : ''}`,
    value: (i + 1).toString(),
  })),
  { label: 'Manual Rate', value: 'manual_rate' },
];

const getConversionRate = (
  conversionRate: IRate | IRateWithSegment[],
  segmentId?: number,
): number | undefined => {
  if (segmentId) {
    return Array.isArray(conversionRate)
      ? conversionRate.find((r) => r.segment_id === segmentId)?.rate
      : undefined;
  }
  return Array.isArray(conversionRate) ? undefined : conversionRate.rate;
};

const ConversionSegmentCell = ({ stageIdx, segmentIndex, conversionId, segmentId }: IProps): JSX.Element => {
  const { id } = useParams();
  const { setValue, control } = useAssumptionsFormContext();
  const { mutateAsync: conversionRateMutation } = useConversionRateMutation();

  const [averageMonth, stageCycleMonths, calculatedRate] = useWatch({
    control,
    name: [
      `stageConversions.${stageIdx}.conversionSegments.${segmentIndex}.averageMonth`,
      `stageConversions.${stageIdx}.conversionSegments.${segmentIndex}.stageCycleMonths`,
      `stageConversions.${stageIdx}.conversionSegments.${segmentIndex}.calculatedRate`,
    ],
  });

  useEffect(() => {
    if (averageMonth !== 'manual_rate') {
      setValue(`stageConversions.${stageIdx}.conversionSegments.${segmentIndex}.calculatedRate`, null, {
        shouldDirty: true,
      });
    }
  }, [averageMonth, segmentIndex, stageIdx, setValue]);

  useEffect(() => {
    if (averageMonth === 'manual_rate') {
      return;
    }

    if (averageMonth && stageCycleMonths) {
      conversionRateMutation({
        project_id: Number(id),
        conversion_id: conversionId,
        ...(segmentId && {
          conversion_segments: [
            {
              segment_id: segmentId,
              stage_cycle_months: stageCycleMonths,
              lookback_month: Number(averageMonth),
            },
          ],
        }),
        ...(!segmentId && { stage_cycle_months: stageCycleMonths, lookback_months: Number(averageMonth) }),
      }).then((res) => {
        const rate = getConversionRate(res.conversion_rate, segmentId);

        setValue(
          `stageConversions.${stageIdx}.conversionSegments.${segmentIndex}.calculatedRate`,
          rate?.toString(),
          {
            shouldDirty: true,
            shouldValidate: true,
          },
        );
      });
    }
  }, [
    averageMonth,
    stageCycleMonths,
    conversionRateMutation,
    id,
    setValue,
    segmentIndex,
    stageIdx,
    conversionId,
    segmentId,
  ]);

  return (
    <>
      <TableCell align="right" width={150}>
        <CustomSelectField
          size="small"
          defaultValue=""
          name={`stageConversions.${stageIdx}.conversionSegments.${segmentIndex}.averageMonth`}
          placeholder="Average of Last X Months"
          items={AVERAGE_MONTH_ITEMS}
          helperText={averageMonth === 'manual_rate' ? '' : `Conversion rate: ${calculatedRate ?? 0}`}
        />
        {averageMonth === 'manual_rate' && (
          <CustomTextField
            size="small"
            name={`stageConversions.${stageIdx}.conversionSegments.${segmentIndex}.manualRate`}
            placeholder="Enter rate"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue(
                `stageConversions.${stageIdx}.conversionSegments.${segmentIndex}.manualRate`,
                e.target.value,
                { shouldDirty: true, shouldValidate: true },
              )
            }
          />
        )}
      </TableCell>
      <TableCell align="left" width={130} sx={{ verticalAlign: 'top' }}>
        <Stack gap={1}>
          <CustomSelectField
            size="small"
            name={`stageConversions.${stageIdx}.conversionSegments.${segmentIndex}.stageCycleMonths`}
            placeholder="Months"
            items={MONTH_ITEMS}
          />
        </Stack>
      </TableCell>
    </>
  );
};

export default ConversionSegmentCell;
