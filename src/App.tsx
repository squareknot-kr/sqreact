import { useState } from 'react';
import { Search } from './components';
import { PageList } from './components/Pagination';

type SearchParams = Record<string, string> & {
  startDate: string;
  endDate: string;
};

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (params: SearchParams) => {
    console.log('Search params:', params);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    console.log('Page changed:', page);
    setCurrentPage(page);
  };

  const statusOptions = ['진행중', '완료', '취소'];
  const categoryOptions = ['카테고리1', '카테고리2', '카테고리3'];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow p-6">
          <Search onSearch={handleSearch}>
            <Search.Select
              label="상태"
              options={statusOptions}
              keyToStore="status"
            />
            <Search.Select
              label="상태"
              options={statusOptions}
              keyToStore="status"
            />
            <Search.Select
              label="카테고리"
              options={categoryOptions}
              keyToStore="category"
            />
            <Search.DatePicker />
          </Search>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-semibold mb-4">페이지네이션 테스트</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <PageList
                totalPages={15}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
              <div className="mt-4 text-sm text-gray-600">
                현재 페이지: {currentPage}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

