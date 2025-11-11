import { style } from '@vanilla-extract/css';

export const input = style({
  display: 'flex',
  width: '100%',
  borderRadius: '6px',
  border: '1px solid rgb(209 213 219)',
  backgroundColor: 'white',
  paddingLeft: '12px',
  paddingRight: '12px',
  paddingTop: '8px',
  paddingBottom: '8px',
  fontSize: '14px',
  lineHeight: '1.25rem',
  color: 'rgb(31 41 55)',
  fontWeight: 500,
  transition: 'colors 0.15s',
  outline: 'none',
  boxSizing: 'border-box',
  ':focus-visible': {
    outline: 'none',
    boxShadow: 'none',
  },
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  '::placeholder': {
    color: 'rgb(156 163 175)',
  },
});

