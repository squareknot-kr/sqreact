import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const datePickerContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const labelSection = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px',
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
  minWidth: '140px',
});

// Base 스타일을 recipe로 정의 (className으로 오버라이드 가능)
export const dateInputRecipe = recipe({
  base: {
    paddingLeft: '12px',
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    borderColor: 'rgb(209 213 219)',
    height: '38px',
    width: '100%',
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
  },
});

export const dateInput = dateInputRecipe();

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

export const datePickerContainerFullWidth = style({
  flex: 1,
  minWidth: 0,
});

export const dateInputsContainerFullWidth = style({
  width: '100%',
});

export const dateInputWrapperFullWidth = style({
  flex: 1,
  minWidth: 0,
});

