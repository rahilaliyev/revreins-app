interface ISegmentPayload {
  segment_id: number;
  stage_cycle_months: number;
  rate_mode: string;
  manual_rate: number;
}

interface IStageConversionPayload {
  stage_from_id: number;
  stage_to_id: number;
  assumption_category_id: number;
  conversion_segments?: ISegmentPayload[];
}

export interface IAssumptionGeneratePayload {
  project_id: number;
  stage_conversions: IStageConversionPayload[];
}

interface IForecastSegment {
  anchor_month: string;
  growth_rate: number;
  segment_id: number;
  segment_name: string;
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
  stages: { data: TForecastStage }[];
  totals: TForecastStage[];
}
