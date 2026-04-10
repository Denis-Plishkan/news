import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { Image } from "@/shared/ui/Image/Image";
import styles from "./styles.module.css";
import type { INews } from "../../model/types";

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

