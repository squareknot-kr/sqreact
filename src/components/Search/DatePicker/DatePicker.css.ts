import { style } from '@vanilla-extract/css';

export const datePickerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  overflow: 'hidden',
  flexShrink: 0,
});

export const dateInputsContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  flexWrap: 'wrap',
});

export const dateInput = style({
  paddingLeft: '12px',
  paddingRight: '12px',
  fontSize: '14px',
  fontWeight: 500,
  borderColor: 'rgb(209 213 219)',
  height: '38px',
  width: '150px !important',
  minWidth: '150px',
  maxWidth: '150px',
  ':focus': {
    borderColor: 'rgb(99 102 241)',
    outline: 'none',
    boxShadow: 'none',
  },
});

export const separator = style({
  color: 'rgb(156 163 175)',
  fontSize: '14px',
  fontWeight: 500,
});

