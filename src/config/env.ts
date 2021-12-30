export const environment = process.env.NODE_ENV;
export const isDev = environment === 'development';
export const isProd = environment === 'production';
export const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN || '';
export const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
export const AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE;
export const BACK_API = process.env.REACT_APP_API;