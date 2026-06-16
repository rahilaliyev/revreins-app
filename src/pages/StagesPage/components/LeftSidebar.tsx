import type { Dispatch, JSX, SetStateAction } from 'react';
import type { UniqueIdentifier } from '@dnd-kit/abstract';
import { move } from '@dnd-kit/helpers';
import { DragDropProvider, type DragEndEvent } from '@dnd-kit/react';
import { ECRMObjectType, EStageAddEditMode } from 'src/types/enums';

import type { IUiStage } from 'src/apis/projects/types';
import { useReorderStageMutation } from 'src/apis/stages';

import { Box, Button, Typography } from '@mui/material';

import { StyledStagesSidebar } from '../styled';
import { useStageFormContext } from '../validationSchema';

import StageCard from './StageCard';

import { AddFillIcon } from 'src/assets/icons';

interface IProps {
  stages: IUiStage[];
  activeStage?: number;
  setActiveStage?: (stageId: number) => void;
  setStages: Dispatch<SetStateAction<IUiStage[]>>;
  projectId: number;
}

const LeftSidebar = ({ stages, activeStage, setActiveStage, projectId, setStages }: IProps): JSX.Element => {
  const { reset } = useStageFormContext();
  const { mutate: reorderStageMutation } = useReorderStageMutation();

  const handleAddStage = (): void => {
    const tempId = Date.now();

    const newStage: IUiStage = {
      id: tempId,
      name: 'New stage',
      mode: EStageAddEditMode.ADD,
      order: stages.length,
    };

    setStages((prev) => [...prev, newStage]);
    reset({
      name: 'New Stage',
      crmObject: ECRMObjectType.LEAD,
      dateField: 0,
    });
    setActiveStage?.(tempId);
  };

  const handleDragEnd = (event: DragEndEvent): void => {
    setStages((prev) => {
      const reordered = move(prev as unknown as { id: UniqueIdentifier }[], event) as IUiStage[];
      return reordered.map((stage, index) => ({
        ...stage,
        order: index,
      }));
    });

    const payloadRequest = stages.map((stage) => ({
      id: stage.id ?? 0,
      order: stage.order ?? 0,
    }));
    reorderStageMutation(payloadRequest);
  };

  return (
    <StyledStagesSidebar width="31%">
      <Typography fontWeight={500}>Pipeline Stages</Typography>
      <DragDropProvider onDragEnd={handleDragEnd}>
        {stages?.map((stage) => (
          <StageCard
            key={stage.id}
            stages={stages}
            activeStage={activeStage}
            setActiveStage={setActiveStage}
            projectId={projectId}
            setStages={setStages}
            stage={stage}
          />
        ))}
      </DragDropProvider>
      <Box mt={7.5}>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          startIcon={<AddFillIcon width={16} height={16} />}
          size="small"
          onClick={handleAddStage}
        >
          <Typography variant="body2" fontWeight={500}>
            Add Stage
          </Typography>
        </Button>
      </Box>
    </StyledStagesSidebar>
  );
};

export default LeftSidebar;
