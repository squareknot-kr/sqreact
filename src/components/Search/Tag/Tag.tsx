import * as styles from './Tag.css';

type TagProps = {
  label: string;
  value: string | number;
  onRemove: () => void;
};

export const Tag = ({ label, value, onRemove }: TagProps) => {
  return (
    <div className={styles.tag} onClick={onRemove}>
      <span className={styles.tagText}>{label}: {value}</span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className={styles.removeButton}
        aria-label="제거"
      >
        <svg
          className={styles.removeIcon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

