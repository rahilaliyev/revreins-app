import type { ID, IStage } from 'src/types/interfaces';

interface IStageConversion extends ID {
  assumption_category_id: number;
  stage_from: IStage;
  stage_from_id: number;
  stage_to: IStage;
  stage_to_id: number;
}

export interface IStageConversionResponse {
  stage_conversions: IStageConversion[];
}
