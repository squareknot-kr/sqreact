import { useContext } from 'react';
import { Button } from '@/shared/ui/Button';
import { SearchIcon } from '@/components/Search/SearchIcon';
import { SearchContext } from './SearchContext';
import { SearchProvider } from './SearchProvider';
import { DatePicker as DatePickerComponent } from './DatePicker';
import { Popover } from '@/shared/components/Popover';

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
  const { values, dateRange } = useContext(SearchContext);

  return (
    <div className="bg-white rounded-lg p-3.5 px-6 w-full flex items-end gap-5 shadow-xs border border-gray-100 flex-wrap min-w-0">
      <div className="flex items-end gap-5 flex-wrap flex-1">
        {children}
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-sm font-medium text-transparent">검색</div>
        <Button
          size="sm"
          onClick={(e) => {
            onSearch({ ...values, ...dateRange });
            e.currentTarget.blur();
          }}
          disabled={onDisableSearch?.()}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-2 h-[38px] cursor-pointer focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <SearchIcon className="h-4 w-4 mr-1" />
          <span className="text-sm font-medium">검색</span>
        </Button>
      </div>
    </div>
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
      onChange={(value) => updateValues(keyToStore, value)}
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