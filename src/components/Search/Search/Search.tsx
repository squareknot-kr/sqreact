import { SearchIcon } from '@/components/Search/Search/SearchIcon';
import { DatePicker as DatePickerComponent } from '../DatePicker/DatePicker';
import { Tag } from '../Tag';
import * as styles from './Search.css';
import { useSearch } from '../useSearch';
import { DateRange, SearchParams, SearchValues } from './type';
import { DropdownForSearch } from '@/components/Dropdown/DropdownForSearch';

interface SearchProps {
  children: React.ReactNode;
  onSearch: (values: SearchParams) => void;
  disabled?: (values: SearchValues) => boolean;
}

interface SelectProps {
  label: string;
  options?: string[];
  valueKey: string;
  isLoading?: boolean;
  disabled?: boolean | ((values: SearchValues) => boolean);
  defaultValue?: string;
}

const RESET_SELECT_OPTION_VALUE = '';

export function Search({ 
  children, 
  onSearch, 
  disabled: setDisabled 
}: SearchProps) {
  const { values, labels, dateRange, updateValues } = useSearch();

  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.childrenContainer}>
          {children}
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            onClick={() => onSearch({ ...values, ...dateRange })}
            disabled={setDisabled ? setDisabled(values) : undefined}
            className={styles.searchButton}
          >
            <SearchIcon />
            <span className={styles.searchButtonLabel}>검색</span>
          </button>
        </div>
      </div>
      {Object.entries(values).some(([key, value]) => value && labels[key]) && (
        <div className={styles.tagsContainer}>
          {Object.entries(values).map(([key, value]) => (
            value && labels[key] && (
              <Tag
                key={key}
                label={labels[key]}
                value={value}
                onRemove={() => updateValues(key, RESET_SELECT_OPTION_VALUE)}
              />
            )))}
        </div>
      )}
    </>
  );
}

function Select({ 
  label, 
  options = [], 
  valueKey, 
  isLoading, 
  disabled = false, 
  defaultValue = '전체',
}: SelectProps) {
  const { values, updateValues } = useSearch();
  const isDisabled = typeof disabled === 'function' ? disabled(values) : disabled;

  return (
    <DropdownForSearch
      label={label}
      options={[...options]}
      value={values[valueKey]}
      onChange={(value) => updateValues(valueKey, value, label)}
      disabled={isDisabled}
      isLoading={isLoading}
      defaultValue={defaultValue}
    />
  );
}

function DatePicker({ startDate, endDate }: Partial<DateRange>) {
  return <DatePickerComponent startDate={startDate} endDate={endDate} />;
}

Search.Select = Select;
Search.DatePicker = DatePicker;