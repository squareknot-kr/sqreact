import { InputHTMLAttributes, forwardRef } from 'react';
import { input, inputFullWidth, wrapper, wrapperFullWidth } from './Input.css';
import { Label } from '../Label';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  fullWidth?: boolean;
  wrapperStyle?: React.CSSProperties;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type = 'text', label, fullWidth = false, style, wrapperStyle, ...props }, ref) => {
    const inputElement = (
      <input
        ref={ref}
        type={type}
        className={`${className || ''} ${fullWidth ? inputFullWidth : input}`}
        style={style}
        {...props}
      />
    );

    if (label) {
      return (
        <div className={`${fullWidth ? wrapperFullWidth : wrapper}`} style={wrapperStyle}>
          <Label>{label}</Label>
          {inputElement}
        </div>
      );
    }

    return inputElement;
  }
);