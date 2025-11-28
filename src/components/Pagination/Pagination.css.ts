import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

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

// Base 스타일을 recipe로 정의 (backgroundColor와 color는 prop으로 오버라이드 가능)
export const pageButtonRecipe = recipe({
  base: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'colors 0.2s',
    boxSizing: 'border-box',
  },
  variants: {
    isActive: {
      true: {
        border: '1px solid rgb(99 102 241)',
        backgroundColor: 'rgb(99 102 241)',
        color: 'white',
        ':hover': {
          backgroundColor: 'rgb(99 102 241 / 0.9)',
        },
      },
      false: {
        border: '1px solid rgb(229 231 235)',
        backgroundColor: 'white',
        color: 'rgb(55 65 81)',
        ':hover': {
          backgroundColor: 'rgb(249 250 251)',
        },
      },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

export const pageButton = pageButtonRecipe;

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

