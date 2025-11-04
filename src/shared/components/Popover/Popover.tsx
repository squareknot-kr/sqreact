import { useState, useRef, useEffect } from 'react';
import * as styles from './Popover.css';

type PopoverProps = {
  label: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  isLoading?: boolean;
};

export const Popover = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  isLoading = false,
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const popoverRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      setTimeout(() => searchInputRef.current?.focus(), 0);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled && !isLoading) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setSearchTerm('');
      }
    }
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && filteredOptions.length > 0) {
      e.preventDefault();
      handleSelect(filteredOptions[0]);
    }
  };

  const optionValue = (value === undefined || value === null || value === '') ? '전체' : value;

  return (
    <div className={styles.popoverContainer} ref={popoverRef}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label className={styles.label}>{label}</label>
        <button
          type="button"
          onClick={handleToggle}
          disabled={disabled || isLoading}
          className={styles.button}
        >
          <span className={styles.buttonText}>
            {optionValue}
          </span>
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
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="검색..."
              className={styles.searchInput}
            />
          </div>
          <div className={styles.optionsContainer}>
            {isLoading ? (
              <div className={styles.emptyState}>로딩 중...</div>
            ) : filteredOptions.length === 0 ? (
              <div className={styles.emptyState}>검색 결과가 없습니다</div>
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
};

