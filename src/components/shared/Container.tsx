import type { ReactNode } from 'react';
import styles from './Container.module.css';

interface IProps {
  children: ReactNode;
}

export default function Container({ children }: IProps) {
  return <div className={styles.container}>{children}</div>;
}
