import type { Appointment, AppointmentRequest } from '@/types/appointment';

import { API_URL_SERVICES, fetchAPI } from './config';

export class AppointmentService {
  static async getAppointments(): Promise<Appointment[] | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'GET'
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/appointments`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }

  static async getAppointmentsByUserId(userId: string): Promise<Appointment[] | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'GET'
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/appointments/user/${userId}`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }

  static async createAppointment(newAppointment: AppointmentRequest): Promise<Appointment | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'POST',
        body: JSON.stringify(newAppointment)
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/appointments`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }

  static async updateAppointment(appointmentId: string, newAppointment: AppointmentRequest): Promise<Appointment | null> {
    try {
      const token = localStorage.getItem('token') || '';

      const options = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'POST',
        body: JSON.stringify(newAppointment)
      } as RequestInit;

      const response = await fetchAPI(`${API_URL_SERVICES}/appointments/${appointmentId}`, options);
      return Promise.resolve(response?.data);
    } catch (error) {
      return Promise.reject(null);
    }
  }
}
