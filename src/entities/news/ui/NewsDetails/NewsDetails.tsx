import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import styles from "./styles.module.css";
import type { INews } from "../../model/types";
import { Image } from "@/shared/ui/Image/Image";

interface Props {
  item: INews;
}

export const NewsDetails = ({ item }: Props) => {
  return (
    <div className={styles.details}>
      <div className={styles.image}>
        <Image image={item.image} />
      </div>

      <div className={styles.description}>
        <p>
          {item.description} ({item.language}){" "}
          <a target="_blank" href={item.url}>Read more...</a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>

        <ul>
          {item.category.map((category) => (
            <button className={styles.active}>{category}</button>
          ))}
        </ul>
      </div>
    </div>
  );
};
