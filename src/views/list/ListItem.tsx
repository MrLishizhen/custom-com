import { lazy, Suspense } from 'react';
import styles from './index.module.less';
import { globType } from '@/script/index';
type ListItemProps = {
  name: string;
  id: string;
  component: globType;
  itemKey: string;
};

const ListItem = (props: ListItemProps) => {
  const { component, name } = props;
  console.log(component);
  const Item = lazy(component);
  console.log(Item);
  return (
    <Suspense fallback={'加载中。。。'}>
      <div className={styles.list_item}>
        {Item ? <Item /> : ''}

        <div className={styles.hove_name}>{name}</div>
      </div>
    </Suspense>
  );
};

export default ListItem;
