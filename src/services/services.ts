import { API_URL_SERVICES, fetchAPI } from './config';
import type{ Service } from '@/types/service';

export class ProductService {
  static async getServices(): Promise<Service[] | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'GET'
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/services`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }

  static async createService(newService: {
    name: string;
    description: string;
    appointments: number | string;
  }): Promise<Service | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const formatService = {
        ...newService,
        appointments: Number(newService.appointments)
      };

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'POST',
        body: JSON.stringify(formatService)
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/services`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }

  static async updateService(
    serviceId: string,
    newService: {
      name: string;
      description: string;
      appointments: number | string;
    }
  ): Promise<Service | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const formatService = {
        ...newService,
        appointments: Number(newService.appointments)
      };

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'PUT',
        body: JSON.stringify(formatService)
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/services/${serviceId}`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }

  static async deleteService(serviceId: string) {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'DELETE'
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/services/${serviceId}`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }
}
