import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import * as styles from './DateRangePicker.css.ts';
import { useState, useEffect, useRef } from "react";
import { getToday, formatDateToString, getDateRange } from "@/utils/date";
import { Calendar } from "lucide-react";

type DateRangePickerProps = {
  label?: string;
  startDate?: string;
  endDate?: string;
  onChange?: (startDate: string, endDate: string) => void;
};

export function DateRangePicker({ 
  label,
  startDate: initialStartDate,
  endDate: initialEndDate,
  onChange,
}: DateRangePickerProps) {
  const today = formatDateToString(getToday());
  const [startDate, setStartDate] = useState(initialStartDate || getDateRange(150, getToday()).startDate);
  const [endDate, setEndDate] = useState(initialEndDate || today);
  const startDateInputRef = useRef<HTMLInputElement>(null);
  const endDateInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialStartDate !== undefined) {
      setStartDate(initialStartDate);
    }
    if (initialEndDate !== undefined) {
      setEndDate(initialEndDate);
    }
  }, [initialStartDate, initialEndDate]);

  const onChangeStartDate = (value: string) => {
    const selectedDate = value || today;
    const finalDate = selectedDate > today ? today : selectedDate;
    const newStartDate = finalDate > endDate ? endDate : finalDate;
    setStartDate(newStartDate);
    onChange?.(newStartDate, endDate);
  };

  const onChangeEndDate = (value: string) => {
    const selectedDate = value || today;
    const finalDate = selectedDate > today ? today : selectedDate;
    const newEndDate = finalDate < startDate ? startDate : finalDate;
    setEndDate(newEndDate);
    onChange?.(startDate, newEndDate);
  };

  const handleStartDateIconClick = () => {
    if (startDateInputRef.current && 'showPicker' in startDateInputRef.current) {
      startDateInputRef.current.showPicker();
    }
  };

  const handleEndDateIconClick = () => {
    if (endDateInputRef.current && 'showPicker' in endDateInputRef.current) {
      endDateInputRef.current.showPicker();
    }
  };
  
  return (
    <div className={styles.datePickerContainer}>
      {label && <Label>{label}</Label>}
      <div className={styles.dateInputsContainer}>
        <div className={styles.dateInputWrapper}>
          <Input
            ref={startDateInputRef}
            type="date"
            value={startDate}
            onChange={(e) => onChangeStartDate(e.target.value)}
            max={today}
            className={styles.dateInput}
          />
          <Calendar 
            className={styles.calendarIcon} 
            size={16} 
            onClick={handleStartDateIconClick}
          />
        </div>
        <span className={styles.separator}>~</span>
        <div className={styles.dateInputWrapper}>
          <Input
            ref={endDateInputRef}
            type="date"
            value={endDate}
            onChange={(e) => onChangeEndDate(e.target.value)}
            max={today}
            className={styles.dateInput}
          />
          <Calendar 
            className={styles.calendarIcon} 
            size={16} 
            onClick={handleEndDateIconClick}
          />
        </div>
      </div>
    </div>
  );
}

