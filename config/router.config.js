export default [
    // app
    {
      path: '/',
      component: '../layouts/BasicLayout',
      Routes: ['src/pages/Authorized'],
      authority: ['admin', 'user'],
      routes: [
        // dashboard
        { path: '/', redirect: '/dashboard' },
        {
          path: '/dashboard',
          name: 'dashboard',
          icon: 'dashboard',
          routes: [
            {
              path: '/dashboard',
              name: 'analysis',
              component: './Dashboard/Analysis',
            },
            {
              path: '/dashboard2',
              name: 'analysis2',
              component: './Dashboard/Analysis',
            }
          ],
        },
        {
            path: '/dashboard2',
            name: 'stats',
            icon: 'dashboard',
            routes: [
              {
                path: '/stats',
                name: 'analysis',
                component: './Dashboard/Analysis',
              },
              {
                path: '/stats2',
                name: 'analysis2',
                component: './Dashboard/Analysis',
              }
            ],
          },
        {
          component: '404',
        },
      ],
    },
  ];
  