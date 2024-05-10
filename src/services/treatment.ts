import { API_URL_SERVICES, fetchAPI } from './config';
import type { Treatment, TreatmentRequest } from '@/types/treatment';

export class TreatmentService {
  static async getAllTreatments(): Promise<Treatment[] | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'GET'
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/treatments`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }

  static async getTreatmentsByUserId(userId: string): Promise<Treatment[] | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'GET'
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/treatments/user/${userId}`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }

  static async createTreatment(newTreatment: TreatmentRequest): Promise<Treatment | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'POST',
        body: JSON.stringify(newTreatment)
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/treatments`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }

  static async updateTreatment(treatmentId: string, newTreatment: TreatmentRequest): Promise<Treatment | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'PUT',
        body: JSON.stringify(newTreatment)
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/treatments/${treatmentId}`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }
}
