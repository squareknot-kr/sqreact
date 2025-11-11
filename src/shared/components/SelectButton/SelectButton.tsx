import { Button } from "@/shared/atoms";
import { ButtonProps } from "@/shared/components/Button/Button";
import { ChevronDownIcon, X } from "lucide-react";
import { useContext } from "react";
import { DropdownContext } from "../Dropdown/DropdownContext";
import * as styles from './SelectButton.css';

interface SelectButtonProps extends Omit<ButtonProps, "children"> {
  children: string;
}

export function SelectButton({ children, ...props }: SelectButtonProps) {
  const { isOpen, defaultValue, onChangeValue } = useContext(DropdownContext);
  const value = children || defaultValue;

  const closeIcon = (
    <span className={styles.closeIconWrapper}>
      <X className={styles.closeIcon} onClick={() => onChangeValue(defaultValue)} />
    </span>
  );

  const chevronIcon = (
    <ChevronDownIcon className={styles.chevronIcon} />
  );

  return (
    <Button {...props} icon={isOpen ? closeIcon : chevronIcon}>
      {value}
    </Button>
  );
}