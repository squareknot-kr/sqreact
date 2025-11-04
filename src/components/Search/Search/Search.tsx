import { useContext } from 'react';
import { Button } from '@/shared/ui/Button';
import { SearchIcon } from '@/components/Search/SearchIcon';
import { SearchContext } from '../SearchContext';
import { SearchProvider } from '../SearchProvider';
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

function SearchContent({ children, onSearch, onDisableSearch }: SearchProps) {
  const { values, labels, dateRange, updateValues } = useContext(SearchContext);

  const handleRemoveTag = (key: string) => {
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
          <Button
            size="sm"
            onClick={(e) => {
              onSearch({ ...values, ...dateRange });
              e.currentTarget.blur();
            }}
            disabled={onDisableSearch?.()}
            className={styles.searchButton}
          >
            <SearchIcon style={{ height: '16px', width: '16px', marginRight: '4px' }} />
            <span style={{ fontSize: '14px', fontWeight: 500 }}>검색</span>
          </Button>
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
                onRemove={() => handleRemoveTag(key)}
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
  initialDateRange 
}: SearchProps) {
  return (
    <SearchProvider initialValues={initialValues} initialDateRange={initialDateRange}>
      <SearchContent onSearch={onSearch} onDisableSearch={onDisableSearch}>
        {children}
      </SearchContent>
    </SearchProvider>
  );
}

type SelectProps = {
  label: string;
  options: string[];
  keyToStore: string;
  isLoading?: boolean;
  required?: boolean;
  onDisableSelect?: () => boolean;
};

function Select({ label, options, keyToStore, isLoading, required, onDisableSelect }: SelectProps) {
  const { values, updateValues } = useContext(SearchContext);
  
  return (
    <Popover
      label={label}
      options={options}
      value={values[keyToStore]}
      onChange={(value) => updateValues(keyToStore, value, label)}
      disabled={onDisableSelect?.()}
      isLoading={isLoading}
      required={required}
    />
  );
}

function DatePicker() {
  return <DatePickerComponent />;
}

Search.Select = Select;
Search.DatePicker = DatePicker;

