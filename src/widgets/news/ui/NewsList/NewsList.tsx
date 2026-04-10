import { withSkeleton } from "@/shared/hocs/withSkeleton";
import { NewsItem } from "@/entities/news/ui/NewsItem/NewsItem";
import styles from "./styles.module.css";
import type { INews } from "@/entities/news";

interface Props {
  news?: INews[];
}

export const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map(item => (
        <NewsItem key={item.id} item={item}/>
      ))}
    </ul>
  );
};

export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);
