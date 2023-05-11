import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  // routes: [
  //   {
  //     path: '/',
  //     redirect: '/home',
  //   },
  //   {
  //     name: '首页',
  //     path: '/home',
  //     component: './Home',
  //   },
  //   {
  //     name: '权限演示',
  //     path: '/access',
  //     component: './Access',
  //   },
  //   {
  //     name: ' CRUD 示例',
  //     path: '/table',
  //     component: './Table',
  //   },
  // ],
  npmClient: 'pnpm',
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1',
          entry: 'http://localhost:8001',
        },
        {
          name: 'app2',
          entry: 'http://localhost:8002',
        },
      ],
      // 配置微应用关联的路由
      routes: [
        {
          path: '/app1',
          microApp: 'app1',
        },
        {
          path: '/app2',
          microApp: 'app2',
        },
      ],
    },
  },
});

