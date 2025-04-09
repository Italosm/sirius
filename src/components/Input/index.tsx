import { ForwardRefRenderFunction, ReactNode, forwardRef } from 'react';

interface InputProps {
  placeholder: string;
  type: 'password' | 'text';
  error?: string;
  icon?: ReactNode;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { placeholder, type, error, icon, ...rest },
  ref
) => {
  return (
    <>
      <label htmlFor="" className="relative">
        <i
          aria-hidden="true"
          className="absolute flex h-full items-center pl-3 text-xl text-gray-600"
        >
          {icon}
        </i>
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
          className="bg-primary-contrast/80 focus:ring-accent border-border text-secondary-contrast w-full rounded border p-3 pl-10 placeholder-gray-600 focus:ring-2 focus:outline-none"
        />
      </label>
      {error && <span className="text-error">{error}</span>}
    </>
  );
};

export const Input = forwardRef(InputBase);
