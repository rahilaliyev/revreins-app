import { type ChangeEvent, type JSX, useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { useConversationRateMutation } from 'src/apis/assumptions';

import { Stack, TableCell, Typography } from '@mui/material';

import { CustomSelectField, CustomTextField } from 'src/components';

import { useAssumptionsFormContext } from '../validationSchema';

interface IProps {
  stageIdx: number;
  segmentIdx: number;
  stageFromId?: number;
  stageToId?: number;
}

const MONTH_ITEMS = Array.from({ length: 12 }, (_, i) => ({
  label: `${i + 1} Month${i > 0 ? 's' : ''}`,
  value: i + 1,
}));

const RATE_MODE_ITEMS = [
  ...Array.from({ length: 12 }, (_, i) => ({
    label: `Average of Last ${i + 1} Month${i > 0 ? 's' : ''}`,
    value: i + 1,
  })),
  { label: 'Manual Rate', value: 'manual_rate' },
];

const ConversionSegmentCell = ({ stageIdx, segmentIdx, stageFromId, stageToId }: IProps): JSX.Element => {
  const { id } = useParams();
  const { setValue, control } = useAssumptionsFormContext();
  const { mutateAsync: conversationRateMutation } = useConversationRateMutation();

  const [rateMode, stageCycleMonths, manualRate] = useWatch({
    control,
    name: [
      `stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.rateMode`,
      `stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.stageCycleMonths`,
      `stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.manualRate`,
    ],
  });

  useEffect(() => {
    if (rateMode !== 'manual_rate') {
      setValue(`stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.manualRate`, null, {
        shouldDirty: true,
      });
    }
  }, [rateMode, segmentIdx, stageIdx, setValue]);

  useEffect(() => {
    if (rateMode === 'manual_rate') {
      return;
    }

    if (rateMode && stageCycleMonths) {
      conversationRateMutation({
        project_id: Number(id),
        stage_from_id: stageFromId ?? 0,
        stage_to_id: stageToId ?? 0,
        stage_cycle_months: stageCycleMonths,
        lookback_months: Number(rateMode),
      }).then((res) => {
        setValue(
          `stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.manualRate`,
          res.conversion_rate,
          { shouldDirty: true, shouldValidate: true },
        );
      });
    }
  }, [
    rateMode,
    stageCycleMonths,
    conversationRateMutation,
    id,
    stageFromId,
    stageToId,
    setValue,
    segmentIdx,
    stageIdx,
  ]);

  return (
    <>
      <TableCell align="right" width={150}>
        <CustomSelectField
          size="small"
          defaultValue=""
          name={`stageConversions.${stageIdx}.conversionSegments.${segmentIdx}.rateMode`}
          placeholder="Average of Last X Months"
          items={RATE_MODE_ITEMS}
          helperText={!!manualRate && rateMode !== 'manual_rate' ? `Conversion rate: ${manualRate} .` : ''}
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
