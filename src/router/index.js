import { createHashRouter } from 'react-router-dom';

import { HomePage } from 'pages/HomePage';
import { FollowersPage } from 'pages/FollowersPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/followers',
    element: <FollowersPage/>
  },
]);
