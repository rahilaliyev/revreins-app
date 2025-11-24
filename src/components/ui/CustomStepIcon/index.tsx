import type { JSX } from 'react';
import { colorPalette } from 'src/theme/colorpalette';

import { Stack, type StepIconProps, Typography } from '@mui/material';

import { CheckFillIcon } from 'src/assets/icons';

type TStepIconStyle = {
  bg: string;
  content: JSX.Element;
};

export const CustomStepIcon = (props: StepIconProps): JSX.Element => {
  const { active, completed, icon } = props;

  const getStyles = (): TStepIconStyle => {
    if (completed) {
      return {
        bg: colorPalette.secondary.bg,
        content: <CheckFillIcon width={18} height={18} pathFill={colorPalette.primary.main} />,
      };
    }

    if (active) {
      return {
        bg: colorPalette.primary.main,
        content: (
          <Typography variant="body2" lineHeight="20px" color={colorPalette.text.textInverse}>
            {icon}
          </Typography>
        ),
      };
    }

    return {
      bg: colorPalette.secondary.bg,
      content: (
        <Typography variant="body2" lineHeight="20px" color="textSecondary">
          {icon}
        </Typography>
      ),
    };
  };

  const { bg, content } = getStyles();

  return (
    <Stack
      width={28}
      height={28}
      borderRadius="50%"
      alignItems="center"
      justifyContent="center"
      sx={{ background: bg }}
    >
      {content}
    </Stack>
  );
};
