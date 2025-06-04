type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<'button'>;

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <>
      <button
        className={`${className} bg-button-primary text-primary-contrast hover:bg-button-primary-hover mt-2 rounded py-2 font-semibold transition-all`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
