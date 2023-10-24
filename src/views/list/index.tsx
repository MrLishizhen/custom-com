import styles from './index.module.less';
import { useMemo, useContext, useState } from 'react';
import globContext from '@/context/glob';
import ListItem from './ListItem';
import { useComDefult } from '@/hooks';

const List = () => {
  const glob = useContext(globContext);
  const [name, setName] = useState<string>('');
  const [list] = useComDefult(glob);
  const search = useMemo(() => {
    return list?.filter((u) => {
      return u.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
    });
  }, [name, list]);
  console.log(search);
  return (
    <div className={styles.list}>
      <div className={styles.search}>
        <input
          type='text'
          placeholder='按照组件名搜索'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.list_content}>
        {search?.map((u) => {
          return <ListItem key={u.id} {...u} />;
        })}
      </div>
    </div>
  );
};
export default List;
