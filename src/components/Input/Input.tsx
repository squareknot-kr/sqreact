import { InputHTMLAttributes, forwardRef } from 'react';
import { input, inputFullWidth, wrapper, wrapperFullWidth } from './Input.css';
import { Label } from '../Label';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  fullWidth?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type = 'text', label, fullWidth = false, ...props }, ref) => {
    const inputElement = (
      <input
        ref={ref}
        type={type}
        className={`${fullWidth ? inputFullWidth : input} ${className || ''}`}
        {...props}
      />
    );

    if (label) {
      return (
        <div className={`${fullWidth ? wrapperFullWidth : wrapper}`}>
          <Label>{label}</Label>
          {inputElement}
        </div>
      );
    }

    return inputElement;
  }
);