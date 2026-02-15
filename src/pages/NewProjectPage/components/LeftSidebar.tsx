import type { Dispatch, JSX, SetStateAction } from 'react';
import { EStageAddEditMode } from 'src/types/enums';

import type { IUiStage } from 'src/apis/projects/types';

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

  const handleAddStage = (): void => {
    const tempId = Date.now();

    const newStage: IUiStage = {
      id: tempId,
      name: 'New stage',
      mode: EStageAddEditMode.ADD,
    };

    setStages((prev) => [...prev, newStage]);
    reset({
      name: 'New Stage',
      crmObject: 'Lead',
      dateField: 'Lead',
    });
    setActiveStage?.(tempId);
  };

  return (
    <StyledStagesSidebar width="31%">
      <Typography fontWeight={500}>Pipeline Stages</Typography>
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
