import { useState, ReactNode } from 'react';
import styles from './index.module.scss';

export default function Dropdown({
  header,
  footer,
  title,
  children,
  className
}: {
  header: ReactNode;
  footer: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}){
  const [isOpen,setIsOpen] = useState(false);
  return(
    <div className={className ? `${styles.container} ${className}` : styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>{title}</div>
        <button className={styles.button} type="button" onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}>
          {isOpen ? <span>&#8722;</span> : <>&#43;</>}
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          {header}
        </div>
        {isOpen && (
          <div className={styles.dropdown}>
            {children}
          </div>
        )}
        <div className={styles.footer}>
          {footer}
        </div>
      </div>
    </div>
  )
}
