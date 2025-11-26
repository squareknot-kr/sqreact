import { style } from '@vanilla-extract/css';
import { colors, sizes, spacing } from '../../tokens';

export const checkboxWrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: spacing.sm,
  cursor: 'pointer',
  userSelect: 'none',
});

export const checkboxInput = style({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
  margin: 0,
  padding: 0,
  cursor: 'pointer',
  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const checkboxBox = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.15s',
  flexShrink: 0,
  boxSizing: 'border-box',
  position: 'relative',
});

export const checkboxBoxChecked = style({
  // 기본 스타일은 Storybook에만 적용
});

export const checkboxIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  fontSize: '12px',
});

export const checkboxLabel = style({
  lineHeight: '1.5',
  cursor: 'pointer',
});

// Storybook 전용 기본 스타일 (사용하는 쪽에서는 className으로 오버라이드 가능)
export const checkboxBoxDefault = style({
  width: '20px',
  height: '20px',
  border: `1px solid ${colors.border}`,
  borderRadius: sizes.radius.sm,
});

export const checkboxBoxCheckedDefault = style({
  borderColor: colors.primary[500],
  backgroundColor: colors.primary[500],
});

export const checkboxIconDefault = style({
  color: 'white',
});

export const checkboxLabelDefault = style({
  fontSize: '14px',
});

