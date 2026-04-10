import { TOTAL_PAGES } from "@/shared/constants/constants";
import { NewsListWithSkeleton } from "@/widgets/news/ui/NewsList/NewsList";
import { Pagination } from "@/features/pagination";
import type { IFilters } from "@/shared/interfaces";
import type { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

export const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePaginationNews(filters);

  return (
    <Pagination
      top
      bottom
      handleNextPage={handleNextPage}
      handlePageClick={handlePageClick}
      handlePreviousPage={handlePreviousPage}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
    >
      <NewsListWithSkeleton
        direction="column"
        type="item"
        isLoading={isLoading}
        news={news}
      />
    </Pagination>
  );
};
