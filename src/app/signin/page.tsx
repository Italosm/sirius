'use client';
import { Input } from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { AiOutlineMail } from 'react-icons/ai';
import { BsKey } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { SignInSchema } from '@/types/auth';
import { signInSchema } from '@/schemas/auth';

export default function SignIn() {
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
    <div className="flex items-center justify-center pt-16">
      <div className="bg-overlay w-full max-w-md rounded-lg p-8 shadow-2xl backdrop-blur">
        <h2 className="mb-6 text-center text-2xl font-bold">Seja bem vindo!</h2>
        <form
          onSubmit={handleSubmit(handleSignInSubmit)}
          className="flex flex-col gap-4"
        >
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
