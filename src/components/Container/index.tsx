type ContainerProps = {
  children: React.ReactNode;
};
export function Container({ children }: ContainerProps) {
  return <div className="container mx-auto px-8 py-8">{children}</div>;
}
