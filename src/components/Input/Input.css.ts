import { style } from '@vanilla-extract/css';
import { spacing } from '../../tokens';

export const input = style({
  display: 'flex',
  width: '320px',
  borderRadius: '6px',
  border: '1px solid rgb(209 213 219)',
  backgroundColor: 'white',
  paddingLeft: '12px',
  paddingRight: '12px',
  paddingTop: '8px',
  paddingBottom: '8px',
  fontSize: '14px',
  lineHeight: '1.25rem',
  color: '#2E3438',
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

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.md,
});

export const inputFullWidth = style([
  input,
  {
    width: '100%',
  },
]);

export const wrapperFullWidth = style([
  wrapper,
  {
    width: '100%',
  },
]);

