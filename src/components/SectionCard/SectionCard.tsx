import * as styles from './SectionCard.css.ts';

interface SectionCardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  flexRow?: boolean;
  flexColumn?: boolean;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  style?: React.CSSProperties;
  className?: string;
}

export function SectionCard({ children, title, description, flexRow, flexColumn, alignItems, justifyContent, style, className }: SectionCardProps) {
  const containerStyle: React.CSSProperties = {};
  if (alignItems) containerStyle.alignItems = alignItems;
  if (justifyContent) containerStyle.justifyContent = justifyContent;
  
  return (
    <div className={`${styles.sectionCard} ${className}`} style={style}>
      {title && <h2 className={styles.sectionCardTitle}>{title}</h2>}
      {description && <p className={styles.sectionCardDescription}>{description}</p>}
      <div 
        className={flexRow ? styles.flexRow : flexColumn ? styles.flexColumn : ''}
        style={Object.keys(containerStyle).length > 0 ? containerStyle : undefined}
      >
        {children}
      </div>
    </div>
  );
}