export const endpoints = {
  auth: {
    base: 'api/auth',
    get login(): string {
      return `${this.base}/login`;
    },
    get register(): string {
      return `${this.base}/register`;
    },
    get verifyEmail(): string {
      return `${this.base}/verify-email`;
    },
    get tenantUserUpdate(): string {
      return `${this.base}/tenant/user/update`;
    },
  },
  tenant_profile: {
    base: 'api/tenant_profile',
    get updateTenantProfile(): string {
      return `${this.base}/update`;
    },
    get updateInvitedTenantProfile(): string {
      return `${this.base}/update-invited`;
    },
  },
  tenant: {
    base: 'api/tenant',
    get updateTenantUser(): string {
      return `${this.base}/user/update`;
    },
    get crmIntegrations(): string {
      return `${this.base}/crm-integrations`;
    },
    get crmIntegrationStatus(): string {
      return `${this.crmIntegrations}/status`;
    },
    get inviteTeamMembers(): string {
      return `${this.base}/team/invite`;
    },
    get inviteDetails(): string {
      return `${this.base}/public/team/invite/details`;
    },
    get acceptInvite(): string {
      return `${this.base}/public/team/invite/accept`;
    },
    get projects(): string {
      return `${this.base}/projects`;
    },
    get projectStages(): string {
      return `${this.base}/project-stages`;
    },
    get projectBreakdowns(): string {
      return `${this.base}/project-breakdowns`;
    },
    projectBreakdownDetail(id: string): string {
      return `${this.projectBreakdowns}/${id}`;
    },
    projectStagesFilters(id: string): string {
      return `${this.projectStages}/${id}/filters`;
    },
    projectStagesFilteredData(id: string): string {
      return `${this.projectStages}/${id}/filtered-data`;
    },
    get stageFilterOperators(): string {
      return `${this.projectStages}/filter-operators`;
    },
    get leadCustomFields(): string {
      return `${this.base}/lead-custom-fields`;
    },
    get crmObjectFields(): string {
      return `${this.base}/crm-object-fields`;
    },
    get currencies(): string {
      return `${this.base}/currencies`;
    },
  },
  assumptions: {
    base: 'api/tenant/assumptions',
    get generate(): string {
      return `${this.base}/generate`;
    },
    get forecast(): string {
      return `${this.base}/forecast`;
    },
    get recalculate(): string {
      return `${this.base}/recalculate`;
    },
    get conversationRate(): string {
      return `${this.base}/conversation-rate`;
    },
  },
  stageConversions: {
    base: 'api/tenant/stage-conversions',
    get generateStageConversions(): string {
      return `${this.base}/generate`;
    },
  },
  crmProviders: {
    base: 'api/crm-providers',
    get getCrmProviders(): string {
      return this.base;
    },
  },
  user: {
    base: 'api/tenant/user/me',
  },
};
