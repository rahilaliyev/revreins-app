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
  },
};
