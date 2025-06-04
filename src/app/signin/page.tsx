'use client';
import { Input } from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { AiOutlineMail } from 'react-icons/ai';
import { BsKey } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { SignInSchema } from '@/types/auth';
import { signInSchema } from '@/schemas/auth';
import { useState } from 'react';
import { SpinLoader } from '@/components/SpinLoader';
import { Button } from '@/components/Button';
import { FiAlertCircle } from 'react-icons/fi';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSignInSubmit(data: SignInSchema) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(result);
        console.log('response:', response);
        setError(result.error || 'Erro desconhecido');
        return;
      }

      console.log('Usuário autenticado:', result);
      // Aqui você pode redirecionar ou salvar token etc.
    } catch (err) {
      console.log(err);
      setError('Erro ao tentar fazer login');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center pt-8">
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
          <Button className="h-10" type="submit">
            {loading ? <SpinLoader /> : 'Entrar'}
          </Button>

          {error && (
            <p className="text-error flex items-center gap-2 text-sm">
              <FiAlertCircle className="text-error" />
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
