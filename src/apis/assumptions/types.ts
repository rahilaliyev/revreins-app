export interface IConversionSegment {
  segment_id: number;
  stage_cycle_months: number;
  rate_mode: string;
  manual_rate: number;
}

interface IStageConversionPayload {
  stage_from_id: number;
  stage_to_id: number;
  assumption_category_id: number;
  conversion_segments?: IConversionSegment[];
}

export interface IAssumptionGeneratePayload {
  project_id: number;
  stage_conversions: IStageConversionPayload[];
}

export interface IConversion {
  conversion_id: number;
  stage_from_id: number;
  stage_to_id: number;
  stage_from_name: string;
  stage_to_name: string;
  data: TForecastStage;
}

interface IForecastSegment {
  anchor_month: string;
  growth_rate: number;
  segment_id: number;
  segment_name: string;
  conversions: IConversion[];
  stages: { data: TForecastStage; stage_id: number; stage_name: string }[];
}

type TForecastStage = Record<
  string,
  {
    count: number;
    is_projected: boolean;
  }
>;

export interface IForecast {
  generated_at: string;
  horizon_months: number;
  project_id: number;
  segments: IForecastSegment[];
  totals: TForecastStage[];
}
