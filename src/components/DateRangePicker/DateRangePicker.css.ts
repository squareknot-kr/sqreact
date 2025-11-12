import { style } from '@vanilla-extract/css';

export const datePickerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const dateInputsContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  flexWrap: 'wrap',
});

export const dateInputWrapper = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
});

export const dateInput = style({
  paddingLeft: '12px',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  borderColor: 'rgb(209 213 219)',
  height: '38px',
  width: '140px !important',
  boxSizing: 'border-box',
  transition: 'border-color 0.1s ease-out',
  '::-webkit-calendar-picker-indicator': {
    display: 'none',
  },
  '::-webkit-inner-spin-button': {
    display: 'none',
  },
  '::-webkit-outer-spin-button': {
    display: 'none',
  },
  ':focus': {
    borderColor: 'rgb(99 102 241)',
    outline: 'none',
    boxShadow: 'none',
  },
});

export const calendarIcon = style({
  position: 'absolute',
  right: '10px',
  color: 'rgb(75 85 99)',
  cursor: 'pointer',
  transition: 'color 0.15s',
  ':hover': {
    color: 'rgb(99 102 241)',
  },
});

export const separator = style({
  color: 'rgb(156 163 175)',
  fontSize: '14px',
  fontWeight: 500,
});

