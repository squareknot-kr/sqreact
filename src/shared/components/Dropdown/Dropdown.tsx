import { useRef, useEffect, cloneElement, ReactNode, ButtonHTMLAttributes, ReactElement, useContext, useState } from 'react';
import { DropdownContext } from './DropdownContext';
import * as styles from './Dropdown.css';

interface DropdownProps {
  label: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  children: ReactNode;
}

export const Dropdown = ({
  label,
  defaultValue = '선택',
  onChange,
  children,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  
  const onSelectItem = (item: string) => {
    setIsOpen(false);
    setSearchValue('');
    onChange(item);
  }

  return (
    <DropdownContext.Provider value={{ defaultValue, isOpen, setIsOpen, onSelectItem, searchValue, setSearchValue, onChangeValue: onChange }}>
      <div className={styles.dropdownContainer}>
        <div className={styles.labelSection}>
          <label className={styles.label}>{label}</label>
        </div>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

function Menu({ children }: { children: React.ReactNode }) {
  const { isOpen } = useContext(DropdownContext);
  if (!isOpen) return null;

  return (
    <div className={styles.dropdown}>
      {children}
    </div>
  )
}

function Item({ children }: { children: string }) {
  const { onSelectItem } = useContext(DropdownContext);
  return (
    <div className={styles.optionItem} onClick={() => onSelectItem(children)}>
      {children}
    </div>
  )
}

function Search() {
  const searchRef = useRef<HTMLInputElement>(null);
  const { searchValue, setSearchValue, isOpen } = useContext(DropdownContext);

  useEffect(function focusOnMount() {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className={styles.searchContainer}>
      <input
        ref={searchRef}
        type="text"
        placeholder="검색..."
        className={styles.searchInput}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
}

interface TriggerProps {
  as?: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
}

function Trigger({ as }: TriggerProps) {
  const { setIsOpen } = useContext(DropdownContext);
  return as ? cloneElement(as, {
    ...as?.props ?? {},
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      as?.props?.onClick?.(e);
      setIsOpen(prev => !prev);
    }
  }) : null;
}

function FilteredItems({ options }: { options: string[] }) {
  const { searchValue } = useContext(DropdownContext);

  const filteredOptions = !searchValue.trim()
    ? options
    : options.filter(option =>
        option.toLowerCase().includes(searchValue.toLowerCase())
      );

  if (filteredOptions.length === 0) {
    return (
      <div
        style={{
          padding: "16px",
          textAlign: "center",
          color: "rgb(156 163 175)",
        }}
      >
        검색 결과가 없습니다
      </div>
    );
  }

  return filteredOptions.map(option => (
    <Dropdown.Item key={option}>{option}</Dropdown.Item>
  ));
}

Dropdown.Trigger = Trigger;
Dropdown.Search = Search;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
Dropdown.FilteredItems = FilteredItems;