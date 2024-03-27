import config from './config.json';

const SHINE_AUTHENTICATION_PRODUCTION_URL = 'https://api.shine.fr/v2/authentication';
const SHINE_AUTHENTICATION_STAGING_URL = 'https://api.staging.shine.fr/v2/authentication';

const SHINE_CONNECT_PRODUCTION_HOST = 'connect.api.shine.fr';
const SHINE_CONNECT_STAGING_HOST = 'https://public.api.staging.shine.fr';
const SHINE_CONNECT_DEV_HOST = 'http://localhost:10081';
const {
  CLIENT_ID: clientId,
  CLIENT_SECRET: clientSecret,
  SCOPE: defaultScope,
  REDIRECT_URI: redirectUri,
  WEBHOOK_SECRET: webhookSecret,
} = config;

const isStaging = process.env.API_ENV === 'staging';
const isProd = process.env.API_ENV === 'production';
const isLocal = !isProd && !isStaging;

const port = process.env.PORT || 9876;
const dev = process.env.NODE_ENV !== 'production';

const shineAuthHost = dev ? SHINE_AUTHENTICATION_STAGING_URL : SHINE_AUTHENTICATION_PRODUCTION_URL;
const shineApiHost = isLocal
  ? SHINE_CONNECT_DEV_HOST
  : isStaging
    ? SHINE_CONNECT_STAGING_HOST
    : SHINE_CONNECT_PRODUCTION_HOST;
export {
  shineAuthHost,
  shineApiHost,
  redirectUri,
  port,
  clientId,
  clientSecret,
  defaultScope,
  dev,
  isLocal,
  webhookSecret,
};
