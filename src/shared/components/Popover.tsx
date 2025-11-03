import { useState, useRef, useEffect } from 'react';

type PopoverProps = {
  label: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  isLoading?: boolean;
  required?: boolean;
};

export const Popover = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  isLoading = false,
  required = false,
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

  const displayValue = value || (required ? '' : '전체');

  return (
    <div className="relative" ref={popoverRef}>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700 leading-normal">{label}</label>
        <button
          type="button"
          onClick={handleToggle}
          disabled={disabled || isLoading}
          className="w-full min-w-[220px] h-[38px] px-3 text-left text-sm font-medium bg-white border border-gray-300 rounded-md hover:border-indigo-500 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-between transition-colors"
        >
          <span className={`text-gray-700 ${!value && !required ? 'text-gray-400' : ''}`}>
            {displayValue}
          </span>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-hidden flex flex-col transition-all duration-200 opacity-100">
          <div className="p-2 border-b border-gray-100">
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="검색..."
              className="w-full h-9 px-3 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-colors"
            />
          </div>
          <div className="overflow-y-auto max-h-52">
            {isLoading ? (
              <div className="px-4 py-8 text-sm text-gray-400 text-center">로딩 중...</div>
            ) : filteredOptions.length === 0 ? (
              <div className="px-4 py-8 text-sm text-gray-400 text-center">검색 결과가 없습니다</div>
            ) : (
              <ul className="py-1">
                {filteredOptions.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => handleSelect(option)}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                        value === option
                          ? 'bg-indigo-50 text-indigo-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
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

