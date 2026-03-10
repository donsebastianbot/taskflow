const AUTH_COOKIE = 'taskflow_auth';

export function getAuthCookieValue() {
  return process.env.SESSION_SECRET || 'change-me';
}

export const authCookieName = AUTH_COOKIE;
