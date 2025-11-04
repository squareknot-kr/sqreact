# sqreact-ui

React 컴포넌트와 유틸리티 라이브러리

## 설치

```bash
npm install sqreact-ui
```

### 요구사항

- React 18.0.0 이상 또는 React 19.0.0 이상
- React DOM 18.0.0 이상 또는 React DOM 19.0.0 이상

## 사용법

### CSS 사용

CSS는 package.json의 exports 필드를 통해 제공됩니다. 컴포넌트를 사용하려면 CSS를 import해야 합니다.

```tsx
// CSS import
import 'sqreact-ui/style.css';
// 또는
import 'sqreact-ui/css';
// 또는
import 'sqreact-ui/styles';

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

> **참고**: CSS는 빌드 시 `dist/style.css`로 생성되며, package.json의 exports 필드를 통해 제공됩니다.

### Search 컴포넌트

#### 기본 사용법 (간편)

내부적으로 `useSearch` 훅을 사용하여 상태를 관리하므로 별도의 설정 없이 바로 사용할 수 있습니다.

```tsx
import 'sqreact-ui/style.css';
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

#### 초기값 설정

```tsx
import 'sqreact-ui/style.css';
import { Search } from 'sqreact-ui';

function App() {
  const handleSearch = (params) => {
    console.log('Search params:', params);
  };

  return (
    <Search 
      onSearch={handleSearch}
      initialValues={{ status: '진행중' }}
      initialDateRange={{ startDate: '2024-01-01', endDate: '2024-01-31' }}
    >
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
npm install

# 개발 모드 (예제 앱 실행)
npm run dev

# 빌드
npm run build

# 타입 체크
npm run type-check

# 린트
npm run lint
```

## 배포

```bash
# 빌드
npm run build

# npm 배포
npm publish
```

## 라이선스

MIT

