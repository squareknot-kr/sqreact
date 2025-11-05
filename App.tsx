import { useState } from 'react';
import { Search, PageList } from './src/index';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 25;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log('');
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '24px', fontWeight: 'bold' }}>
        sqreact-ui 테스트
      </h1>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          Search 컴포넌트
        </h2>
        <Search onSearch={() => true}>
          <Search.Select
            label="상태"
            options={['전체', '진행중', '완료', '취소']}
            storeKey="status"
          />
          <Search.Select
            label="카테고리"
            options={['전체', '공지', '이벤트', '업데이트']}
            storeKey="category"
          />
          <Search.DatePicker />
        </Search>
      </div>

      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          PageList 컴포넌트
        </h2>
        <PageList
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default App;

