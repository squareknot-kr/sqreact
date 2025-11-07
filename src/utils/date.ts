type GetDateRange = (days: number, fromDate?: Date) => { startDate: string; endDate: string };

export const DEFAULT_DATE_OPTIONS = [30, 90, 150];

export const getToday = (): Date => new Date(Date.now());

export const formatDateToString = (date: Date) => date.toISOString().split('T')[0];

export const getDateRange: GetDateRange = (days, baseDate) => {
  const from = baseDate ? new Date(baseDate) : getToday();
  const start = new Date(from);
  start.setDate(from.getDate() - days);

  return { 
    startDate: formatDateToString(start), 
    endDate: formatDateToString(from) 
  };
};

