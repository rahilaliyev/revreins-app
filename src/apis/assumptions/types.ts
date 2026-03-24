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
