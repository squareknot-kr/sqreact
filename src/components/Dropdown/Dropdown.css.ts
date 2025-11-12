import { style } from '@vanilla-extract/css';

export const dropdownContainer = style({
  position: 'relative',
  flex: '1 1 0%',
  minWidth: 0,
  maxWidth: '100%',
});

export const labelSection = style({
  display: 'flex',
  flexDirection: 'column',
});

export const label = style({
  fontSize: '14px',
  fontWeight: 500,
  color: 'rgb(55 65 81)',
  lineHeight: 1.5,
  marginBottom: '10px',
});

export const button = style({
  width: '100%',
  height: '38px',
  paddingLeft: '12px',
  paddingRight: '12px',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: 500,
  backgroundColor: 'white',
  border: '1px solid rgb(209 213 219)',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  outline: 'none',
  boxSizing: 'border-box',
  color: 'rgb(31 41 55)',
  ':hover': {
    borderColor: 'rgb(99 102 241)',
  },
  ':focus': {
    outline: 'none',
    boxShadow: 'none',
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const buttonText = style({
  color: 'rgb(31 41 55)',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flex: 1,
  minWidth: 0,
  fontWeight: 500,
});

export const icon = style({
  width: '12px',
  height: '12px',
  color: 'rgb(75 85 99)',
  transition: 'transform 0.2s, opacity 0.2s',
});

export const iconRotated = style({
  transform: 'rotate(180deg)',
});

export const clearIconContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '18px',
  height: '18px',
  borderRadius: '50%',
  backgroundColor: 'rgb(229 231 235)',
  cursor: 'pointer',
  transition: 'background-color 0.15s',
  ':hover': {
    backgroundColor: 'rgb(209 213 219)',
  },
});

export const dropdown = style({
  position: 'absolute',
  marginTop: '4px',
  minWidth: '450px',
  border: '1px solid rgb(229 231 235)',
  borderRadius: '8px',
  maxHeight: '256px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 10,
  backgroundColor: 'white',
});

export const searchContainer = style({
  padding: '8px',
  borderBottom: '1px solid rgb(243 244 246)',
});

export const searchInput = style({
  width: '100%',
  height: '36px',
  paddingLeft: '12px',
  paddingRight: '12px',
  fontSize: '14px',
  backgroundColor: 'rgb(249 250 251)',
  border: '1px solid rgb(229 231 235)',
  borderRadius: '6px',
  outline: 'none',
  transition: 'colors 0.15s',
  boxSizing: 'border-box',
  ':focus': {
    border: '1.5px solid rgb(99 102 241)',
    backgroundColor: 'white',
  },
});

export const optionsContainer = style({
  overflowY: 'auto',
  maxHeight: '208px',
});

export const emptyState = style({
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingTop: '32px',
  paddingBottom: '32px',
  fontSize: '14px',
  color: 'rgb(156 163 175)',
  textAlign: 'center',
});

export const optionsList = style({
  paddingTop: '4px',
  paddingBottom: '4px',
  listStyle: 'none',
  margin: 0,
  paddingLeft: 0,
});

export const optionItem = style({
  width: '100%',
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingTop: '10px',
  paddingBottom: '10px',
  textAlign: 'left',
  fontSize: '14px',
  transition: 'colors 0.15s',
  cursor: 'pointer',
  border: 'none',
  backgroundColor: 'transparent',
  color: 'rgb(55 65 81)',
  ':hover': {
    backgroundColor: 'rgb(249 250 251)',
  },
});

export const optionItemSelected = style({
  backgroundColor: 'rgb(238 242 255)',
  color: 'rgb(79 70 229)',
  fontWeight: 500,
  ':hover': {
    backgroundColor: 'rgb(238 242 255)',
  },
});