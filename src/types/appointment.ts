type UserRef = {
  _id: string;
  name: string;
  last_name: string;
};

export interface Appointment {
  _id: string;
  date: string;
  time: string;
  status: string;
  patient: UserRef;
  doctor: UserRef;
  treatment_id: string;
}

export interface AppointmentRequest {
  date: string;
  time: string;
  status: string;
  patient: string;
  doctor: string;
  treatment_id: string;
}
