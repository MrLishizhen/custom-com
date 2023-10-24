import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { globType } from '../script/index';
interface KeysData {
  name: string;
  id: string;
  component: globType;
  itemKey: string;
}
interface ResType {
  default: {
    name: string;
  };
}
export const useComDefult = (glob: Record<string, globType> | null) => {
  const [list, setList] = useState<KeysData[] | undefined>([]);

  useEffect(() => {
    const getGlobDefault = async () => {
      if (glob) {
        const keys = Object.keys(glob);

        return await Promise.all(
          keys.map(async (key) => {
            const res = (await glob[key]()) as ResType;

            return {
              name: res?.default?.name ?? '',
              id: uuidv4(),
              component: glob[key],
              itemKey: key,
            };
            //   console.log(res, 1);
            //   return res.default.name;
          }),
        );
      }
    };
    getGlobDefault()
      .then((res) => {
        if (res && res.length > 0) {
          setList(res);
        }
      })
      .catch((err) => console.log(err));
  }, [glob]);

  return [list];
};
