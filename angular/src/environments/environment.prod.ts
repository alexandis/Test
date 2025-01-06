import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4400';

const oAuthConfig = {
  issuer: 'https://localhost:44322/',
  redirectUri: baseUrl,
  clientId: 'Test_App',
  responseType: 'code',
  scope: 'offline_access Test',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Test',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44353',
      rootNamespace: 'Test',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
  remoteEnv: {
    url: '/getEnvConfig',
    mergeStrategy: 'deepmerge'
  }
} as Environment;
