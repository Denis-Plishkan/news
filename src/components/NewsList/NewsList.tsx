import { withSkeleton } from "../../helpers/hocs/withSkeleton";
import type { INews } from "../interfaces";
import { NewsItem } from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

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
