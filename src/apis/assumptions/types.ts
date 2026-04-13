export interface IConversionSegment {
  segment_id: number;
  stage_cycle_months: number;
  rate_mode: string | null;
  manual_rate: number | null;
}

interface IStageConversionPayload {
  stage_from_id: number;
  stage_to_id: number;
  assumption_category_id: number | null;
  conversion_segments?: IConversionSegment[];
}

export interface IAssumptionGeneratePayload {
  project_id: number;
  stage_conversions: IStageConversionPayload[];
}

export interface ISegmentForecast {
  segment_id: number;
  segment_name: string;
  count: number;
}

export interface IMonthData {
  total: number;
  segments: ISegmentForecast[];
}

export interface IConversionMonthData extends IMonthData {
  is_projected: boolean;
}

export interface IConversionForecast {
  conversion_id: number;
  stage_from_id: number;
  stage_from_name: string;
  stage_to_id: number;
  stage_to_name: string;
  actual_data: Record<string, IMonthData>;
  calculated_data: Record<string, IMonthData>;
}

export interface IStageForecast {
  stage_id: number;
  stage_name: string;
  crm_object: string | null;
  actual_data: Record<string, IMonthData>;
  calculated_data: Record<string, IMonthData>;
}

export interface IForecast {
  generated_at: string;
  horizon_months: number;
  project_id: number;
  stages: IStageForecast[];
  conversions: Record<string, IConversionForecast>;
}

export interface IConversionRatePayload {
  project_id: number;
  stage_from_id: number;
  stage_to_id: number;
  stage_cycle_months: number;
  lookback_months: number;
}

export interface IConversionRateResponse extends IConversionRatePayload {
  conversion_rate: number;
}
