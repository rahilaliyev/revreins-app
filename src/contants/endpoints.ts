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
  },
  tenant: {
    base: 'api/tenant',
    get updateTenantUser(): string {
      return `${this.base}/user/update`;
    },
    get crmIntegrations(): string {
      return `${this.base}/crm-integrations`;
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
  },
  crmProviders: {
    base: 'api/crm-providers',
    get getCrmProviders(): string {
      return this.base;
    },
  },
};
