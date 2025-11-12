# sqreact

UI 개발에 시간을 쓰지 않기 위해 만든 React 컴포넌트와 유틸리티 라이브러리입니다.

A React components and utilities library.

## 📖 Storybook

컴포넌트 문서와 예시는 Storybook에서 확인할 수 있습니다.

Component documentation and examples are available in Storybook.

👉 **[Storybook 보기 / View Storybook](https://squareknot-kr.github.io/sqreact/)**

## 📦 설치 / Installation

```bash
npm install sqreact
```

### 요구사항 / Requirements

- React 18.0.0 이상 또는 React 19.0.0 이상 / React 18.0.0 or higher, or React 19.0.0 or higher
- React DOM 18.0.0 이상 또는 React DOM 19.0.0 이상 / React DOM 18.0.0 or higher, or React DOM 19.0.0 or higher

### 선택적 의존성 / Optional Dependencies

일부 컴포넌트를 사용할 때만 필요한 선택적 의존성이 있습니다:

Some components require optional dependencies only when used:

- **`framer-motion`** (^12.0.0): `Dropdown`, `Select` 컴포넌트 사용 시 필요 / Required when using `Dropdown` or `Select` components
- **`lucide-react`** (^0.500.0): `SelectButton` 컴포넌트 사용 시 필요 / Required when using `SelectButton` component

```bash
# Dropdown 또는 Select를 사용하는 경우
npm install framer-motion

# SelectButton을 사용하는 경우
npm install lucide-react

# 둘 다 사용하는 경우
npm install framer-motion lucide-react
```

## 🚀 시작하기 / Getting Started

### CSS Import

컴포넌트를 사용하기 전에 CSS를 import해야 합니다.

You must import CSS before using components.

```tsx
import 'sqreact/style.css';
```

## 💻 개발 / Development

```bash
# 의존성 설치 / Install dependencies
npm install

# 개발 모드 (예제 앱 실행) / Development mode (run example app)
npm run dev

# Storybook 실행 / Run Storybook
npm run storybook

# 빌드 / Build
npm run build

# 타입 체크 / Type check
npm run type-check

# 린트 / Lint
npm run lint
```

## 📝 피드백 / Feedback

피드백은 `oilater@naver.com`으로 남겨주세요 😀

Please send feedback to `oilater@naver.com` 😀

## 📄 라이선스 / License

MIT
