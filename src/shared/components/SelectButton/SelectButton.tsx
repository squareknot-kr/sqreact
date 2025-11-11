import { Button } from "@/shared/atoms";
import { ButtonProps } from "@/shared/components/Button/Button";
import { ChevronDownIcon, X } from "lucide-react";
import { useContext, useRef, useEffect } from "react";
import { DropdownContext } from "../Dropdown/DropdownContext";
import * as styles from './SelectButton.css';

interface SelectButtonProps extends Omit<ButtonProps, "children"> {
  children: string;
}

export function SelectButton({ children, ...props }: SelectButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { isOpen, defaultValue, onChangeValue, setIsOpen } = useContext(DropdownContext);
  const value = children || defaultValue;
  
  useEffect(function closeOnClickOutside() {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeIcon = (
    <span className={styles.closeIconWrapper}>
      <X className={styles.closeIcon} onClick={() => onChangeValue(defaultValue)} />
    </span>
  );

  const chevronIcon = (
    <ChevronDownIcon className={styles.chevronIcon} />
  );

  return (
    <Button ref={ref} {...props} icon={isOpen ? closeIcon : chevronIcon}>
      {value}
    </Button>
  );
}