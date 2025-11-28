import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { colors, sizes, spacing, typography } from '../../tokens';

// Base 스타일을 recipe로 정의 (className으로 오버라이드 가능)
export const buttonRecipe = recipe({
  base: {
    minWidth: '80px',
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
    textAlign: 'left',
    fontWeight: typography.fontWeight.medium,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
    outline: 'none',
    boxSizing: 'border-box',
    cursor: 'pointer',
    transition: 'all 0.2s',
    // Base 스타일 (사용하는 쪽에서 className으로 오버라이드 가능)
    height: sizes.button.md,
    backgroundColor: colors.background,
    color: colors.foreground,
    fontSize: typography.fontSize.md,
    borderRadius: sizes.radius.md,
    border: `1px solid ${colors.border}`,
    ':hover': {
      borderColor: colors.borderHover,
    },
    ':focus': {
      outline: 'none',
      boxShadow: 'none',
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
});

export const button = buttonRecipe();

export const buttonFullWidth = style({
  width: '100%',
});

export const buttonText = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flex: 1,
  minWidth: 0,
  fontWeight: typography.fontWeight.medium,
  textAlign: 'center',
  color: colors.text.primary,
});

export const icon = style({
  width: sizes.icon.sm,
  height: sizes.icon.sm,
  color: colors.text.secondary,
  transition: 'transform 0.2s, opacity 0.2s',
});