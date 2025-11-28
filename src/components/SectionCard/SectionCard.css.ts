import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { colors } from "@/tokens";

// Base 스타일을 recipe로 정의 (className으로 오버라이드 가능)
export const sectionCardRecipe = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    border: `0.8px solid ${colors.border}`,
  },
});

export const sectionCard = sectionCardRecipe();

export const sectionCardTitle = style({
  fontSize: '32px',
  marginBottom: '16px',
  fontWeight: 600,
  color: '#2E3438',
});

export const sectionCardDescription = style({
  marginBottom: '36px',
  fontSize: '16px',
  color: 'rgb(75 85 99)',
});

export const flexRow = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
});

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});