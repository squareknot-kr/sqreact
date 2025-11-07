import { style } from '@vanilla-extract/css';

export const searchContainer = style({
  backgroundColor: 'white',
  borderRadius: '8px',
  paddingTop: '14px',
  paddingBottom: '14px',
  paddingLeft: '24px',
  paddingRight: '24px',
  width: '100%',
  maxWidth: '100%',
  minHeight: '64px',
  display: 'flex',
  alignItems: 'flex-end',
  gap: '20px',
  border: '1px solid rgb(243 244 246)',
  flexWrap: 'wrap',
  minWidth: 0,
  boxSizing: 'border-box',
});

export const childrenContainer = style({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '20px',
  flexWrap: 'wrap',
  flex: '1 1 0%',
  minWidth: 0,
});

export const buttonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  flexShrink: 0,
});

export const searchButtonLabel = style({
  fontSize: '14px',
  fontWeight: 500,
});

export const searchButton = style({
  backgroundColor: 'rgb(99 102 241)',
  color: 'white',
  paddingLeft: '32px',
  paddingRight: '32px',
  paddingTop: '8px',
  paddingBottom: '8px',
  height: '38px',
  minHeight: '38px',
  maxHeight: '38px',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  ':hover': {
    backgroundColor: 'rgb(79 70 229)',
  },
  ':focus': {
    outline: 'none',
    boxShadow: 'none',
    border: 'none',
  },
  ':focus-visible': {
    outline: 'none',
    boxShadow: 'none',
    border: 'none',
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const tagsContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: '12px',
  paddingLeft: '24px',
  paddingRight: '24px',
});