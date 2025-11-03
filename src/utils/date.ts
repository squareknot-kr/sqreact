type GetDateString = (date: Date) => string;
type GetDateRange = (days: number, fromDate?: Date) => { startDate: string; endDate: string };

export const DEFAULT_DATE_OPTIONS = [30, 90, 150];

export const getCurrentDate = () => new Date();

export const getDateString: GetDateString = (date) => date.toISOString().split('T')[0];

export const getDateRange: GetDateRange = (days, baseDate) => {
  const from = baseDate ? new Date(baseDate) : getCurrentDate();
  const start = new Date(from);
  start.setDate(from.getDate() - days);

  return { 
    startDate: getDateString(start), 
    endDate: getDateString(from) 
  };
};

