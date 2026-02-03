export enum EAccountSetup {
  FIRST_STEP,
  SECOND_STEP,
  THIRD_STEP,
  FOURTH_STEP,
}

export enum EUserRole {
  MEMBER = 'member',
  // EDITOR = 'editor',
  ADMIN = 'admin',
  OWNER = 'owner',
}

export enum ESetupCard {
  TEMPLATE = 'TEMPLATE',
  SCRATCH = 'SCRATCH',
}

export enum ECRMStatus {
  CONNECTED = 'CONNECTED',
  ERROR = 'ERROR',
  NOT_CONFIGURATED = 'NOT_CONFIGURATED',
}

export enum ELogicalOperator {
  AND = 'AND',
  OR = 'OR',
  AND_OR = 'AND/OR',
}

export enum EStageAddEditMode {
  ADD = 'ADD',
  EDIT = 'EDIT',
}
