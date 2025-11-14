import { Button, ButtonProps } from "../Button/Button";
import { ChevronDownIcon, X } from "lucide-react";
import { useContext } from "react";
import { DropdownContext } from "../Dropdown/DropdownContext";
import * as styles from './SelectButton.css';

interface SelectButtonProps extends Omit<ButtonProps, "children"> {
  value?: string;
  style?: React.CSSProperties;
}

export function SelectButton({ value, style, className, ...props }: SelectButtonProps) {
  const { isOpen, defaultValue, onChangeValue } = useContext(DropdownContext);
  const displayValue = value || defaultValue;

  const closeIcon = (
    <span className={styles.closeIconWrapper}>
      <X className={styles.closeIcon} onClick={() => onChangeValue(defaultValue)} />
    </span>
  );

  const chevronIcon = (
    <ChevronDownIcon className={styles.chevronIcon} />
  );

  return (
    <Button 
      {...props} 
      icon={isOpen ? closeIcon : chevronIcon} 
      className={`${styles.selectButton} ${className || ''}`}
      style={style}
    >
      {displayValue}
    </Button>
  );
}