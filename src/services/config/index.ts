const API_URL_BASE = 'http://localhost:3001';
export const API_URL_SERVICES = `${API_URL_BASE}/api/v1`;
export const API_URL_AUTH = `${API_URL_BASE}/auth/v1`;

/**
 * Function that gets response fetch api
 * @param apiUrl
 * @param options
 * @returns
 */
export const fetchAPI = async (apiUrl: string, options: RequestInit) => {
  try {
    const request = await fetch(apiUrl, options);
    const response = await request.json();
    if (!request.ok) return Promise.reject(response);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(null);
  }
}