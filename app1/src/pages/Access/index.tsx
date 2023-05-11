import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '.pnpm/umi@4.0.68_@babel+core@7.21.8_@types+react@18.2.6_eslint@8.35.0_postcss@8.4.23_prettier@2.8.8_y4jcrix23tg7xz7d2tyy6jucgu/node_modules/umi';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>只有 Admin 可以看到这个按钮</Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
