import type { JSX } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { colorPalette } from 'src/theme/colorpalette';

import { Button, Stack, Typography } from '@mui/material';

import { ROUTES } from 'src/routes/paths';

import { StyledHeader } from '../styled';

import {
  Database2LineIcon,
  MoreLineIcon,
  Setting5LineIcon,
  ShareBoxLineIcon,
  Table2Icon,
} from 'src/assets/icons';

interface IProps {
  name?: string;
}

const Header = ({ name }: IProps): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNavigateStages = (): void => {
    navigate(`${ROUTES.DEFAULT.PROJECTS.STAGES.PATH}/${id}`);
  };

  const handleNavigateAssumptions = (): void => {
    navigate(`${ROUTES.DEFAULT.PROJECTS.ASSUMPTIONS.PATH}/${id}`);
  };

  return (
    <StyledHeader>
      <Stack>
        <Typography variant="h6" mr={6}>
          {name}
        </Typography>
        <Button
          variant="outlined"
          endIcon={<Table2Icon pathFill={colorPalette.primary.main} />}
          sx={{ marginRight: (theme) => theme.spacing(2) }}
        >
          Live Funnel
        </Button>
        <Button
          variant="outlined"
          endIcon={<Database2LineIcon pathFill={colorPalette.primary.main} />}
          onClick={handleNavigateAssumptions}
        >
          Assumptions
        </Button>
      </Stack>
      <Stack>
        <Button
          onClick={handleNavigateStages}
          variant="outlined"
          endIcon={<Setting5LineIcon pathFill={colorPalette.primary.main} />}
          sx={{ marginRight: (theme) => theme.spacing(2) }}
        >
          Configure Stages
        </Button>
        <Button variant="outlined" color="secondary" endIcon={<ShareBoxLineIcon />}>
          Share
        </Button>
        <Button variant="outlined" color="secondary" sx={{ marginLeft: (theme) => theme.spacing(2) }}>
          <MoreLineIcon />
        </Button>
      </Stack>
    </StyledHeader>
  );
};

export default Header;
