import React from "react";
import "./style.css";

// Panigation
import { Pagination } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { changeLimit, changePage } from './../../redux/actions/actionsPagination';

const CustomizePagination = (props) => {
  const {
    totalItem,
    currentPage,
    currentLimit,
  } = props;
  const dispatch = useDispatch();

  const numberLimit = [8, 12, 20, 50];

  const onChangePage = (page) => {
    dispatch(changePage(page))
  }

  const handleChangeLimit = (e) => {
    dispatch(changeLimit(e.target.value))
  }

  //pagination
  let items = [];
  for (
    let number = 1;
    number <= Math.ceil(totalItem / currentLimit);
    number++
  ) {
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

  return (
    <>
      <Pagination className="d-flex justify-content-center pb-4">
        {items}
        <select
          className="limit-pagination mx-4"
          onChange={handleChangeLimit}
        >
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
