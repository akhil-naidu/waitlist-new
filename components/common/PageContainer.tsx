interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`pt-32 pb-12 md:pt-44 md:pb-20 ${className}`}>
      <div className="px-4 sm:px-6">{children}</div>
    </div>
  );
}