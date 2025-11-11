/**
 * 색상 디자인 토큰
 */
export const colors = {
  // Primary
  primary: {
    50: 'rgb(238 242 255)',
    100: 'rgb(224 231 255)',
    500: 'rgb(99 102 241)',
    600: 'rgb(79 70 229)',
    700: 'rgb(67 56 202)',
  },
  
  // Gray
  gray: {
    50: 'rgb(249 250 251)',
    100: 'rgb(243 244 246)',
    200: 'rgb(229 231 235)',
    300: 'rgb(209 213 219)',
    400: 'rgb(156 163 175)',
    500: 'rgb(107 114 128)',
    600: 'rgb(75 85 99)',
    700: 'rgb(55 65 81)',
    800: 'rgb(31 41 55)',
    900: 'rgb(17 24 39)',
  },
  
  // Semantic
  background: 'white',
  foreground: 'rgb(31 41 55)',
  border: 'rgb(209 213 219)',
  borderHover: 'rgb(99 102 241)',
  
  // Destructive
  destructive: {
    500: 'rgb(239 68 68)',
    600: 'rgb(220 38 38)',
  },
  
  // Text
  text: {
    primary: 'rgb(31 41 55)',
    secondary: 'rgb(75 85 99)',
    muted: 'rgb(156 163 175)',
  },
} as const;

