import { style } from '@vanilla-extract/css';

export const tag = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  paddingLeft: '12px',
  paddingRight: '8px',
  paddingTop: '6px',
  paddingBottom: '6px',
  backgroundColor: 'rgb(238 242 255)',
  border: '1px solid rgb(199 210 254)',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: 500,
  color: 'rgb(67 56 202)',
});

export const tagText = style({
  lineHeight: 1.5,
});

export const removeButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16px',
  height: '16px',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: 'rgb(99 102 241)',
  transition: 'color 0.15s',
  ':hover': {
    color: 'rgb(67 56 202)',
  },
  ':focus': {
    outline: 'none',
    borderRadius: '2px',
    boxShadow: '0 0 0 2px rgb(99 102 241 / 0.3)',
  },
});

export const removeIcon = style({
  width: '12px',
  height: '12px',
});

