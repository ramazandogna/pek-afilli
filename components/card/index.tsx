export default function Card({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mt-2 rounded border p-4 shadow-lg backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
}
