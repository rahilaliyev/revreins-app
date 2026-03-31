import type { ID, IStage } from 'src/types/interfaces';

import type { IConversionSegment } from '../assumptions/types';

interface IStageConversion extends ID {
  assumption_category_id: number;
  stage_from: IStage;
  stage_from_id: number;
  stage_to: IStage;
  stage_to_id: number;
  conversion_segments?: IConversionSegment[];
}

export interface IStageConversionResponse {
  stage_conversions: IStageConversion[];
}
