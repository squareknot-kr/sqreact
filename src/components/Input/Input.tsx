import { InputHTMLAttributes, forwardRef } from 'react';
import { input, wrapper } from './Input.css';
import { Label } from '../Label';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type = 'text', label, ...props }, ref) => {
    const inputElement = (
      <input
        ref={ref}
        type={type}
        className={`${input} ${className || ''}`}
        {...props}
      />
    );

    if (label) {
      return (
        <div className={wrapper}>
          <Label>{label}</Label>
          {inputElement}
        </div>
      );
    }

    return inputElement;
  }
);