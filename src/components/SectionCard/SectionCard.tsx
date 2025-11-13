import * as styles from './SectionCard.css.ts';

interface SectionCardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  flex?: boolean;
  style?: React.CSSProperties;
}

export function SectionCard({ children, title, description, flex, style }: SectionCardProps) {
  return (
    <div className={`${styles.sectionCard}`} style={style}>
      {title && <h2 className={styles.sectionCardTitle}>{title}</h2>}
      {description && <p className={styles.sectionCardDescription}>{description}</p>}
      <div className={flex ? styles.flex : ''}>
        {children}
      </div>
    </div>
  );
}