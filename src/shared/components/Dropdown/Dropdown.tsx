import { useRef, useEffect, useReducer } from 'react';
import * as styles from './Dropdown.css';

type DropdownProps = {
  label: string;
  options: string[];
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  isLoading?: boolean;
  style?: React.CSSProperties;
  onChange?: (value: string) => void;
};

type DropdownState = {
  isOpen: boolean;
  value: string | undefined;
  searchInputValue: string;
}

type DropdownAction = {
  type: 'toggle' | 'search' | 'select' | 'clear';
  payload?: string;
}

const dropdownReducer = (state: DropdownState, action: DropdownAction) => {
  switch (action.type) {
    case 'toggle':
      return { 
        ...state, 
        isOpen: !state.isOpen,
      };
    case 'search':
      return { 
        ...state, 
        searchInputValue: action.payload || ''
      };
    case 'select':
      return { 
        ...state, 
        isOpen: false, 
        value: action.payload,
        searchInputValue: ''
      };
    case 'clear':
      return {
        ...state,
        value: undefined,
        searchInputValue: '',
        isOpen: false,
      };
    default:
      return state;
  }
}

export const Dropdown = ({
  defaultValue = '전체',
  label,
  options,
  value,
  disabled = false,
  isLoading = false,
  style,
  onChange,
}: DropdownProps) => {
  const [state, dispatch] = useReducer(dropdownReducer, { isOpen: false, searchInputValue: '', value: undefined });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(function focusOnMount() {
    if (!state.isOpen) return;

    const onClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        dispatch({ type: 'toggle' });
      }
    };
    
    searchRef.current?.focus();
    document.addEventListener('mousedown', onClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [state.isOpen]);

  const filteredOptionsOnSearch = options.filter(option =>
    option?.toLowerCase().includes(state.searchInputValue?.toLowerCase() || '')
  );

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef} style={style}>
      <div className={styles.labelContainer}>
        <label className={styles.label}>{label}</label>
        <button
          type="button"
          onClick={() => dispatch({ type: 'toggle' })}
          disabled={disabled}
          className={styles.button}
        >
          <span className={styles.buttonText}>
            {value || state.value || defaultValue}
          </span>
          {state.isOpen ? (
            <div
              className={styles.clearIconContainer}
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: 'clear' });
                onChange?.('');
              }}
            >
              <svg
                className={styles.icon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          ) : (
            <svg
              className={styles.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      </div>

      {state.isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.searchContainer}>
            <input
              ref={searchRef}
              type="text"
              value={state.searchInputValue}
              onChange={(e) => {
                dispatch({ type: 'search', payload: e.target.value });
              }}
              placeholder="검색..."
              className={styles.searchInput}
            />
          </div>

          <div className={styles.optionsContainer}>
            {isLoading ? (
              <div className={styles.emptyState}>로딩 중...</div>
            ) : filteredOptionsOnSearch.length === 0 ? (
              <div className={styles.emptyState}>검색 결과가 없습니다</div>
            ) : (
              <ul className={styles.optionsList}>
                {filteredOptionsOnSearch.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => {
                        dispatch({ type: 'select', payload: option });
                        onChange?.(option);
                      }}
                      className={`${styles.optionItem} ${(value || state.value) === option ? styles.optionItemSelected : ''}`}
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