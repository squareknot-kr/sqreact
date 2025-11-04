import { style, styleVariants } from '@vanilla-extract/css';

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '6px',
  fontWeight: 500,
  transition: 'colors 0.15s',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  boxSizing: 'border-box',
  ':focus-visible': {
    outline: '2px solid transparent',
    outlineOffset: '2px',
    boxShadow: '0 0 0 2px rgb(99 102 241 / 0.5)',
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const sizeVariants = styleVariants({
  sm: {
    padding: '0 12px',
    height: '32px',
    fontSize: '14px',
    lineHeight: '1.25rem',
  },
  md: {
    padding: '0 16px',
    height: '40px',
    fontSize: '16px',
    lineHeight: '1.5rem',
  },
  lg: {
    padding: '0 24px',
    height: '48px',
    fontSize: '18px',
    lineHeight: '1.75rem',
  },
});

export const variantVariants = styleVariants({
  default: {
    backgroundColor: 'rgb(99 102 241)',
    color: 'white',
    ':hover': {
      backgroundColor: 'rgb(79 70 229)',
    },
  },
  outline: {
    border: '1px solid rgb(209 213 219)',
    backgroundColor: 'transparent',
    color: 'rgb(55 65 81)',
    ':hover': {
      backgroundColor: 'rgb(249 250 251)',
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'rgb(55 65 81)',
    ':hover': {
      backgroundColor: 'rgb(243 244 246)',
    },
  },
});

