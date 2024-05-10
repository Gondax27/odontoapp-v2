import { API_URL_AUTH, fetchAPI } from './config';

export class AuthService {
  /**
   * Request that gets user and token authentication from login
   * @param email
   * @param password
   * @returns
   */
  static async login(email: string, password: string) {
    try {
      const loginOptions = {
        body: JSON.stringify({ email, password }),
        method: 'POST'
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_AUTH}/login`, loginOptions);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }

  /**
   * Request that validates if current token is valid
   * @param token
   * @returns
   */
  static async verifyToken(token: string) {
    try {
      const verifyOptions = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'GET'
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_AUTH}/verify`, verifyOptions);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }
}
