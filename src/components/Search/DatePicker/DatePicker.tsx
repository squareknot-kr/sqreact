import { Input } from "@/shared/ui/Input";
import { Label } from "@/shared/ui/Label";
import { useSearch } from "../useSearch";
import * as styles from './DatePicker.css';
import { useEffect } from "react";
import { getToday, formatDateToString } from "@/utils/date";

export function DatePicker({ startDate = undefined, endDate = undefined }: { 
  startDate?: string;
  endDate?: string;
}) {
  const { dateRange, updateDateRange } = useSearch();
  const today = formatDateToString(getToday());

  useEffect(() => {
    if (startDate || endDate) {
      updateDateRange(startDate || dateRange.startDate, endDate || dateRange.endDate);
    }
  }, [ startDate, endDate ]);

  const onChangeStartDate = (value: string) => {
    const selectedDate = value || today;
    const finalDate = selectedDate > today ? today : selectedDate;
    updateDateRange(finalDate, dateRange.endDate);
  };

  const onChangeEndDate = (value: string) => {
    const selectedDate = value || today;
    const finalDate = selectedDate > today ? today : selectedDate;
    updateDateRange(dateRange.startDate, finalDate);
  };
  
  return (
    <div className={styles.datePickerContainer}>
      <Label>기간</Label>
      <div className={styles.dateInputsContainer}>
        <Input
          type="date"
          value={dateRange.startDate}
          onChange={(e) => onChangeStartDate(e.target.value)}
          max={today}
          className={styles.dateInput}
        />
        <span className={styles.separator}>~</span>
        <Input
          type="date"
          value={dateRange.endDate}
          onChange={(e) => onChangeEndDate(e.target.value)}
          max={today}
          className={styles.dateInput}
        />
      </div>
    </div>
  );
}

