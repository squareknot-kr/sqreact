import { InputHTMLAttributes, forwardRef } from 'react';
import { input, inputFullWidth, wrapper, wrapperFullWidth } from './Input.css';
import { Label } from '../Label';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  fullWidth?: boolean;
  wrapperStyle?: React.CSSProperties;
  width?: string | number;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type = 'text', label, fullWidth = false, style, wrapperStyle, width, ...props }, ref) => {
    const inputStyle: React.CSSProperties = { ...style };
    if (width) {
      inputStyle.width = typeof width === 'number' ? `${width}px` : width;
    }

    const inputElement = (
      <input
        ref={ref}
        type={type}
        className={`${className || ''} ${fullWidth ? inputFullWidth : input}`}
        style={Object.keys(inputStyle).length > 0 ? inputStyle : style}
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