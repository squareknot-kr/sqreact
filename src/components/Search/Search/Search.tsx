import { SearchIcon } from '@/components/Search/Search/SearchIcon';
import { DatePicker as DatePickerComponent } from '../DatePicker/DatePicker';
import { Popover } from '@/shared/components/Popover';
import { Tag } from '../Tag';
import * as styles from './Search.css';
import { useSearch } from '../useSearch';

type SearchParams = Record<string, string> & { startDate: string; endDate: string };

type SearchProps = {
  children: React.ReactNode;
  onSearch: (values: SearchParams) => void;
  disabled?: (values: Record<string, string>) => boolean;
};

function SearchContent({ children, onSearch, disabled }: {
  children: React.ReactNode;
  onSearch: (values: SearchParams) => void;
  disabled?: (values: Record<string, string>) => boolean;
}) {
  const { values, labels, dateRange, updateValues } = useSearch();

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
            disabled={disabled ? disabled(values) : false}
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
  disabled,
}: SearchProps) {
  return (
    <SearchContent onSearch={onSearch} disabled={disabled}>
      {children}
    </SearchContent>
  );
}

type SelectProps = {
  label: string;
  options?: string[];
  storeKey: string;
  isLoading?: boolean;
  required?: boolean;
  disabled?: boolean | ((values: Record<string, string>) => boolean);
};

function Select({ 
  label, 
  options = [], 
  storeKey, 
  isLoading, 
  disabled = false, 
}: SelectProps) {
  const { values, updateValues } = useSearch();
  const isDisabled = typeof disabled === 'function' ? disabled(values) : disabled;

  return (
    <Popover
      label={label}
      options={options}
      value={values[storeKey]}
      onChange={(value) => updateValues(storeKey, value, label)}
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