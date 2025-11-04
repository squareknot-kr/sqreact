import { LabelHTMLAttributes, forwardRef } from 'react';
import { label } from './Label.css';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`${label} ${className || ''}`}
        {...props}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = 'Label';

