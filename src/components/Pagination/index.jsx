import React from "react";
import "./style.css";

// Panigation
import { Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  changeLimit,
  changePage,
  handlePrev,
  handleNext,
} from "./../../redux/actions/actionsPagination";

const CustomizePagination = (props) => {
  const { totalItem, currentPage, currentLimit, isScrollToTop = false } = props;
  const dispatch = useDispatch();

  const numberLimit = [8, 12, 20, 50];

  const onChangePage = (page) => {
    if (isScrollToTop) {
      window.scrollTo(0, 0);
    }
    dispatch(changePage(page));
  };

  const handleChangeLimit = (e) => {
    if (isScrollToTop) {
      window.scrollTo(0, 0);
    }
    dispatch(changeLimit(e.target.value));
  };

  //pagination
  let items = [];
  const totalPage = Math.ceil(totalItem / currentLimit);
  for (let number = 1; number <= totalPage; number++) {
    if (currentPage >= 5 && totalPage > 5) {
      const start = currentPage - 4;
      const end = start + 5;
      if (number > start && number <= end && items.length < 5) {
        items.push(
          <Pagination.Item
            onClick={() => onChangePage(number)}
            key={number}
            active={number === currentPage}
          >
            {number}
          </Pagination.Item>
        );
      }
    } else {
      if (items.length < 5) {
        items.push(
          <Pagination.Item
            onClick={() => onChangePage(number)}
            key={number}
            active={number === currentPage}
          >
            {number}
          </Pagination.Item>
        );
      }
    }
  }

  // handle prev and next
  const handlePreview = () => {
    if (currentPage > 1) {
      if (isScrollToTop) {
        window.scrollTo(0, 0);
      }
      dispatch(handlePrev());
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      if (isScrollToTop) {
        window.scrollTo(0, 0);
      }
      dispatch(handleNext());
    }
  };
  return (
    <>
      <Pagination className="d-flex justify-content-center flex-wrap pb-4">
        {currentPage > 1 && <Pagination.Prev onClick={handlePreview} />}
        {items}
        {currentPage < totalPage && (
          <Pagination.Next onClick={handleNextPage} />
        )}
        <select className="limit-pagination mx-4" onChange={handleChangeLimit}>
          {numberLimit.map((numberLimit, index) => (
            <option value={numberLimit} key={index}>
              {numberLimit} Sản Phẩm / Trang
            </option>
          ))}
        </select>
      </Pagination>
    </>
  );
};

export default CustomizePagination;
