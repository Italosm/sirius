type SpinLoaderProps = {
  className?: string;
};

export function SpinLoader({ className = '' }: SpinLoaderProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        style={{ width: '1em', height: '1em' }}
        className="animate-spin rounded-full border-4 border-t-transparent"
      ></div>
    </div>
  );
}
