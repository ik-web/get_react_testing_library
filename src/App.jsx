import { RouterProvider } from 'react-router-dom';

import { router } from 'router';
import { Banner, PageContainer } from 'components';

export const App = () => {
  return (
    <div className="app">
      <Banner />
      <PageContainer>
        <RouterProvider router={router} />
      </PageContainer>
    </div>
  );
};
