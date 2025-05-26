import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z
      .string({ required_error: 'O nome é obrigatório.' })
      .min(6, 'Nome precisa estar completo.')
      .refine(val => val.trim().includes(' '), {
        message: 'Digite seu nome completo (nome e sobrenome).',
      }),
    email: z
      .string({ required_error: 'O email é obrigatório.' })
      .email('Formato de email inválido.')
      .nonempty('O email é obrigatório.'),
    password: z
      .string({ required_error: 'A senha é obrigatória.' })
      .min(8, 'A senha deve ter no mínimo 8 caracteres.')
      .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula.')
      .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula.')
      .regex(/[0-9]/, 'A senha deve conter pelo menos um número.')
      .regex(
        /[^A-Za-z0-9]/,
        'A senha deve conter pelo menos um caractere especial.'
      ),
    confirm_password: z.string({
      required_error: 'A confirmação de senha é obrigatória.',
    }),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: 'As senhas precisam ser iguais.',
    path: ['confirm_password'],
  });

export const signInSchema = z.object({
  email: z
    .string({ required_error: 'O email é obrigatório' })
    .email('Formato de email inválido')
    .nonempty('O email é obrigatório'),
  password: z
    .string({ required_error: 'A senha é obrigatória' })
    .nonempty('A senha é obrigatória'),
});
