import * as styles from './SectionCard.css.ts';

interface SectionCardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  flexRow?: boolean;
  flexColumn?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export function SectionCard({ children, title, description, flexRow, flexColumn, style, className }: SectionCardProps) {
  return (
    <div className={`${styles.sectionCard} ${className}`} style={style}>
      {title && <h2 className={styles.sectionCardTitle}>{title}</h2>}
      {description && <p className={styles.sectionCardDescription}>{description}</p>}
      <div className={flexRow ? styles.flexRow : flexColumn ? styles.flexColumn : ''}>
        {children}
      </div>
    </div>
  );
}