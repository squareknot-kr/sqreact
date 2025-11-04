# sqreact-ui

React 컴포넌트와 유틸리티 라이브러리

## 설치

```bash
npm install sqreact-ui
# 또는
pnpm add sqreact-ui
# 또는
yarn add sqreact-ui
```

### 요구사항

- React 18.0.0 이상 또는 React 19.0.0 이상
- React DOM 18.0.0 이상 또는 React DOM 19.0.0 이상

## 사용법

### CSS 자동 적용

**CSS를 별도로 import할 필요 없습니다!** 컴포넌트를 import하면 CSS가 자동으로 적용됩니다.

```tsx
// CSS import 없이 컴포넌트만 import하면 자동으로 스타일이 적용됨
import { Search, PageList } from 'sqreact-ui';

function App() {
  return (
    <Search onSearch={(params) => console.log(params)}>
      <Search.Select
        label="상태"
        options={['진행중', '완료', '취소']}
        keyToStore="status"
      />
      <Search.DatePicker />
    </Search>
  );
}
```

> **참고**: CSS는 빌드 타임에 JS 번들에 포함되어 자동으로 주입됩니다.

### Search 컴포넌트

```tsx
import { Search } from 'sqreact-ui';

function App() {
  const handleSearch = (params) => {
    console.log('Search params:', params);
  };

  return (
    <Search onSearch={handleSearch}>
      <Search.Select
        label="상태"
        options={['진행중', '완료', '취소']}
        keyToStore="status"
      />
      <Search.DatePicker />
    </Search>
  );
}
```

### Pagination 컴포넌트

```tsx
import { PageList } from 'sqreact-ui';

function App() {
  const handlePageChange = (page: number) => {
    console.log('Page changed:', page);
  };

  return (
    <PageList
      totalPages={15}
      currentPage={1}
      onPageChange={handlePageChange}
    />
  );
}
```

## 개발

```bash
# 의존성 설치
pnpm install

# 개발 모드 (예제 앱 실행)
pnpm dev

# 빌드
pnpm build

# 타입 체크
pnpm type-check
```

## 배포

```bash
# 빌드
pnpm build

# npm 배포
npm publish
```

## 라이선스

MIT

