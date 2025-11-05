import { Input } from "@/shared/ui/Input";
import { Label } from "@/shared/ui/Label";
import { useSearch } from "../useSearch";
import * as styles from './DatePicker.css';
import { useEffect } from "react";

export function DatePicker({ startDate = undefined, endDate = undefined }: { 
  startDate?: string;
  endDate?: string;
}) {
  const { dateRange, updateDateRange } = useSearch();

  useEffect(() => {
    if (startDate || endDate) {
      updateDateRange(startDate || dateRange.startDate, endDate || dateRange.endDate);
    }
  }, [startDate, endDate]);
  
  return (
    <div className={styles.datePickerContainer}>
      <Label>기간</Label>
      <div className={styles.dateInputsContainer}>
        <Input
          type="date"
          value={dateRange.startDate}
          onChange={(e) => updateDateRange(e.target.value, dateRange.endDate)}
          className={styles.dateInput}
        />
        <span className={styles.separator}>~</span>
        <Input
          type="date"
          value={dateRange.endDate}
          onChange={(e) => updateDateRange(dateRange.startDate, e.target.value)}
          className={styles.dateInput}
        />
      </div>
    </div>
  );
}

