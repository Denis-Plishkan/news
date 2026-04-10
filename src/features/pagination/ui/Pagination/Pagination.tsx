import type React from "react";

import { PaginationButtons } from "../PaginationButtons/PaginationButtons";
import type { IPaginationProps } from "../../model/types";


interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

export const Pagination = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
};
