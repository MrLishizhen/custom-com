/* eslint-disable @typescript-eslint/no-unsafe-return */
import Layout from '@/layout';
import List from '@/views/list';
import { Navigate } from 'react-router-dom';
const router = [
  { path: '/', element: <Navigate to={'/list'} /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'list',
        element: <List />,
      },
    ],
  },
];

const glob = import.meta.glob('@/components/**/index.jsx');
// const promises: any[] = [];
// // type getGlob = () => Promise<void>;
// const getGlobDefault = () => {
//   for (const key in glob) {
//     const glob_item = glob[key]()
//       .then((res: any) => {
//         // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//         return res.default.name;
//       })
//       .catch((err) => console.log(err));
//     promises.push(glob_item);
//   }
// };
// getGlobDefault();
// Promise.all(promises)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const getGlobDefault = async () => {
//   const keys = Object.keys(glob);
//   console.log(keys);
//   return await Promise.all(
//     keys.map(async (key) => {
//       console.log(key);
//       const res = await glob[key]();
//       console.log(res, 1);
//       return res.default.name;
//     }),
//   );
// };

// getGlobDefault()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

export default router;
