import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const OtherPages = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Pagination className="pages ">
      <PaginationItem>
        <PaginationLink className="pages-item" first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="pages-item" href="#" previous />
      </PaginationItem>
      {pages.map((page) => (
        <PaginationItem>
          <PaginationLink className="pages-item" href="#">
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink className="pages-item" href="#" next />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="pages-item" href="#" last />
      </PaginationItem>
    </Pagination>
  );
};
export default OtherPages;
