import { memo } from 'react';
import * as styles from './Pagination.css';

interface PageItemProps {
  pageNumber: number;
  isActive: boolean;
  onClick: (page: number) => void;
  backgroundColor?: string;
  color?: string;
}

const PageItem = memo(function PageItem({ pageNumber, isActive, onClick, backgroundColor, color }: PageItemProps) {
  const buttonStyle: React.CSSProperties = {};
  if (backgroundColor) {
    buttonStyle.backgroundColor = backgroundColor;
  }
  if (color) {
    buttonStyle.color = color;
  }

  return (
    <button
      className={styles.pageButton({ isActive })}
      onClick={() => onClick(pageNumber)}
      style={Object.keys(buttonStyle).length > 0 ? buttonStyle : undefined}
    >
      {pageNumber}
    </button>
  );
});

interface PageListProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
  color?: string;
}

export const PageList = memo(function PageList({ totalPages, currentPage, onPageChange, className, style, backgroundColor, color }: PageListProps) {
  const totalGroups = Math.ceil(totalPages / 10);
  const currentGroup = Math.ceil(currentPage / 10);
  
  const startPage = (currentGroup - 1) * 10 + 1;
  const endPage = Math.min(currentGroup * 10, totalPages);
  
  const visiblePages = Array.from(
    { length: endPage - startPage + 1 }, 
    (_, index) => startPage + index
  );

  return (
    <div className={`${className || ''} ${styles.container}`} style={style}>
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
            backgroundColor={backgroundColor}
            color={color}
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

