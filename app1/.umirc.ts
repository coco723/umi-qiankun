import { defineConfig } from '.pnpm/umi@4.0.68_@babel+core@7.21.8_@types+react@18.2.6_eslint@8.35.0_postcss@8.4.23_prettier@2.8.8_y4jcrix23tg7xz7d2tyy6jucgu/node_modules/umi';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
  qiankun: {
    slave: {},
  },
});

