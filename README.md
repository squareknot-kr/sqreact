# sqreact

React 컴포넌트와 유틸리티 라이브러리입니다.
현재 스퀘어노트의 백오피스 구현에 사용하고 있습니다.
더 이상 UI 만드는 데 시간을 쓰지 마세요.
사용하기 편리한 추상화된 UI를 제공합니다.
꾸준히 업데이트 할 예정입니다. 

피드백은 `oilater@naver.com`으로 남겨주세요 😀 


A React components and utilities library.
Currently used in Squarenote's backoffice implementation.
Stop spending time building UI.
Provides easy-to-use abstracted UI components.
Will be continuously updated.

Please send feedback to `oilater@naver.com` 😀

## 설치 / Installation

```bash
npm install sqreact
```

### 요구사항 / Requirements

- React 18.0.0 이상 또는 React 19.0.0 이상 
/ React 18.0.0 or higher, or React 19.0.0 or higher
- React DOM 18.0.0 이상 또는 React DOM 19.0.0 이상 
/ React DOM 18.0.0 or higher, or React DOM 19.0.0 or higher

## 시작하기 / Getting Started

### CSS Import

컴포넌트를 사용하기 전에 CSS를 import해야 합니다. `main.tsx` 같은 전역 상위 파일에 import 해놓으면 됩니다.

You must import CSS before using components. Import it in a global top-level file like `main.tsx`.

```tsx
import 'sqreact/style.css';
```

## Hooks

### useSearch

선택한 값들이 담긴 `values` 객체와 선택된 날짜가 담긴 `dateRange` 객체를 반환합니다.

Returns a `values` object containing selected values and a `dateRange` object containing selected dates.

```tsx
import { useSearch } from 'sqreact';

const { values, dateRange } = useSearch();

/**
 * @example
 * values: {
 *   fruit: '사과',        // 현재 선택된 값 / Currently selected value
 *   beverage: '게토레이'  // 현재 선택된 값 / Currently selected value
 * }
 * 
 * dateRange: {
 *   startDate: '2025-10-11', // string
 *   endDate: '2025-11-06'    // string
 * }
 */
```

#### 반환값 / Return Values

| 속성 / Property | 타입 / Type | 설명 / Description |
|------|------|------|
| `values` | `Record<string, string>` | 현재 선택된 검색 값들 / Currently selected search values |
| `labels` | `Record<string, string>` | 현재 선택된 검색 라벨들 / Currently selected search labels |
| `dateRange` | `{ startDate: string; endDate: string }` | 현재 설정된 날짜 범위 / Currently set date range |
| `updateValues` | `(key: string, value: string, label?: string) => void` | 검색 값 업데이트 / Update search values |
| `updateDateRange` | `(startDate: string, endDate: string) => void` | 날짜 범위 업데이트 / Update date range |

## 컴포넌트 / Components

### Search

백오피스에서 편하게 사용할 수 있는 검색바입니다. `useSearch` 훅과 함께 사용합니다.

A search bar that can be easily used in backoffice. Works with the `useSearch` hook.

#### 구조 / Structure

```tsx
import { Search } from 'sqreact';

<Search
  onSearch={} // 검색을 누르면 실행할 함수 / Function to execute when search button is clicked
  disabled={} // (optional) 검색을 막는 조건 / Condition to disable search
>
  <Search.Select 
    label="" // Select 카드 위에 표시되는 소제목(라벨) / Label displayed above Select card
    options={} // 옵션으로 띄워 줄 아이템 목록 (Array) / Array of items to display as options
    valueKey="" // useSearch의 values 키로 저장하고 싶은 값 / Key to store in useSearch's values
    disabled={} // (optional) Select 카드 클릭을 막는 조건 (bool or Function) / Condition to disable Select card click (bool or Function)
    isLoading={} // (optional) 로딩 상태 / Loading state
  />
  <Search.Select />
  // ...
  <Search.DatePicker 
    startDate={} // (optional) 시작 날짜 초기 설정 가능 (기본값은 150일 전) / Initial start date (default: 150 days ago)
    endDate={} // (optional) 끝 날짜 초기 설정 가능 (기본값은 오늘) / Initial end date (default: today)
  />
</Search>
```

#### 특징 / Features

- **반응형 UI**: `Search.Select` 카드의 개수만큼 분배해서 부모의 남은 공간을 차지합니다.
  **Responsive UI**: Distributes based on the number of `Search.Select` cards, occupying the remaining space of the parent.

- **날짜 필터 선택사항**: 날짜 필터가 필요하지 않다면 `Search.DatePicker`는 사용하지 않아도 됩니다.
  **Optional Date Filter**: If date filtering is not needed, `Search.DatePicker` can be omitted.

#### Props

| Prop | Type | Description (한국어 / English) |
|------|------|------|
| `onSearch` | `(params: SearchParams) => void` | 검색 버튼 클릭 시 호출되는 콜백 함수 / Callback function called when search button is clicked |
| `disabled` | `(values: Record<string, string>) => boolean` | 검색 버튼 비활성화 조건 함수 (optional) / Function to disable search button (optional) |

#### Search.Select Props

| Prop | Type | Description (한국어 / English) |
|------|------|------|
| `label` | `string` | Select 카드 위에 표시되는 소제목(라벨) / Label displayed above Select card |
| `options` | `string[]` | 옵션으로 띄워 줄 아이템 목록 / Array of items to display as options |
| `valueKey` | `string` | useSearch의 values 키로 저장하고 싶은 값 / Key to store in useSearch's values |
| `disabled` | `boolean \| ((values: Record<string, string>) => boolean)` | Select 카드 클릭을 막는 조건 (optional) / Condition to disable Select card click (optional) |
| `isLoading` | `boolean` | 로딩 상태 (optional) / Loading state (optional) |

#### Search.DatePicker Props

| Prop | Type | Description (한국어 / English) |
|------|------|------|
| `startDate` | `string` | 시작 날짜 초기 설정 가능 (기본값은 150일 전) (optional) / Initial start date (default: 150 days ago) (optional) |
| `endDate` | `string` | 끝 날짜 초기 설정 가능 (기본값은 오늘) (optional) / Initial end date (default: today) (optional) |

**참고 / Note**: 오늘 이후의 날짜는 선택할 수 없으며, 선택 시 자동으로 오늘 날짜로 조정됩니다.
Dates after today cannot be selected, and will automatically adjust to today's date if selected.

#### 예시 / Example

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
    // API 호출 등 / API calls, etc.
  };

  return (
    <Search
      onSearch={fetchPageView}
      disabled={(values) => !values.templateName} // 검색을 막는 조건 / Condition to disable search
    >
      <Search.Select
        label="템플릿" 
        valueKey="templateName" // 여기에 지정한 키값이 useSearch의 vaules의 키로 바인딩됩니다. ex) values.templateName / The key specified here will be bound to the key of useSearch's values. ex) values.templateName
        options={searchOptions.templates}
      />
      <Search.Select
        label="고객사" 
        valueKey="clientName"
        options={searchOptions.clients}
        disabled={!values?.templateName} // bool 값 사용 가능 / bool value can be used
      />
      <Search.Select
        label="상품" 
        valueKey="productName"
        options={searchOptions.products} 
        disabled={(values) => !values?.templateName} // bool 값을 반환하는 함수도 사용 가능 / Function that returns bool value can also be used
      />
      <Search.DatePicker />
    </Search>
  );
}
```

#### Search 컴포넌트와 useSearch 훅 함께 사용하기 / Using Search Component with useSearch Hook

`Search` 컴포넌트도 내부적으로 `useSearch` 훅을 사용하므로, 같은 전역 상태를 공유합니다. 
따라서 `useSearch` 훅을 사용하여 `Search` 컴포넌트 외부에서도 검색 상태를 읽거나 업데이트할 수 있습니다.

The `Search` component also uses the `useSearch` hook internally, so they share the same global state.
Therefore, you can use the `useSearch` hook to read or update search state outside of the `Search` component.

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

A clean and easy-to-use pagination component.

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

| Prop | Type | Description (한국어 / English) |
|------|------|------|
| `totalPages` | `number` | 전체 페이지 수 / Total number of pages |
| `currentPage` | `number` | 현재 페이지 / Current page |
| `onPageChange` | `(page: number) => void` | 페이지 변경 시 호출되는 콜백 함수 / Callback function called when page changes |

## 개발 / Development

```bash
# 의존성 설치 / Install dependencies
npm install

# 개발 모드 (예제 앱 실행) / Development mode (run example app)
npm run dev

# 빌드 / Build
npm run build

# 타입 체크 / Type check
npm run type-check

# 린트 / Lint
npm run lint
```

## 배포 / Deployment

```bash
# 빌드 / Build
npm run build

# npm 배포 / npm publish
npm publish
```

## 라이선스 / License

MIT
