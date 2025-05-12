import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'default' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function Container({
  children,
  className,
  size = 'default',
  ...props
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    default: 'max-w-screen-xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        'mx-auto w-full px-4 md:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}