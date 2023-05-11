import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '.pnpm/umi@4.0.68_@babel+core@7.21.8_@types+react@18.2.6_eslint@8.35.0_postcss@8.4.23_prettier@2.8.8_y4jcrix23tg7xz7d2tyy6jucgu/node_modules/umi';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
