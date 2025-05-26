import { z } from 'zod';
import { signInSchema, signUpSchema } from '@/schemas/auth';

export type SignInSchema = z.infer<typeof signInSchema>;
export type SignUpSchema = z.infer<typeof signUpSchema>;
