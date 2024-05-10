export type TypeValue = 'Paciente' | 'Médico' | 'Admin';

export interface UserType {
  _id: string;
  name: TypeValue;
}
