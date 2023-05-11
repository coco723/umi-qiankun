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
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '菜单一',
      path: '/home',
      component: './Home',
    },
    {
      name: '菜单二',
      path: '/access',
      component: './Access',
    },
    {
      name: '菜单三',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
  qiankun: {
    slave: {}
  }
});
