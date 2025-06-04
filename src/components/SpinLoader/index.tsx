type SpinLoaderProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export function SpinLoader({ className = '', size = 'md' }: SpinLoaderProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-8 w-8',
    xl: 'h-10 w-10',
  };
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span
        className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-t-transparent`}
      ></span>
    </div>
  );
}
