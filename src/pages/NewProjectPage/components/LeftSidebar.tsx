import type { JSX } from 'react';

import type { IStage } from 'src/apis/projects/types';
import { useDeleteStageMutation } from 'src/apis/stages';

import { Box, Button, IconButton, Stack, Typography } from '@mui/material';

import { StyledNumberQueue, StyledStageCard, StyledStagesSidebar } from '../styled';

import { AddFillIcon } from 'src/assets/icons';

const FirstIcon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M5.99992 8.66668C6.36811 8.66668 6.66659 8.3682 6.66659 8.00001C6.66659 7.63182 6.36811 7.33334 5.99992 7.33334C5.63173 7.33334 5.33325 7.63182 5.33325 8.00001C5.33325 8.3682 5.63173 8.66668 5.99992 8.66668Z"
      stroke="#99A1AF"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.99992 3.99999C6.36811 3.99999 6.66659 3.70151 6.66659 3.33332C6.66659 2.96513 6.36811 2.66666 5.99992 2.66666C5.63173 2.66666 5.33325 2.96513 5.33325 3.33332C5.33325 3.70151 5.63173 3.99999 5.99992 3.99999Z"
      stroke="#99A1AF"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.99992 13.3333C6.36811 13.3333 6.66659 13.0349 6.66659 12.6667C6.66659 12.2985 6.36811 12 5.99992 12C5.63173 12 5.33325 12.2985 5.33325 12.6667C5.33325 13.0349 5.63173 13.3333 5.99992 13.3333Z"
      stroke="#99A1AF"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99992 8.66668C10.3681 8.66668 10.6666 8.3682 10.6666 8.00001C10.6666 7.63182 10.3681 7.33334 9.99992 7.33334C9.63173 7.33334 9.33325 7.63182 9.33325 8.00001C9.33325 8.3682 9.63173 8.66668 9.99992 8.66668Z"
      stroke="#99A1AF"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99992 3.99999C10.3681 3.99999 10.6666 3.70151 10.6666 3.33332C10.6666 2.96513 10.3681 2.66666 9.99992 2.66666C9.63173 2.66666 9.33325 2.96513 9.33325 3.33332C9.33325 3.70151 9.63173 3.99999 9.99992 3.99999Z"
      stroke="#99A1AF"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99992 13.3333C10.3681 13.3333 10.6666 13.0349 10.6666 12.6667C10.6666 12.2985 10.3681 12 9.99992 12C9.63173 12 9.33325 12.2985 9.33325 12.6667C9.33325 13.0349 9.63173 13.3333 9.99992 13.3333Z"
      stroke="#99A1AF"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
  stages: IStage[];
  activeStage?: number;
  setActiveStage?: (stageId: number) => void;
  projectId: number;
}

const LeftSidebar = ({ stages, activeStage, setActiveStage, projectId }: IProps): JSX.Element => {
  const handleAddStage = (): void => {};

  const { mutate: deleteStage } = useDeleteStageMutation(projectId);

  const handleDeleteStage = (id: number): void => {
    deleteStage(id.toString());
  };

  return (
    <StyledStagesSidebar width="31%">
      <Typography variant="body1" fontWeight={500}>
        Pipeline Stages
      </Typography>
      {stages?.map((stage) => (
        <StyledStageCard
          key={stage.id}
          mt={3}
          isActive={activeStage === stage.id}
          onClick={() => setActiveStage?.(stage.id)}
        >
          <Stack justifyContent="space-between">
            <Stack gap={2}>
              <IconButton>
                <FirstIcon />
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
                handleDeleteStage(stage.id);
              }}
            >
              <TrashIcon />
            </IconButton>
          </Stack>
          <Typography variant="body2" component="p" fontWeight={500} mt={2}>
            {stage.name}
          </Typography>
          <Typography variant="caption2" component="p" mt={1} mb={1} color="text.secondary">
            {stage.crm_object_id}
          </Typography>
        </StyledStageCard>
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
