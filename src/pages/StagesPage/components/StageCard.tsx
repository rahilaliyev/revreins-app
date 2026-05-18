import type { Dispatch, JSX, SetStateAction } from 'react';
import { EStageAddEditMode } from 'src/types/enums';

import type { IUiStage } from 'src/apis/projects/types';
import { useDeleteStageMutation } from 'src/apis/stages';

import { CircularProgress, IconButton, Stack, Typography } from '@mui/material';

import { StyledNumberQueue, StyledStageCard } from '../styled';

const TrashIcon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 4H14" stroke="#99A1AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12.6666 4V13.3333C12.6666 14 11.9999 14.6667 11.3333 14.6667H4.66659C3.99992 14.6667 3.33325 14 3.33325 13.3333V4"
      stroke="#99A1AF"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.33325 4.00001V2.66668C5.33325 2.00001 5.99992 1.33334 6.66659 1.33334H9.33325C9.99992 1.33334 10.6666 2.00001 10.6666 2.66668V4.00001"
      stroke="#99A1AF"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66675 7.33334V11.3333"
      stroke="#99A1AF"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.33325 7.33334V11.3333"
      stroke="#99A1AF"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
    >
      <Stack justifyContent="space-between">
        <Stack gap={2}>
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
