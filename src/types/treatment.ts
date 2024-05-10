interface Patient {
  _id: string;
  name: string;
  last_name: string;
}

interface Service {
  _id: string;
  name: string;
}

// type TreatmentStatus = 'In Progress' | 'Finished' | 'Cancelled';

export interface Treatment {
  _id: string;
  patient: Patient;
  service: Service;
  status: string;
}

export interface TreatmentRequest {
  patient: string;
  service: string;
  status: string;
}