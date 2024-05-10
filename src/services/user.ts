import { API_URL_SERVICES, fetchAPI } from './config';
import type { UserBody, UserRequest } from '@/types/user';

const USER_TYPES_ID = {
  PATIENT: '663104cfecc90c602dbc039f',
  DOCTOR: '66310514ecc90c602dbc03a1'
};

export class UserService {
  static async getPatients(): Promise<UserRequest[] | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'GET'
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/users/type/${USER_TYPES_ID.PATIENT}`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }

  static async getDoctors(): Promise<UserRequest[] | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'GET'
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/users/type/${USER_TYPES_ID.DOCTOR}`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }

  static async getAllUsers(): Promise<UserRequest[] | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'GET'
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/users`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }

  static async createUser(newUser: UserBody): Promise<UserRequest | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'POST',
        body: JSON.stringify(newUser)
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/users`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }

  static async updateUser(userId: string, newUser: UserBody): Promise<UserRequest | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'PUT',
        body: JSON.stringify(newUser)
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/users/${userId}`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }
}
