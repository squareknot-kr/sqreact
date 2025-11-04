import { useContext } from "react";
import { Input } from "@/shared/ui/Input";
import { Label } from "@/shared/ui/Label";
import { SearchContext } from "../SearchContext";
import * as styles from './DatePicker.css';

export function DatePicker() {
  const { dateRange, updateDateRange } = useContext(SearchContext);
  
  const onChangeDate = (start: string, end: string) => {
    updateDateRange(start, end);
  };

  return (
    <div className={styles.datePickerContainer}>
      <Label>기간</Label>
      <div className={styles.dateInputsContainer}>
        <Input
          type="date"
          value={dateRange.startDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeDate(e.target.value, dateRange.endDate)}
          className={styles.dateInput}
        />
        <span className={styles.separator}>~</span>
        <Input
          type="date"
          value={dateRange.endDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeDate(dateRange.startDate, e.target.value)}
          className={styles.dateInput}
        />
      </div>
    </div>
  );
}

