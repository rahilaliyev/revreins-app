export enum EAccountSetup {
  FIRST_STEP,
  SECOND_STEP,
  THIRD_STEP,
  FOURTH_STEP,
}

export enum EUserRole {
  MEMBER = 'member',
  USER = 'user',
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

export enum ELeadCustomFieldType {
  TEXT = 'text',
  NUMBER = 'number',
  DATE = 'date',
  DATETIME = 'datetime',
  CHOICES = 'choices',
}

export enum EActivityType {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  PUBLISH = 'PUBLISH',
}

export enum ECRMObjectType {
  LEAD = 'lead',
  OPPORTUNITY = 'opportunity',
}

export enum EDataType {
  STRING = 'string',
  INTEGER = 'integer',
  DECIMAL = 'decimal',
  DATE = 'date',
  DATETIME = 'datetime',
  JSON = 'json',
  TEXT = 'text',
  BOOLEAN = 'boolean',
}
