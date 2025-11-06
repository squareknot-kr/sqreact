# sqreact

React 컴포넌트와 유틸리티 라이브러리

## 설치

```bash
npm install sqreact
```

### 요구사항

- React 18.0.0 이상 또는 React 19.0.0 이상
- React DOM 18.0.0 이상 또는 React DOM 19.0.0 이상

## 시작하기

### CSS Import

컴포넌트를 사용하기 전에 CSS를 import해야 합니다. `main.tsx` 같은 전역 상위 파일에 import 해놓으면 됩니다.

```tsx
import 'sqreact/style.css';
```

## Hooks

### useSearch

선택한 값들이 담긴 `values` 객체와 선택된 날짜가 담긴 `dateRange` 객체를 반환합니다.

```tsx
import { useSearch } from 'sqreact';

const { values, dateRange } = useSearch();

/**
 * @example
 * values: {
 *   fruit: '사과',        // 현재 선택된 값
 *   beverage: '게토레이'  // 현재 선택된 값
 * }
 * 
 * dateRange: {
 *   startDate: '2025-10-11', // string
 *   endDate: '2025-11-06'    // string
 * }
 */
```

#### 반환값

| 속성 | 타입 | 설명 |
|------|------|------|
| `values` | `Record<string, string>` | 현재 선택된 검색 값들 |
| `labels` | `Record<string, string>` | 현재 선택된 검색 라벨들 |
| `dateRange` | `{ startDate: string; endDate: string }` | 현재 설정된 날짜 범위 |
| `updateValues` | `(key: string, value: string, label?: string) => void` | 검색 값 업데이트 |
| `updateDateRange` | `(startDate: string, endDate: string) => void` | 날짜 범위 업데이트 |

## 컴포넌트

### Search

백오피스에서 편하게 사용할 수 있는 검색바입니다. `useSearch` 훅과 함께 사용합니다.

#### 구조

```tsx
import { Search } from 'sqreact';

<Search
  onSearch={} // 검색을 누르면 실행할 함수
  disabled={} // (optional) 검색을 막는 조건
>
  <Search.Select 
    label="" // Select 카드 위에 표시되는 소제목(라벨)
    options={} // 옵션으로 띄워 줄 아이템 목록 (Array)
    valueKey="" // useSearch의 values 키로 저장하고 싶은 값
    disabled={} // (optional) Select 카드 클릭을 막는 조건 (bool or Function)
    isLoading={} // (optional) 로딩 상태
  />
  <Search.Select />
  // ...
  <Search.DatePicker 
    startDate={} // (optional) 시작 날짜 초기 설정 가능 (기본값은 150일 전)
    endDate={} // (optional) 끝 날짜 초기 설정 가능 (기본값은 오늘)
  />
</Search>
```

#### 특징

- **반응형 UI**: `Search.Select` 카드의 개수만큼 분배해서 부모의 남은 공간을 차지합니다.
- **날짜 필터 선택사항**: 날짜 필터가 필요하지 않다면 `Search.DatePicker`는 사용하지 않아도 됩니다.

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `onSearch` | `(params: SearchParams) => void` | 검색 버튼 클릭 시 호출되는 콜백 함수 |
| `disabled` | `(values: Record<string, string>) => boolean` | 검색 버튼 비활성화 조건 함수 (optional) |

#### Search.Select Props

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Select 카드 위에 표시되는 소제목(라벨) |
| `options` | `string[]` | 옵션으로 띄워 줄 아이템 목록 |
| `valueKey` | `string` | useSearch의 values 키로 저장하고 싶은 값 |
| `disabled` | `boolean \| ((values: Record<string, string>) => boolean)` | Select 카드 클릭을 막는 조건 (optional) |
| `isLoading` | `boolean` | 로딩 상태 (optional) |

#### Search.DatePicker Props

| Prop | Type | Description |
|------|------|-------------|
| `startDate` | `string` | 시작 날짜 초기 설정 가능 (기본값은 150일 전) (optional) |
| `endDate` | `string` | 끝 날짜 초기 설정 가능 (기본값은 오늘) (optional) |

**참고**: 오늘 이후의 날짜는 선택할 수 없으며, 선택 시 자동으로 오늘 날짜로 조정됩니다.

#### 예시

```tsx
import 'sqreact/style.css';
import { Search, useSearch } from 'sqreact';

function App() {
  const { values, dateRange } = useSearch();

  const searchOptions = {
    templates: ['템플릿1', '템플릿2', '템플릿3'],
    clients: ['고객사1', '고객사2', '고객사3'],
    products: ['상품1', '상품2', '상품3'],
  };

  const fetchPageView = (params) => {
    console.log('Search params:', params);
    // API 호출 등
  };

  return (
    <Search
      onSearch={fetchPageView}
      disabled={(values) => {
        // 검색을 막는 조건
        return !values.templateName;
      }}
    >
      <Search.Select
        label="템플릿" 
        options={searchOptions.templates}
        valueKey="templateName"
      />
      <Search.Select
        label="고객사" 
        options={searchOptions.clients}
        valueKey="clientName"
        disabled={(values) => !values?.templateName}
      />
      <Search.Select
        label="상품" 
        options={searchOptions.products} 
        valueKey="productName"
        disabled={(values) => !values?.templateName}
      />
      <Search.DatePicker />
    </Search>
  );
}
```

#### Search 컴포넌트와 useSearch 훅 함께 사용

`Search` 컴포넌트도 내부적으로 `useSearch` 훅을 사용하므로, 같은 전역 상태를 공유합니다. 따라서 `useSearch` 훅을 사용하여 `Search` 컴포넌트 외부에서도 검색 상태를 읽거나 업데이트할 수 있습니다.

```tsx
import 'sqreact/style.css';
import { Search, useSearch } from 'sqreact';

function App() {
  return (
    <>
      <SearchComponent />
      <StatusDisplay />
    </>
  );
}

function SearchComponent() {
  return (
    <Search onSearch={(params) => console.log(params)}>
      <Search.Select
        label="상태"
        options={['진행중', '완료', '취소']}
        valueKey="status"
      />
      <Search.DatePicker />
    </Search>
  );
}

function StatusDisplay() {
  const { values, dateRange } = useSearch();
  
  return (
    <div>
      <p>현재 상태: {values.status}</p>
      <p>날짜: {dateRange.startDate} ~ {dateRange.endDate}</p>
    </div>
  );
}
```

### PageList

깔끔하고 쉽게 사용할 수 있는 페이지네이션 컴포넌트입니다.

```tsx
import { PageList } from 'sqreact';

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

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `totalPages` | `number` | 전체 페이지 수 |
| `currentPage` | `number` | 현재 페이지 |
| `onPageChange` | `(page: number) => void` | 페이지 변경 시 호출되는 콜백 함수 |

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
