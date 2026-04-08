import { getLatestNews } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import { BannerListWithSkeleton } from '../BannersList/BannersList';
import type { NewsApiResponse } from '../interfaces';
import styles from './styles.module.css'

export const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannerListWithSkeleton banners={data && data.news} isLoading={isLoading}/>
    </section>
  );
};
