import { forwardRef } from 'react';
import * as styles from './Button.css.ts';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  showIcon?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, showIcon = false, icon, fullWidth = false, className, ...props }, ref) => {
    const defaultIcon = (
      <svg
        className={styles.icon}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    );

    return (
      <button
        ref={ref}
        type="button"
        className={`${styles.button} ${fullWidth ? styles.buttonFullWidth : ''} ${className || ''}`}
        {...props}
      >
        <span className={styles.buttonText}>
          {children}
        </span>
        {(showIcon || icon) && (icon || defaultIcon)}
      </button>
    );
  }
);