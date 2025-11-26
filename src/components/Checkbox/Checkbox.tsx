import { forwardRef, useState, useRef } from 'react';
import * as styles from './Checkbox.css.ts';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange'> {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    label, 
    checked: controlledChecked,
    defaultChecked = false,
    onChange,
    icon,
    checkedIcon,
    className,
    style,
    disabled,
    ...props 
  }, ref) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : internalChecked;
    const inputRef = useRef<HTMLInputElement>(null);
    const combinedRef = ref || inputRef;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      onChange?.(newChecked);
    };

    const displayIcon = checked ? (checkedIcon || icon) : icon;

    const checkboxElement = (
      <label className={`${className || ''} ${styles.checkboxWrapper}`} style={style}>
        <input
          ref={combinedRef}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className={styles.checkboxInput}
          {...props}
        />
        <span className={`${styles.checkboxBox} ${styles.checkboxBoxDefault} ${checked ? `${styles.checkboxBoxChecked} ${styles.checkboxBoxCheckedDefault}` : ''}`}>
          {displayIcon && (
            <span className={`${styles.checkboxIcon} ${styles.checkboxIconDefault}`}>
              {displayIcon}
            </span>
          )}
        </span>
        {label && (
          <span className={`${styles.checkboxLabel} ${styles.checkboxLabelDefault}`}>
            {label}
          </span>
        )}
      </label>
    );

    return checkboxElement;
  }
);
