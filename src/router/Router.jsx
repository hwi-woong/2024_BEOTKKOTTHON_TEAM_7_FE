import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import FindStudy from '../pages/FindStudy';
import FindMentoti from '../pages/FindMentoti';
import StudyLists from '../pages/StudyLists';
import LoginPage from '../pages/LoginPage';
import MyPageLayout from '../components/Layout/MyPageLayout';
import MyPage from '../pages/MyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/find-study',
        element: <FindStudy />,
      },
      {
        path: '/find-mentoti',
        element: <FindMentoti />,
      },
      {
        path: '/study-lists',
        element: <StudyLists />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/mypage',
    element: <MyPageLayout />,
    children: [
      {
        path: '',
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
