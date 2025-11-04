import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '32px',
  marginBottom: '32px',
});

export const pagesContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const pageButton = styleVariants({
  active: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    border: '1px solid rgb(99 102 241)',
    fontSize: '14px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'colors 0.2s',
    backgroundColor: 'rgb(99 102 241)',
    color: 'white',
    boxSizing: 'border-box',
    ':hover': {
      backgroundColor: 'rgb(99 102 241 / 0.9)',
    },
  },
  inactive: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    border: '1px solid rgb(229 231 235)',
    fontSize: '14px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'colors 0.2s',
    backgroundColor: 'white',
    color: 'rgb(55 65 81)',
    boxSizing: 'border-box',
    ':hover': {
      backgroundColor: 'rgb(249 250 251)',
    },
  },
});

export const navButton = style({
  width: '60px',
  height: '40px',
  borderRadius: '8px',
  border: '1px solid rgb(229 231 235)',
  backgroundColor: 'white',
  color: 'rgb(55 65 81)',
  fontSize: '13px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'colors 0.2s',
  boxSizing: 'border-box',
  ':hover': {
    backgroundColor: 'rgb(249 250 251)',
  },
});

