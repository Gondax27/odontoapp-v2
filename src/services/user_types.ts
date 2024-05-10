import { API_URL_SERVICES, fetchAPI } from './config';
import type { UserType } from '@/types/user';

export class UserTypeService {
  static async getUserTypes(): Promise<UserType[] | null> {
    try {
      const token = localStorage.getItem('token') || ''

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'GET'
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/user-types`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }
}
