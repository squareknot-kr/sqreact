import { useState, useRef, useEffect } from 'react';

type PopoverCardProps = {
  label: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  isLoading?: boolean;
  required?: boolean;
};

export const PopoverCard = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  isLoading = false,
  required = false,
}: PopoverCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const displayValue = value || (required ? '' : '전체');

  return (
    <div className="relative" ref={popoverRef}>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <button
          type="button"
          onClick={() => !disabled && !isLoading && setIsOpen(!isOpen)}
          disabled={disabled || isLoading}
          className={`
            w-full min-w-[220px] px-3 py-2 h-[38px]
            text-left text-sm font-medium
            bg-white border border-gray-300 rounded-md
            hover:border-indigo-500 focus:outline-none focus:ring-0 focus:ring-offset-0
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-between
          `}
        >
          <span className="text-gray-700">{displayValue}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          {isLoading ? (
            <div className="px-3 py-2 text-sm text-gray-500 text-center">로딩 중...</div>
          ) : options.length === 0 ? (
            <div className="px-3 py-2 text-sm text-gray-500 text-center">옵션이 없습니다</div>
          ) : (
            <ul className="py-1">
              {!required && (
                <li>
                  <button
                    type="button"
                    onClick={() => handleSelect('')}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 text-gray-700"
                  >
                    전체
                  </button>
                </li>
              )}
              {options.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => handleSelect(option)}
                    className={`
                      w-full px-3 py-2 text-left text-sm hover:bg-gray-100
                      ${value === option ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-gray-700'}
                    `}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

