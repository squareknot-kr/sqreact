import { style, keyframes } from '@vanilla-extract/css';
import { colors } from '../../tokens';

const fadeInScale = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0.8) rotate(-90deg)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1) rotate(0deg)',
  },
});

export const closeIconWrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '18px',
  height: '18px',
  borderRadius: '50%',
  backgroundColor: colors.gray[200],
  transition: 'background-color 0.2s',
  animation: `${fadeInScale} 0.2s ease-out`,
  ':hover': {
    backgroundColor: colors.gray[300],
  },
});

export const closeIcon = style({
  width: '10px',
  height: '10px',
  color: colors.text.secondary,
  transition: 'transform 0.2s',
});

export const chevronIcon = style({
  width: '16px',
  height: '16px',
  transition: 'transform 0.2s, opacity 0.2s',
});

export const selectButton = style({
  width: '100%',
});
