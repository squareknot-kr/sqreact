import { ButtonHTMLAttributes, ReactElement } from "react";
import { Dropdown } from "../Dropdown/Dropdown";

interface SelectProps {
  label?: string;
  defaultValue?: string;
  trigger: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
  options: string[];
  onChange: (value: string) => void;
  withSearch?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Select({
  label,
  defaultValue,
  trigger,
  options,
  onChange,
  withSearch = false,
  className,
  style,
}: SelectProps) {
  return (
    <Dropdown label={label} onChange={onChange} defaultValue={defaultValue} className={className} style={style}>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.Menu>
        {withSearch && <Dropdown.Search />}
        <Dropdown.FilteredItems options={options} />
      </Dropdown.Menu>
    </Dropdown>
  );
}