import { Clinic } from '@/models/clinic/clinic-model';

export type User = {
  user_id: string;
  name: string;
  email: string;
  isActive: boolean;
  email_verified: boolean;
  role: string[];
  avatar: null;
  clinic?: Clinic;
  createdAt: Date;
  updatedAt: Date;
};
