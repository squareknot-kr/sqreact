import { memo } from 'react';

interface PageItemProps {
  pageNumber: number;
  isActive: boolean;
  onClick: (page: number) => void;
}

const PageItem = memo(function PageItem({ pageNumber, isActive, onClick }: PageItemProps) {
  return (
    <button
      className={
        `w-10 h-10 rounded-lg border text-[14px] font-medium flex items-center justify-center cursor-pointer transition-colors duration-200 
         ${isActive
           ? 'bg-primary text-primary-foreground border-primary hover:bg-primary/90'
           : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`
      }
      onClick={() => onClick(pageNumber)}
    >
      {pageNumber}
    </button>
  );
});

interface PageListProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const PageList = memo(function PageList({ totalPages, currentPage, onPageChange }: PageListProps) {
  const totalGroups = Math.ceil(totalPages / 10);
  const currentGroup = Math.ceil(currentPage / 10);
  
  const startPage = (currentGroup - 1) * 10 + 1;
  const endPage = Math.min(currentGroup * 10, totalPages);
  
  const visiblePages = Array.from(
    { length: endPage - startPage + 1 }, 
    (_, index) => startPage + index
  );

  return (
    <div className="flex justify-center items-center my-8">
      <div className="flex items-center gap-2">
        {currentGroup > 1 && (
          <button
            className="w-[60px] h-10 rounded-lg border border-gray-200 bg-white text-gray-700 text-[13px] font-medium flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-gray-50"
            onClick={() => onPageChange(startPage - 1)}
          >
            이전
          </button>
        )}

        {visiblePages.map((pageNumber) => (
          <PageItem
            key={pageNumber}
            pageNumber={pageNumber}
            isActive={currentPage === pageNumber}
            onClick={onPageChange}
          />
        ))}

        {currentGroup < totalGroups && (
          <button
            className="w-[60px] h-10 rounded-lg border border-gray-200 bg-white text-gray-700 text-[13px] font-medium flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-gray-50"
            onClick={() => onPageChange(endPage + 1)}
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
});
