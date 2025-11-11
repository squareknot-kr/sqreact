import { Button } from "@/shared/atoms";
import { ButtonProps } from "@/shared/components/Button/Button";
import { ChevronDownIcon, X } from "lucide-react";
import { useContext } from "react";
import { DropdownContext } from "../Dropdown/DropdownContext";
import * as styles from './SelectButton.css';

interface SelectButtonProps extends Omit<ButtonProps, "children"> {
  children: React.ReactNode;
}

export function SelectButton({ children, ...props }: SelectButtonProps) {
  const { isOpen, defaultValue, onChangeValue } = useContext(DropdownContext);

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
      {children}
    </Button>
  );
}