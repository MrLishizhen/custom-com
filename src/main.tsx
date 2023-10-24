import ReactDOM from 'react-dom/client';
import './index.css';
import router from '@/router/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={createBrowserRouter(router)}></RouterProvider>,
  // </React.StrictMode>,
);
