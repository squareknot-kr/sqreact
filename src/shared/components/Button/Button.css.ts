import { style } from "@vanilla-extract/css";
import { colors, sizes, spacing, typography } from '../../tokens';

export const button = style({
  height: sizes.button.md,
  paddingLeft: spacing.md,
  paddingRight: spacing.md,
  textAlign: 'left',
  fontSize: typography.fontSize.md,
  fontWeight: typography.fontWeight.medium,
  backgroundColor: colors.background,
  border: `1px solid ${colors.border}`,
  borderRadius: sizes.radius.md,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  outline: 'none',
  boxSizing: 'border-box',
  color: colors.foreground,
  cursor: 'pointer',
  transition: 'all 0.2s',
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
});

export const buttonFullWidth = style({
  width: '100%',
});

export const buttonText = style({
  color: colors.text.primary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flex: 1,
  minWidth: 0,
  fontWeight: typography.fontWeight.medium,
});

export const icon = style({
  width: sizes.icon.sm,
  height: sizes.icon.sm,
  color: colors.text.secondary,
  transition: 'transform 0.2s, opacity 0.2s',
});