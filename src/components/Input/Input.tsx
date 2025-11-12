import { InputHTMLAttributes, forwardRef } from 'react';
import { input } from './Input.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`${input} ${className || ''}`}
        {...props}
      />
    );
  }
);