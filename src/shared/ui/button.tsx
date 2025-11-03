import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    size = 'md', 
    variant = 'default', 
    className = '', 
    disabled, 
    children, 
    ...props 
   }, ref) => {
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm h-[32px]',
      md: 'px-4 py-2 text-base h-[40px]',
      lg: 'px-6 py-3 text-lg h-[48px]',
    };

    const variantClasses = {
      default: 'bg-indigo-500 hover:bg-indigo-600 text-white',
      outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700',
      ghost: 'hover:bg-gray-100 text-gray-700',
    };

    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed';

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

