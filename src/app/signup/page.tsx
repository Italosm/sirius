'use client';
import { Input } from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { AiOutlineMail } from 'react-icons/ai';
import { BsKey, BsPerson } from 'react-icons/bs';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

const signInSchema = z
  .object({
    name: z
      .string({ required_error: 'O nome é obrigatório.' })
      .min(6, 'Nome precisa estar completo.'),
    email: z
      .string({ required_error: 'O email é obrigatório.' })
      .email('Formato de email inválido.')
      .nonempty('O email é obrigatório.'),
    password: z
      .string({ required_error: 'A senha é obrigatória.' })
      .nonempty('A senha é obrigatória.'),
    confirm_password: z.string({
      required_error: 'A confirmação de senha é obrigatória.',
    }),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: 'As senhas precisam ser iguais.',
    path: ['confirm_password'],
  });
type SignInSchema = z.infer<typeof signInSchema>;
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  function handleSignInSubmit(data: SignInSchema) {
    console.log(data);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-overlay w-full max-w-md rounded-lg p-8 shadow-2xl backdrop-blur">
        <h2 className="mb-6 text-center text-2xl font-bold">Cadastre-se!</h2>
        <form
          onSubmit={handleSubmit(handleSignInSubmit)}
          className="flex flex-col gap-4"
        >
          <Input
            placeholder="Nome"
            type="text"
            error={errors.name && errors.name.message}
            icon={<BsPerson />}
            {...register('name', { required: true })}
          />
          <Input
            placeholder="Email"
            type="text"
            error={errors.email && errors.email.message}
            icon={<AiOutlineMail />}
            {...register('email', { required: true })}
          />
          <Input
            placeholder="Senha"
            type="password"
            error={errors.password && errors.password.message}
            icon={<BsKey />}
            {...register('password', { required: true })}
          />
          <Input
            placeholder="Confirme a sua senha"
            type="password"
            error={errors.confirm_password && errors.confirm_password.message}
            icon={<BsKey />}
            {...register('confirm_password', { required: true })}
          />
          <button
            type="submit"
            className="bg-button-primary text-primary-contrast hover:bg-button-primary-hover mt-2 rounded py-2 font-semibold transition-all"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
