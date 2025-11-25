import { forwardRef } from 'react';
import * as styles from './Button.css.ts';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, fullWidth = false, className, style, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={`${className || ''} ${styles.button} ${fullWidth ? styles.buttonFullWidth : ''}`}
        style={style}
        {...props}
      >
        <span className={styles.buttonText}>
          {children}
        </span>
        {icon}
      </button>
    );
  }
);