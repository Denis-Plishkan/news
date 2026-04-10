import { useAppDispatch } from "@/app/appStore";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Categories } from "@/features/category/ui/Categories/Categories";
import type { IFilters } from "@/shared/interfaces";
import { Search } from "@/features/search/ui/Search/Search";
import { Slider } from "@/features/slider/ui/Slider/Slider";
import { setFilters } from "@/entities/news/model/newsSlice";
import styles from "./styles.module.css";
import { useGetCategoriesQuery } from "@/entities/categoties/api/categoriesApi";

interface Props {
  filters: IFilters;
}

export const NewsFilters = ({ filters }: Props) => {
  const { isDark } = useTheme();
  const { data } = useGetCategoriesQuery(null);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {data && (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      )}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => dispatch(setFilters({ key: "keywords", value: keywords }))}
      />
    </div>
  );
};
