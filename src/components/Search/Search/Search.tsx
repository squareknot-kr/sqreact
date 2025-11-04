import { useContext } from 'react';
import { SearchIcon } from '@/components/Search/Search/SearchIcon';
import { SearchContext } from '../SearchContext';
import { useSearch } from '../useSearch';
import { DatePicker as DatePickerComponent } from '../DatePicker/DatePicker';
import { Popover } from '@/shared/components/Popover';
import { Tag } from '../Tag';
import * as styles from './Search.css';

type DateRange = { startDate: string; endDate: string };
type SearchParams = Record<string, string> & DateRange;

type SearchProps = {
  children: React.ReactNode;
  onSearch: (values: SearchParams) => void;
  onDisableSearch?: () => boolean;
  initialValues?: Record<string, string>;
  initialDateRange?: DateRange;
};

function SearchContent({ children, onSearch, onDisableSearch }: {
  children: React.ReactNode;
  onSearch: (values: SearchParams) => void;
  onDisableSearch?: () => boolean;
}) {
  const { values, labels, dateRange, updateValues } = useContext(SearchContext);

  const onRemoveTag = (key: string) => {
    updateValues(key, '');
  };

  const hasTags = Object.keys(values).length > 0;

  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.childrenContainer}>
          {children}
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonLabel}>검색</div>
          <button
            type="button"
            onClick={(e) => {
              onSearch({ ...values, ...dateRange });
              e.currentTarget.blur();
            }}
            disabled={onDisableSearch?.()}
            className={styles.searchButton}
          >
            <SearchIcon style={{ height: '16px', width: '16px', marginRight: '4px' }} />
            <span style={{ fontSize: '14px', fontWeight: 500 }}>검색</span>
          </button>
        </div>
      </div>
      {hasTags && (
        <div className={styles.tagsContainer}>
          {Object.entries(values).map(([key, value]) => (
            value && labels[key] && (
              <Tag
                key={key}
                label={labels[key]}
                value={value}
                onRemove={() => onRemoveTag(key)}
              />
            )
          ))}
        </div>
      )}
    </>
  );
}

export function Search({ 
  children, 
  onSearch, 
  onDisableSearch,
  initialValues,
  initialDateRange,
}: SearchProps) {
  const contextValue = useSearch({ initialValues, initialDateRange });

  return (
    <SearchContext.Provider value={contextValue}>
      <SearchContent onSearch={onSearch} onDisableSearch={onDisableSearch}>
        {children}
      </SearchContent>
    </SearchContext.Provider>
  );
}

type SelectProps = {
  label: string;
  options?: string[];
  keyToStore: string;
  isLoading?: boolean;
  required?: boolean;
  disabled?: boolean | ((values: Record<string, string>) => boolean);
};

function Select({ 
  label, 
  options = [], 
  keyToStore, 
  isLoading, 
  disabled = false, 
}: SelectProps) {
  const { values, updateValues } = useContext(SearchContext);
  const isDisabled = typeof disabled === 'function' ? disabled(values) : disabled;
  
  return (
    <Popover
      label={label}
      options={options}
      value={values[keyToStore]}
      onChange={(value) => updateValues(keyToStore, value, label)}
      disabled={isDisabled}
      isLoading={isLoading}
    />
  );
}

function DatePicker() {
  return <DatePickerComponent />;
}

Search.Select = Select;
Search.DatePicker = DatePicker;
