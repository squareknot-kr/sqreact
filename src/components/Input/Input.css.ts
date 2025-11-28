import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { spacing } from '../../tokens';

// Base 스타일을 recipe로 정의 (className으로 오버라이드 가능)
export const inputRecipe = recipe({
  base: {
    display: 'flex',
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '8px',
    paddingBottom: '8px',
    lineHeight: '1.25rem',
    transition: 'colors 0.15s',
    outline: 'none',
    boxSizing: 'border-box',
    // Base 스타일 (사용하는 쪽에서 className으로 오버라이드 가능)
    width: '320px',
    color: '#2E3438',
    backgroundColor: 'white',
    borderRadius: '6px',
    border: '1px solid rgb(209 213 219)',
    fontSize: '14px',
    fontWeight: 500,
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
  },
});

export const input = inputRecipe();

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

