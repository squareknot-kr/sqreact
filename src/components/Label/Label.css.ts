import { style } from '@vanilla-extract/css';

export const label = style({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: 1.5,
});

// Storybook 전용 기본 스타일 (사용하는 쪽에서는 className으로 오버라이드 가능)
export const labelDefault = style({
  color: 'rgb(55 65 81)',
});

