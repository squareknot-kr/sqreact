import { LabelHTMLAttributes, forwardRef } from 'react';
import { label } from './Label.css';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = '', children, style, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`${label} ${className || ''}`}
        style={style}
        {...props}
      >
        {children}
      </label>
    );
  }
);