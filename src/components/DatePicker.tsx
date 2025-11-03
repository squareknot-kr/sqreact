import { useContext } from "react";
import { Input } from "../shared/ui/input";
import { Label } from "../shared/ui/label";
import { SearchContext } from "./SearchContext";

export function DatePicker() {
  const { dateRange, updateDateRange } = useContext(SearchContext);
  
  const onChangeDate = (start: string, end: string) => {
    updateDateRange(start, end);
  };

  const inputClasses = "px-3 text-sm font-medium border-gray-300 focus:border-indigo-500 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:outline-none h-[38px] w-[150px]";

  return (
    <div className="flex flex-col gap-1 overflow-hidden">
      <Label className="text-sm font-medium text-gray-700 leading-normal">기간</Label>
      <div className="flex items-center gap-1.5 flex-wrap">
        <Input
          type="date"
          value={dateRange.startDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeDate(e.target.value, dateRange.endDate)}
          className={inputClasses}
        />
        <span className="text-gray-400 text-sm font-medium">~</span>
        <Input
          type="date"
          value={dateRange.endDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeDate(dateRange.startDate, e.target.value)}
          className={inputClasses}
        />
      </div>
    </div>
  );
}
