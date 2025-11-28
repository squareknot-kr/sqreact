import { recipe } from '@vanilla-extract/recipes';

// Base 스타일을 recipe로 정의 (className으로 오버라이드 가능)
export const labelRecipe = recipe({
  base: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.5,
    color: 'rgb(55 65 81)',
  },
});

export const label = labelRecipe();

