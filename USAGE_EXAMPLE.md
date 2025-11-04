# Search 컴포넌트 사용 예제

## 1. 기본 사용법 (가장 간단)

내부적으로 상태를 관리하므로 별도 설정 없이 바로 사용할 수 있습니다.

```tsx
import 'sqreact-ui/style.css';
import { Search } from 'sqreact-ui';

function App() {
  const handleSearch = (params) => {
    console.log('Search params:', params);
    // params = { 
    //   status: '진행중',
    //   category: '전자제품',
    //   startDate: '2024-01-01',
    //   endDate: '2024-01-31'
    // }
  };

  return (
    <Search onSearch={handleSearch}>
      <Search.Select
        label="상태"
        options={['진행중', '완료', '취소']}
        keyToStore="status"
      />
      <Search.Select
        label="카테고리"
        options={['전자제품', '의류', '식품']}
        keyToStore="category"
      />
      <Search.DatePicker />
    </Search>
  );
}
```

## 2. 초기값 설정

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
      initialValues={{ status: '진행중', category: '전자제품' }}
      initialDateRange={{ startDate: '2024-01-01', endDate: '2024-01-31' }}
    >
      <Search.Select
        label="상태"
        options={['진행중', '완료', '취소']}
        keyToStore="status"
      />
      <Search.Select
        label="카테고리"
        options={['전자제품', '의류', '식품']}
        keyToStore="category"
      />
      <Search.DatePicker />
    </Search>
  );
}
```

## 3. useSearch 훅 사용 (외부 상태 관리)

외부에서 상태를 직접 관리하고 싶을 때 사용합니다.

```tsx
import 'sqreact-ui/style.css';
import { Search, useSearch } from 'sqreact-ui';
import { useEffect } from 'react';

function App() {
  // useSearch 훅으로 상태 관리
  const searchContext = useSearch({
    initialValues: { status: '진행중' },
    initialDateRange: { startDate: '2024-01-01', endDate: '2024-01-31' },
  });

  const handleSearch = (params) => {
    console.log('Search params:', params);
  };

  // 현재 선택된 값들을 실시간으로 확인 가능
  useEffect(() => {
    console.log('Current values:', searchContext.values);
    console.log('Current date range:', searchContext.dateRange);
  }, [searchContext.values, searchContext.dateRange]);

  return (
    <Search onSearch={handleSearch} contextValue={searchContext}>
      <Search.Select
        label="상태"
        options={['진행중', '완료', '취소']}
        keyToStore="status"
      />
      <Search.Select
        label="카테고리"
        options={['전자제품', '의류', '식품']}
        keyToStore="category"
      />
      <Search.DatePicker />
    </Search>
  );
}
```

## 4. 검색 버튼 비활성화

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
      onDisableSearch={() => {
        // 특정 조건에서 검색 버튼 비활성화
        return false; // true면 비활성화, false면 활성화
      }}
    >
      <Search.Select
        label="상태"
        options={['진행중', '완료', '취소']}
        keyToStore="status"
        required
      />
      <Search.DatePicker />
    </Search>
  );
}
```

## 5. Select 비활성화 및 로딩 상태

```tsx
import 'sqreact-ui/style.css';
import { Search } from 'sqreact-ui';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<string[]>([]);

  const handleSearch = (params) => {
    console.log('Search params:', params);
  };

  return (
    <Search onSearch={handleSearch}>
      <Search.Select
        label="템플릿"
        options={options}
        keyToStore="templateName"
        isLoading={isLoading}
        required
      />
      <Search.Select
        label="고객사"
        options={['고객사1', '고객사2', '고객사3']}
        keyToStore="clientName"
        onDisableSelect={() => {
          // templateName이 선택되지 않으면 비활성화
          return false; // true면 비활성화
        }}
      />
      <Search.DatePicker />
    </Search>
  );
}
```

## 6. 실제 프로젝트 예제 (API 연동)

```tsx
import 'sqreact-ui/style.css';
import { Search, useSearch } from 'sqreact-ui';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

function Dashboard() {
  const searchContext = useSearch();
  
  const { data: searchOptions, isLoading: isLoadingOptions } = useQuery({
    queryKey: ['searchOptions'],
    queryFn: async () => {
      const res = await fetch('/api/search-options');
      return res.json();
    },
  });

  const { data, trigger: fetchData, isFetching } = useQuery({
    queryKey: ['dashboard', searchContext.values, searchContext.dateRange],
    queryFn: async () => {
      const params = { ...searchContext.values, ...searchContext.dateRange };
      const res = await fetch('/api/dashboard', {
        method: 'POST',
        body: JSON.stringify(params),
      });
      return res.json();
    },
    enabled: false,
  });

  const handleSearch = () => {
    fetchData();
  };

  return (
    <div>
      <Search onSearch={handleSearch} contextValue={searchContext}>
        <Search.Select
          label="템플릿"
          options={searchOptions?.templates ?? []}
          keyToStore="templateName"
          isLoading={isLoadingOptions}
          required
        />
        <Search.Select
          label="고객사"
          options={searchOptions?.clients ?? []}
          keyToStore="clientName"
          isLoading={isLoadingOptions}
          onDisableSelect={() => !searchContext.values.templateName}
        />
        <Search.Select
          label="상품"
          options={searchOptions?.products ?? []}
          keyToStore="productName"
          isLoading={isLoadingOptions}
          onDisableSelect={() => !searchContext.values.templateName}
        />
        <Search.DatePicker />
      </Search>

      {isFetching ? (
        <div>로딩 중...</div>
      ) : (
        <div>
          {/* 데이터 표시 */}
          {JSON.stringify(data)}
        </div>
      )}
    </div>
  );
}
```

## 주요 특징

1. **간편한 사용**: 기본적으로 내부 상태 관리로 별도 설정 불필요
2. **유연한 상태 관리**: `useSearch` 훅으로 외부에서 상태 제어 가능
3. **초기값 설정**: `initialValues`, `initialDateRange` prop으로 초기값 설정
4. **조건부 비활성화**: `onDisableSearch`, `onDisableSelect`로 조건부 비활성화
5. **로딩 상태**: `isLoading` prop으로 로딩 상태 표시
6. **필수 필드**: `required` prop으로 필수 필드 지정

