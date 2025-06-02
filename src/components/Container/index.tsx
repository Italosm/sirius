type ContainerProps = {
  children: React.ReactNode;
};
export function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto max-w-lg px-8 py-8 text-justify">{children}</div>
  );
}
