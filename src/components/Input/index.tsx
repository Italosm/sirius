import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useState,
} from 'react';
import { FiEye, FiEyeOff, FiAlertCircle } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: 'password' | 'text';
  error?: string;
  icon?: ReactNode;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { placeholder, type, error, icon, ...rest },
  ref
) => {
  const [isVisible, setIsVisible] = useState(false);
  const isPassword = type === 'password';
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="relative">
        <i
          aria-hidden="true"
          className="absolute flex h-full items-center pl-3 text-xl text-gray-600"
        >
          {icon}
        </i>
        <input
          type={isPassword ? (isVisible ? 'text' : 'password') : type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
          className="bg-primary-contrast/80 focus:ring-accent border-border text-secondary-contrast w-full rounded border p-3 pl-10 placeholder-gray-600 focus:ring-2 focus:outline-none"
        />
        {isPassword && (
          <button
            type="button"
            className="absolute top-1/2 right-3 -translate-y-1/2 text-xl text-gray-600"
            onClick={() => setIsVisible(prev => !prev)}
          >
            {isVisible ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </label>
      {error && (
        <span className="text-error flex items-center gap-2">
          <FiAlertCircle className="text-error" />
          {error}
        </span>
      )}
    </div>
  );
};

export const Input = forwardRef(InputBase);
