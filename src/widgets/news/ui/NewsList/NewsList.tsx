import { withSkeleton } from "@/shared/hocs/withSkeleton";
import styles from "./styles.module.css";
import type { INews } from "@/entities/news";
import { NewsCard } from "@/entities/news/ui/NewsCard/NewsCard";
import type { ReactNode } from "react";

interface Props {
  news?: INews[];
  type?: "banner" | "item";
  direction?: "row" | "column";
  viewNewsSlot?: (news: INews) => ReactNode;
}

export const NewsList = ({ news, type = "item", viewNewsSlot }: Props) => {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => (
        <NewsCard
          key={item.id}
          viewNewsSlot={viewNewsSlot}
          item={item}
          type={type}
        />
      ))}
    </ul>
  );
};

export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);
