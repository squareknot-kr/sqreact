import { memo } from 'react';
import * as styles from './Pagination.css';

interface PageItemProps {
  pageNumber: number;
  isActive: boolean;
  onClick: (page: number) => void;
}

const PageItem = memo(function PageItem({ pageNumber, isActive, onClick }: PageItemProps) {
  return (
    <button
      className={styles.pageButton[isActive ? 'active' : 'inactive']}
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
    <div className={styles.container}>
      <div className={styles.pagesContainer}>
        {currentGroup > 1 && (
          <button
            className={styles.navButton}
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
            className={styles.navButton}
            onClick={() => onPageChange(endPage + 1)}
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
});

