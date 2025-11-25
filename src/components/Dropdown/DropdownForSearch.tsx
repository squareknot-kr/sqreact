import { useEffect, useMemo, useRef, useState } from 'react';
import * as styles from './Dropdown.css';

interface DropdownForSearchProps {
  label: string;
  options: string[];
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onChange: (value: string) => void;
  className?: string;
}

const EMPTY_MESSAGE = '검색 결과가 없습니다';
const LOADING_MESSAGE = '로딩 중...';

export function DropdownForSearch({
  label,
  options,
  value,
  defaultValue = '전체',
  disabled = false,
  isLoading = false,
  onChange,
  className,
}: DropdownForSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    searchInputRef.current?.focus();

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const displayValue = value && value.trim().length > 0 ? value : defaultValue;

  const filteredOptions = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      return options;
    }

    return options.filter((option) => option.toLowerCase().includes(term));
  }, [options, searchTerm]);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className={`${className || ''} ${styles.dropdownContainer}`} ref={dropdownRef}>
      <div className={styles.labelSection}>
        <label className={styles.label}>{label}</label>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          disabled={disabled}
          className={styles.button}
        >
          <span className={styles.buttonText}>{displayValue}</span>
          <svg
            className={`${styles.icon} ${isOpen ? styles.iconRotated : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.searchContainer}>
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="검색..."
              className={styles.searchInput}
            />
          </div>

          <div className={styles.optionsContainer}>
            {isLoading ? (
              <div className={styles.emptyState}>{LOADING_MESSAGE}</div>
            ) : filteredOptions.length === 0 ? (
              <div className={styles.emptyState}>{EMPTY_MESSAGE}</div>
            ) : (
              <ul className={styles.optionsList}>
                {filteredOptions.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => handleSelect(option)}
                      className={`${styles.optionItem} ${value === option ? styles.optionItemSelected : ''}`}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
