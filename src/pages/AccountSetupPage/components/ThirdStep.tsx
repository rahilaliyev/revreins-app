import { type JSX, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TEMPLATES } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';
import { ESetupCard } from 'src/types/enums';

import { Box, Button, Chip, Fade, Grid, List, ListItem, Stack, Tooltip, Typography } from '@mui/material';

import { CustomTextField } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import {
  StyledCard,
  StyledIconCardWrapper,
  StyledTemplateCard,
  StyledTemplateCardIconWrapper,
} from '../styled';

import { type TThirdStepFormData, validationThirdStepSchema } from './validationSchema';

import {
  AddBoxLineIcon,
  AddFillIcon,
  DeleteBinLineIcon,
  Filter2FillIcon,
  InformationLineIcon,
  LayoutLineIcon,
} from 'src/assets/icons';

const ThirdStep = (): JSX.Element => {
  const [selectedCard, setSelectedCard] = useState<ESetupCard>();
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const formBag = useForm<TThirdStepFormData>({
    resolver: zodResolver(validationThirdStepSchema),
    defaultValues: { name: '', type: '', stages: [{ value: '' }] },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'stages',
    control: formBag.control,
  });

  const handleSelectedCard = (type: ESetupCard): void => setSelectedCard(type);

  const handleSelectedTemplate = (template: string): void => setSelectedTemplate(template);

  const handleSubmit = (data: TThirdStepFormData): void => {};

  return (
    <Box pt={2}>
      <Box>
        <Typography variant="h6" fontWeight={500}>
          Choose Your Starting Point
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Select a pre-made CRM template or set one up from scratch
        </Typography>
      </Box>
      <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
        <Box py={4}>
          <Typography variant="body2" fontWeight={600} mb={2.5}>
            Name your project
          </Typography>
          <CustomTextField name="name" placeholder="Default Project" />
        </Box>
        <Box display="flex" gap={4}>
          <StyledCard
            isActive={selectedCard === ESetupCard.TEMPLATE}
            onClick={() => handleSelectedCard(ESetupCard.TEMPLATE)}
          >
            <StyledIconCardWrapper isActive={selectedCard === ESetupCard.TEMPLATE} width={56} height={56}>
              <LayoutLineIcon pathFill={colorPalette.primary.hover} />
            </StyledIconCardWrapper>
            <Typography mt={2} mb={0.5} fontWeight={500} variant="body1">
              Use Template
            </Typography>
            <Typography variant="caption2" color="textSecondary">
              Start with pre-built funnel templates
            </Typography>
          </StyledCard>
          <StyledCard
            isActive={selectedCard === ESetupCard.SCRATCH}
            onClick={() => handleSelectedCard(ESetupCard.SCRATCH)}
          >
            <StyledIconCardWrapper isActive={selectedCard === ESetupCard.SCRATCH}>
              <AddBoxLineIcon pathFill={colorPalette.primary.hover} />
            </StyledIconCardWrapper>
            <Typography mt={2} mb={0.5} fontWeight={500} variant="body1">
              Start from Scratch
            </Typography>
            <Typography variant="caption2" color="textSecondary">
              Build your own custom funnel stages
            </Typography>
          </StyledCard>
        </Box>
        <Box pt={4}>
          {selectedCard === ESetupCard.TEMPLATE && (
            <Fade in={selectedCard === ESetupCard.TEMPLATE} timeout={500} mountOnEnter unmountOnExit>
              <Box>
                <Typography variant="body1" mb={2}>
                  Available Templates
                </Typography>

                <Box maxHeight={200} overflow="auto" pr={1}>
                  <Grid container spacing={2}>
                    {TEMPLATES.map((el, key) => (
                      <Grid size={6} key={key}>
                        <StyledTemplateCard
                          onClick={() => handleSelectedTemplate(el.title)}
                          isActive={el.title === selectedTemplate}
                        >
                          <Stack justifyContent="space-between" width="100%">
                            <StyledTemplateCardIconWrapper isActive={el.title === selectedTemplate}>
                              <Filter2FillIcon />
                            </StyledTemplateCardIconWrapper>

                            <Chip
                              variant="outlined"
                              label={
                                <Stack alignItems="center" gap={1}>
                                  <Typography variant="caption2">Details</Typography>
                                  <Tooltip
                                    placement="bottom-start"
                                    title={
                                      <List>
                                        <ListItem />
                                      </List>
                                    }
                                  >
                                    <InformationLineIcon width={14} height={14} />
                                  </Tooltip>
                                </Stack>
                              }
                              size="small"
                            />
                          </Stack>

                          <Box mt={2}>
                            <Typography variant="body1">{el.title}</Typography>
                            <Typography variant="caption2" component="p" color="textSecondary">
                              {el.description}
                            </Typography>
                          </Box>
                        </StyledTemplateCard>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Fade>
          )}
          {selectedCard === ESetupCard.SCRATCH && (
            <Fade in={selectedCard === ESetupCard.SCRATCH} timeout={500} mountOnEnter unmountOnExit>
              <Box>
                <Typography variant="h6" fontWeight={500}>
                  Define Your Stages
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Set up your custom funnel stages, you’ll be able to map them later.
                </Typography>
                <Box maxHeight={200} overflow="auto" pr={1} my={4}>
                  <Grid container spacing={2}>
                    {fields.map((field, index) => (
                      <Grid size={12} key={field.id}>
                        <Box display="flex" gap={2} alignItems="center">
                          <CustomTextField
                            name={`stages.${index}.value`}
                            placeholder={`Stage ${index + 1}`}
                            size="small"
                          />

                          <Button variant="outlined" color="error" onClick={() => remove(index)}>
                            <DeleteBinLineIcon width={16} height={16} />
                          </Button>
                        </Box>
                      </Grid>
                    ))}
                    <Grid size={12}>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        sx={{ gap: 2 }}
                        onClick={() => append({ value: '' })}
                      >
                        New Stage <AddFillIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Fade>
          )}
        </Box>
      </CustomFormProvider>
    </Box>
  );
};

export default ThirdStep;
