import { type Dispatch, type JSX, type SetStateAction, useRef, useState } from 'react';
import { useSortable } from '@dnd-kit/react/sortable';
import { EStageAddEditMode } from 'src/types/enums';

import type { IUiStage } from 'src/apis/projects/types';
import { useDeleteStageMutation } from 'src/apis/stages';

import { CircularProgress, IconButton, Stack, Typography } from '@mui/material';

import { StyledNumberQueue, StyledStageCard } from '../styled';

import { DragIcon, TrashIcon } from 'src/assets/icons';

interface IProps {
  stages: IUiStage[];
  stage: IUiStage;
  activeStage?: number;
  setActiveStage?: (stageId: number) => void;
  setStages: Dispatch<SetStateAction<IUiStage[]>>;
  projectId: number;
}

const StageCard = ({
  projectId,
  stages,
  activeStage,
  setStages,
  stage,
  setActiveStage,
}: IProps): JSX.Element => {
  const [element, setElement] = useState<Element | null>(null);
  const handleRef = useRef<HTMLButtonElement | null>(null);

  useSortable({
    id: stage?.id || 0,
    index: stage?.order || 0,
    element,
    handle: handleRef,
  });

  const { mutate: deleteStage, isPending } = useDeleteStageMutation(projectId);

  const handleDeleteStage = (id: number): void => {
    const currentStage = stages.find((el) => el.id === activeStage);

    if (currentStage?.mode === EStageAddEditMode.EDIT) {
      deleteStage(id.toString());
    } else if (currentStage?.mode === EStageAddEditMode.ADD) {
      setStages((prev) => prev.filter((el) => el.id !== id));
    }

    if (activeStage === id) {
      const remainingStages = stages.filter((el) => el.id !== id);
      const lastStageId = remainingStages.at(-1)?.id;
      if (lastStageId) {
        setActiveStage?.(lastStageId);
      }
    }
  };

  return (
    <StyledStageCard
      mt={3}
      isActive={activeStage === stage.id}
      onClick={() => stage?.id && setActiveStage?.(stage.id)}
      ref={setElement}
    >
      <Stack justifyContent="space-between">
        <Stack gap={2}>
          <IconButton ref={handleRef}>
            <DragIcon stroke="#99A1AF" />
          </IconButton>
          <StyledNumberQueue>
            <Typography variant="caption2" fontWeight={500} component="p">
              {stages.indexOf(stage) + 1}
            </Typography>
          </StyledNumberQueue>
        </Stack>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            if (stage.id !== undefined) {
              handleDeleteStage(stage.id);
            }
          }}
        >
          {isPending ? <CircularProgress size={16} /> : <TrashIcon />}
        </IconButton>
      </Stack>
      <Typography variant="body2" component="p" fontWeight={500} mt={2}>
        {stage.name}
      </Typography>
      <Typography variant="caption2" component="p" mt={1} mb={1} color="text.secondary">
        {stage.crm_object_id}
      </Typography>
    </StyledStageCard>
  );
};

export default StageCard;
