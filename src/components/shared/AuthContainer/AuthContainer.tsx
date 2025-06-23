import type { ReactNode } from 'react';
import styles from './AuthContainer.module.css';

interface IProps {
  children: ReactNode;
}

export default function AuthContainer({ children }: IProps) {
  return <div className={styles.auth_container}>{children}</div>;
}
