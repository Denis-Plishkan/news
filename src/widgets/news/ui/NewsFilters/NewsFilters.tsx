import { useAppDispatch } from "@/app/appStore";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Categories } from "@/features/category/ui/Categories/Categories";
import type { IFilters } from "@/shared/interfaces";
import { Search } from "@/features/search/ui/Search/Search";
import { Slider } from "@/features/slider/ui/Slider/Slider";
import { setFilters } from "@/entities/news/model/newsSlice";
import styles from "./styles.module.css";
import type { CategoriesType } from "@/entities/categoties";

interface Props {
  filters: IFilters;
  categories: CategoriesType[];
}

export const NewsFilters = ({ filters, categories }: Props) => {
  const { isDark } = useTheme();


  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {categories && (
        <Slider isDark={isDark}>
          <Categories
            categories={categories}
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
