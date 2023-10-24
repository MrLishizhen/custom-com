import styles from './index.module.less';
import { Outlet } from 'react-router-dom';
import globContext from '@/context/glob';
const glob = import.meta.glob('@/components/**/index.jsx');

const Layout = () => {
  return (
    <main className={styles.layout}>
      <globContext.Provider value={glob}>
        <Outlet />
      </globContext.Provider>
    </main>
  );
};

export default Layout;
