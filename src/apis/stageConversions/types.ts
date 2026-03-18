import type { ID, IStage } from 'src/types/interfaces';

interface IStageConversion extends ID {
  stage_from: IStage;
  stage_to: IStage;
}

export interface IStageConversionResponse {
  stage_conversions: IStageConversion[];
}
