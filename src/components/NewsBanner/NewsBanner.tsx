import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { Image } from "../image/Image";
import type { INews } from "../interfaces";
import styles from "./styles.module.css";

interface Props {
  item : INews;
}

export const NewsBanner = ({ item } : Props) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

