import { formatDateToString, getToday } from "@/utils/date";
import { SearchStore } from "./type";

const DEFAULT_STATE = {
  OPTION: '전체',
  VALUES: {},
  LABELS: {},
  DATE_RANGE: {
    startDate: (() => {
      const start = new Date(getToday());
      start.setDate(start.getDate() - 150);
      return formatDateToString(start);
    })(),
    endDate: formatDateToString(getToday()),
  },
};

export const searchStore: SearchStore = {
  state: {
    values: DEFAULT_STATE.VALUES,
    labels: {},
    dateRange: DEFAULT_STATE.DATE_RANGE,
  },
  listeners: new Set(),

  subscribe(listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  },

  notify() {
    this.listeners.forEach(listener => listener());
  },

  updateValues(key: string, value: string, label?: string) {
    if (value && value !== DEFAULT_STATE.OPTION) {
      this.state.values[key] = value;
      if (label) {
        this.state.labels[key] = label;
      }
    } else {
      delete this.state.values[key];
      if (label !== undefined) {
        delete this.state.labels[key];
      }
    }
    this.state = { ...this.state };
    this.notify();
  },

  updateDateRange(startDate: string, endDate: string) {
    this.state.dateRange.startDate = startDate;
    this.state.dateRange.endDate = endDate;
    this.state = { ...this.state };
    this.notify();
  },

  resetAll() {
    this.state.values = {};
    this.state.labels = {};
    this.state = { ...this.state };
    this.notify();
  },
};