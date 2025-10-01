export const API = {
  AUTH_BASE_URL: 'http://localhost:9100',
  BASE_URL: 'http://localhost:9100/api',
  AUTH: { LOGIN: '/auth/authenticate' },
  KYC: { CREATE: '/kyc/create',
      SEARCH: '/kyc/search',
      DELETE: '/kyc/delete',
      UPDATE: '/kyc/update',
      PHOTO: (p: string) => `/kyc/photo/${p}`
  }
};