# sqreact

> UI 개발에 시간을 쓰지 않기 위해 만든 React 컴포넌트 라이브러리  
> A React component library to save time on UI development

[![npm version](https://img.shields.io/npm/v/sqreact)](https://www.npmjs.com/package/sqreact)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📚 Storybook

모든 컴포넌트의 문서, 예제, 그리고 인터랙티브 데모를 Storybook에서 확인할 수 있습니다.

**👉 [Storybook 보기 / View Storybook](https://squareknot-kr.github.io/sqreact/)**

Storybook에서는 다음을 확인할 수 있습니다:
- 📖 각 컴포넌트의 상세한 문서와 사용법
- 🎨 다양한 예제와 변형 (variants)
- 🎯 인터랙티브한 컴포넌트 데모
- 💻 실제 사용 가능한 코드 예제

## ✨ 주요 기능

- 🎨 **현대적인 디자인**: 깔끔하고 일관된 UI 컴포넌트
- 📦 **TypeScript 지원**: 완전한 타입 안정성
- 🎭 **커스터마이징 가능**: style prop을 통한 쉬운 스타일링
- 📱 **반응형**: 다양한 화면 크기 지원
- ♿ **접근성**: 웹 접근성 고려
- 🚀 **가벼움**: 최적화된 번들 크기

## 📦 설치 / Installation

```bash
npm install sqreact
```

### 요구사항 / Requirements

- **React** 18.0.0 이상 또는 19.0.0 이상
- **React DOM** 18.0.0 이상 또는 19.0.0 이상

### 선택적 의존성 / Optional Dependencies

일부 컴포넌트는 선택적 의존성이 필요합니다:

| 컴포넌트 | 의존성 | 버전 |
|---------|--------|------|
| `Dropdown`, `Select` | `framer-motion` | ^12.0.0 |
| `SelectButton` | `lucide-react` | ^0.500.0 |

```bash
# Dropdown 또는 Select를 사용하는 경우
npm install framer-motion

# SelectButton을 사용하는 경우
npm install lucide-react

# 둘 다 사용하는 경우
npm install framer-motion lucide-react
```

## 🚀 빠른 시작 / Quick Start

### 1. CSS Import

컴포넌트를 사용하기 전에 CSS를 import해야 합니다.

```tsx
import 'sqreact/style.css';
```

### 2. 컴포넌트 사용

```tsx
import { Button, Input, DateRangePicker, Select } from 'sqreact';
import 'sqreact/style.css';

function App() {
  return (
    <div>
      <Button>클릭하세요</Button>
      <Input 
        label="이름"
        placeholder="이름을 입력하세요"
      />
      <DateRangePicker 
        label="기간 선택"
        onChange={(startDate, endDate) => {
          console.log(startDate, endDate);
        }}
      />
      <Select
        label="옵션 선택"
        options={['옵션 1', '옵션 2', '옵션 3']}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}
```

## 📚 컴포넌트 목록 / Components

### 기본 컴포넌트

- **Button** - 버튼 컴포넌트 (아이콘, 전체 너비 지원, 커스텀 스타일링)
- **Input** - 입력 필드 컴포넌트 (라벨 지원, 다양한 타입 지원)
- **Label** - 라벨 컴포넌트

### 폼 컴포넌트

- **Select** - 드롭다운 선택 컴포넌트 (검색 기능 지원)
- **SelectButton** - 선택 버튼 컴포넌트
- **DateRangePicker** - 날짜 범위 선택 컴포넌트

### 레이아웃 컴포넌트

- **Dropdown** - 드롭다운 메뉴 컴포넌트
- **DropdownForSearch** - 검색용 드롭다운 컴포넌트
- **Pagination** (PageList) - 페이지네이션 컴포넌트

### 검색 컴포넌트

- **Search** - 검색 바 컴포넌트
- **useSearch** - 검색 기능을 위한 커스텀 훅

### 유틸리티

- **Motion** - 애니메이션 컴포넌트

각 컴포넌트의 상세한 사용법과 예제는 [Storybook](https://squareknot-kr.github.io/sqreact/)에서 확인하세요.

## 💻 개발 / Development

### 프로젝트 클론

```bash
git clone https://github.com/squareknot-kr/sqreact.git
cd sqreact
npm install
```

### 개발 명령어

```bash
# 개발 모드 (예제 앱 실행)
npm run dev

# Storybook 실행 (로컬)
npm run storybook
# 브라우저에서 http://localhost:6006 열림

# Storybook 빌드
npm run build-storybook

# 프로덕션 빌드
npm run build

# 타입 체크
npm run type-check

# 린트
npm run lint
```

### Storybook 개발

Storybook을 사용하여 컴포넌트를 개발하고 문서화할 수 있습니다:

1. **컴포넌트 스토리 작성**: 각 컴포넌트 폴더에 `.stories.tsx` 파일 생성
2. **로컬에서 확인**: `npm run storybook` 실행
3. **문서 작성**: Storybook의 Docs 탭에서 자동 생성된 문서 확인

## 📖 문서 / Documentation

- **온라인 문서**: [Storybook](https://squareknot-kr.github.io/sqreact/)
- **컴포넌트 예제**: 각 컴포넌트의 Storybook 스토리 참고
- **타입 정의**: TypeScript 타입 정의 파일 (`dist/*.d.ts`)

## 🤝 기여 / Contributing

버그 리포트, 기능 제안, Pull Request를 환영합니다!

Issues와 Pull Requests는 [GitHub](https://github.com/squareknot-kr/sqreact)에서 관리됩니다.

## 📝 피드백 / Feedback

피드백이나 제안사항이 있으시면 언제든지 연락주세요! 😀

- **이메일**: `oilater@naver.com`
- **GitHub Issues**: [Issues](https://github.com/squareknot-kr/sqreact/issues)

## 📄 라이선스 / License

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

Made with ❤️ by [oilater](https://github.com/squareknot-kr)
