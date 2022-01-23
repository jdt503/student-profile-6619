import { ReactNode } from 'react';

import styles from './index.module.scss';

const Layout = ({
  children
}: {
  children: ReactNode;
}) => (
  <div className={styles.container}>
    <main className={styles.main}>
      {children}
    </main>
  </div>
)

export default Layout;
