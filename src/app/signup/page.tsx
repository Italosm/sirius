'use client';
import { Input } from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { AiOutlineMail } from 'react-icons/ai';
import { BsKey, BsPerson, BsCheck2Circle, BsXCircle } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { SignUpSchema } from '@/types/auth';
import { signUpSchema } from '@/schemas/auth';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'onTouched',
  });

  const passwordValue = watch('password');

  const passwordChecks = [
    {
      label: 'Pelo menos 8 caracteres',
      isValid: passwordValue?.length >= 8,
    },
    {
      label: 'Uma letra maiúscula',
      isValid: /[A-Z]/.test(passwordValue || ''),
    },
    {
      label: 'Uma letra minúscula',
      isValid: /[a-z]/.test(passwordValue || ''),
    },
    {
      label: 'Um número',
      isValid: /[0-9]/.test(passwordValue || ''),
    },
    {
      label: 'Um caractere especial',
      isValid: /[^A-Za-z0-9]/.test(passwordValue || ''),
    },
  ];

  function handleSignUpSubmit(data: SignUpSchema) {
    console.log(data);
  }

  return (
    <div className="flex items-center justify-center pt-16">
      <div className="bg-overlay w-full max-w-md rounded-lg p-8 shadow-2xl backdrop-blur">
        <h2 className="mb-6 text-center text-2xl font-bold">Cadastre-se!</h2>
        <form
          onSubmit={handleSubmit(handleSignUpSubmit)}
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
            icon={<BsKey />}
            {...register('password', { required: true })}
          />
          <Input
            placeholder="Confirme a sua senha"
            type="password"
            error={errors.confirm_password && errors.confirm_password.message}
            icon={<BsCheck2Circle />}
            {...register('confirm_password', { required: true })}
          />
          <ul className="mt-2 space-y-1 text-left text-sm">
            {passwordChecks.map(({ label, isValid }, i) => (
              <li
                key={i}
                className={`flex items-center gap-2 ${isValid ? 'text-success-light' : 'text-error'}`}
              >
                {isValid ? (
                  <BsCheck2Circle className="opacity-100" />
                ) : (
                  <BsXCircle className="opacity-70" />
                )}
                {label}
              </li>
            ))}
          </ul>
          <button
            type="submit"
            disabled={!isValid}
            className="bg-button-primary text-primary-contrast hover:bg-button-primary-hover mt-2 rounded py-2 font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-50"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
