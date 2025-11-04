import { ButtonHTMLAttributes, forwardRef } from 'react';
import { button, sizeVariants, variantVariants } from './Button.css';

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
    return (
      <button
        ref={ref}
        className={`${button} ${sizeVariants[size]} ${variantVariants[variant]} ${className || ''}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);