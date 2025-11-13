import * as styles from './SectionCard.css.ts';

interface SectionCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  flex?: boolean;
}

export function SectionCard({ children, title, description, flex }: SectionCardProps) {
  return (
    <div className={`${styles.sectionCard}`}>
      <h2 className={styles.sectionCardTitle}>{title}</h2>
      <p className={styles.sectionCardDescription}>{description}</p>
      <div className={flex ? styles.flex : ''}>
        {children}
      </div>
    </div>
  );
}