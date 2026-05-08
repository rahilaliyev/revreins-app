export interface IConversionSegment {
  segment_id: number;
  stage_cycle_months: number;
  average_month: number | null;
  manual_rate: number | null;
}

interface IStageConversionPayload {
  stage_from_id: number;
  stage_to_id: number;
  assumption_category_id: number | null;
  conversion_segments?: IConversionSegment[];
}

interface IGrowthRateSegment {
  segment_id: number;
  growth_rate: number | null;
}

export interface IAssumptionGeneratePayload {
  project_id: number;
  stage_conversions: IStageConversionPayload[];
  growth_rate_value?: number | null;
  growth_rate_segments?: IGrowthRateSegment[];
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

interface IConversionRateForSegment {
  segment_id: number;
  stage_cycle_months: number;
  lookback_month: number;
}

export interface IConversionRatePayload {
  project_id: number;
  conversion_id: number;
  lookback_months?: number;
  stage_cycle_months?: number;
  conversion_segments?: IConversionRateForSegment[];
}

export interface IRate {
  rate: number;
}

export interface IRateWithSegment extends IRate {
  segment_id: number;
}

export interface IConversionRateResponse {
  conversion_rate: IRate | IRateWithSegment[];
}
