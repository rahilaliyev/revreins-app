import { type JSX, type MouseEvent, useState } from 'react';
import dayjs from 'dayjs';
import { UI_DATE_FORMAT } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';
import { EProjectStatus } from 'src/types/enums';

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Chip,
  Divider,
  Menu,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { CreateNewProjectModal, CustomModal } from 'src/components';

import { StyledIconWrapper, StyledMenuItem, StyledMoreIconButton, StyledNoDataWrapper } from '../styled';

import ShareModal from './ShareModal';

import {
  AddFillIcon,
  ContentCopyIcon,
  DeleteIcon,
  DotIcon,
  DriveFileRenameOutlineIcon,
  InsertChartIcon,
  IosShareIcon,
  More2FillIcon,
} from 'src/assets/icons';

const MOCK_DATA = [
  {
    status: EProjectStatus.PUBLISHED,
    name: 'Toronto Market Forecast',
    teamMembers: [
      {
        avatar: null,
      },
    ],
    lastUpdated: '2026-03-03T00:00:00.000000Z',
    forecasts: 2,
  },
  {
    status: EProjectStatus.PUBLISHED,
    name: 'Vancouver Market Forecast',
    teamMembers: [
      {
        avatar: null,
      },
      {
        avatar: null,
      },
    ],
    lastUpdated: '2026-03-03T00:00:00.000000Z',
    forecasts: 3,
  },
  {
    status: EProjectStatus.PUBLISHED,
    name: 'International Markets',
    teamMembers: [
      {
        avatar: null,
      },
      {
        avatar: null,
      },
      {
        avatar: null,
      },
    ],
    lastUpdated: '2026-03-03T00:00:00.000000Z',
    forecasts: 1,
  },
  {
    status: EProjectStatus.DRAFT,
    name: 'Q4 Revenue Projections',
    teamMembers: [],
    lastUpdated: '2026-03-03T00:00:00.000000Z',
    forecasts: 0,
  },
  {
    status: EProjectStatus.PUBLISHED,
    name: 'APAC Expansion Forecast',
    teamMembers: [
      {
        avatar: null,
      },
      {
        avatar: null,
      },
      {
        avatar: null,
      },
      {
        avatar: null,
      },
    ],
    lastUpdated: '2026-03-03T00:00:00.000000Z',
    forecasts: 4,
  },
  {
    status: EProjectStatus.DRAFT,
    name: 'New Product Launch',
    teamMembers: [
      {
        avatar: null,
      },
      {
        avatar: null,
      },
    ],
    lastUpdated: '2026-03-03T00:00:00.000000Z',
    forecasts: 0,
  },
];

const ProjectLists = (): JSX.Element => {
  const [isConfirmModal, setIsConfirmModal] = useState(false);
  const [isOpenNewProjectModal, setIsOpenNewProjectModal] = useState(false);
  const [isOpenShareModal, setIsOpenShareModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const data = MOCK_DATA;

  const handleCreateModalOpen = (): void => setIsOpenNewProjectModal(true);
  const handleCreateModalClose = (): void => setIsOpenNewProjectModal(false);
  const handleMenuClick = (event: MouseEvent<HTMLButtonElement>): void => setAnchorEl(event.currentTarget);
  const handleMenuClose = (): void => setAnchorEl(null);
  const handleOpenDeleteModal = (): void => setIsConfirmModal(true);
  const handleOpenShareModal = (): void => setIsOpenShareModal(true);
  const handleCloseDeleteModal = (): void => {
    setIsConfirmModal(false);
    handleMenuClose();
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <Stack justifyContent="space-between">
        <Box>
          <Typography variant="subtitle1" mb={0.5}>
            Projects
          </Typography>
          <Typography variant="caption1" color="text.secondary" component="p">
            {`${data ? data?.length : 0} projects total`}
          </Typography>
        </Box>
        <Button color="inherit" endIcon={<AddFillIcon />} onClick={handleCreateModalOpen}>
          New Project
        </Button>
      </Stack>
      {data.length ? (
        <TableContainer
          sx={{ marginTop: (theme) => theme.spacing(3), borderRadius: (theme) => theme.spacing(4) }}
        >
          <Table aria-label="table">
            <TableHead>
              <TableRow sx={{ '& th': { padding: (theme) => theme.spacing(3, 4) } }}>
                <TableCell />
                <TableCell sx={{ color: (theme) => theme.palette.text.secondary }}>Project Name</TableCell>
                <TableCell sx={{ color: (theme) => theme.palette.text.secondary }}>Status</TableCell>
                <TableCell sx={{ color: (theme) => theme.palette.text.secondary }}>Team Members</TableCell>
                <TableCell sx={{ color: (theme) => theme.palette.text.secondary }}>Last Updated</TableCell>
                <TableCell sx={{ color: (theme) => theme.palette.text.secondary }}>Forecasts</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, key) => (
                <TableRow key={key}>
                  <TableCell width={40}>
                    <StyledIconWrapper>
                      <InsertChartIcon
                        pathFill={
                          row.status === EProjectStatus.PUBLISHED
                            ? colorPalette.primary.main
                            : colorPalette.other.icon
                        }
                      />
                    </StyledIconWrapper>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>
                      {row.name}
                    </Typography>
                  </TableCell>
                  <TableCell width={120}>
                    <Chip
                      variant={row.status === EProjectStatus.PUBLISHED ? 'filled' : 'outlined'}
                      label={
                        <Typography variant="body2">
                          {row.status.charAt(0).toUpperCase() + row.status.slice(1).toLowerCase()}
                        </Typography>
                      }
                      size="small"
                      color="success"
                      icon={
                        <DotIcon
                          pathFill={
                            row.status === EProjectStatus.PUBLISHED
                              ? colorPalette.primary.bgSecondary
                              : colorPalette.primary.main
                          }
                        />
                      }
                    />
                  </TableCell>
                  <TableCell width={150}>
                    <AvatarGroup max={3} total={row.teamMembers?.length}>
                      {row.teamMembers.length ? (
                        row.teamMembers?.map((el, key) => <Avatar key={key} alt="A" src={el.avatar ?? ''} />)
                      ) : (
                        <Avatar>0</Avatar>
                      )}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell width={160}>
                    <Typography variant="body2" color="text.secondary">
                      {dayjs(row.lastUpdated).format(UI_DATE_FORMAT)}
                    </Typography>
                  </TableCell>
                  <TableCell width={150}>{row.forecasts}</TableCell>
                  <TableCell width={60}>
                    <StyledMoreIconButton
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleMenuClick}
                    >
                      <More2FillIcon />
                    </StyledMoreIconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <StyledNoDataWrapper>
          <Typography variant="body2" fontWeight={500}>
            No projects to display
          </Typography>
        </StyledNoDataWrapper>
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <StyledMenuItem onClick={handleMenuClose}>
          <DriveFileRenameOutlineIcon /> <Typography variant="body2">Rename</Typography>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleOpenShareModal}>
          <IosShareIcon /> <Typography variant="body2">Share</Typography>
        </StyledMenuItem>
        <Divider sx={{ my: (theme) => theme.spacing(2) }} />
        <StyledMenuItem onClick={handleMenuClose}>
          <ContentCopyIcon /> <Typography variant="body2">Duplicate</Typography>
        </StyledMenuItem>
        <Divider sx={{ my: (theme) => theme.spacing(2) }} />
        <StyledMenuItem onClick={handleOpenDeleteModal}>
          <DeleteIcon /> <Typography variant="body2">Delete</Typography>
        </StyledMenuItem>
      </Menu>
      {isConfirmModal && (
        <CustomModal
          open={isConfirmModal}
          onClose={handleCloseDeleteModal}
          title="Toronto Market Forecast - Delete"
          customDialogAction={
            <Box width="100%">
              <Button
                fullWidth
                sx={{ marginBottom: (theme) => theme.spacing(3) }}
                onClick={handleCloseDeleteModal}
                color="secondary"
              >
                Cancel
              </Button>
              <Button fullWidth color="error">
                Delete
              </Button>
            </Box>
          }
        >
          <Typography variant="h6" textAlign="center" mb={4}>
            Are you sure that you want to permanently delete
            <Typography variant="h6" fontWeight={700}>
              Toronto Market Forecast?
            </Typography>
          </Typography>
          <Typography color="text.secondary" textAlign="center">
            You will be able to restore it later from the Deleted Projects.
          </Typography>
        </CustomModal>
      )}
      <CreateNewProjectModal
        isOpenNewProjectModal={isOpenNewProjectModal}
        handleClose={handleCreateModalClose}
      />
      <ShareModal open={isOpenShareModal} onClose={() => setIsConfirmModal(false)} />
    </Box>
  );
};

export default ProjectLists;
