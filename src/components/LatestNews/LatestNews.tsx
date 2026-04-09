import { useGetLatestNewsQuery } from '../../store/services/newsApi';
import { BannerListWithSkeleton } from '../BannersList/BannersList';
import styles from './styles.module.css'

export const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannerListWithSkeleton banners={data && data.news} isLoading={isLoading}/>
    </section>
  );
};
