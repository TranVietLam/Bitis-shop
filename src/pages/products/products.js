import React, { useState } from "react";
import "./products.css";
import Breadcrumb from "./../../components/BreadcrumbTitle/index";
import ProductsCard from "../../components/ProductsComponents/ProductsCard";
import SkeletonList from "../../components/ProductsComponents/SkelektonList/SkeletonList";
import { useSelector } from "react-redux";
import CustomizePagination from "./../../components/Pagination/index";

const Products = () => {
  const { data, pagination } = useSelector((state) => {
    return {
      data: state.productsList.products,
      pagination: state.dataPagination,
    };
  });
  // Limit Pagination

  //pagination
  const dataProducts = [];
  data.forEach((item, index) => {
    if (
      index >= (pagination.page - 1) * pagination.limit &&
      index < pagination.page * pagination.limit
    ) {
      dataProducts.push(item);
    }
    // page 1 : 0 - 11,
    // page 2 : 12 - 23,
    // page 3 : 24 - 35,
    // page 4 : 36 - 47,
  });

  // skeleton loading
  const [loading, setLoading] = useState(false);
  if (loading === true) {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <>
      <Breadcrumb page="sản phẩm" />
      <div className="product-page container">
        <div className="col-left">
          <div className="product-filter-container">
            <div className="product-filter-item">
              <p className="product-filter-title">HÃNG SẢN XUẤT</p>
              <div className="product-filter-list">
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">BITIS</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">BITAS</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">THÁI</span>
                </a>
              </div>
            </div>
            <div className="filter-item">
              <p className="product-filter-title">KHOẢNG GIÁ</p>
              <div className="product-filter-list">
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">Dưới 500 ngàn</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">500 ngàn - 1.000.000</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">Trên 1.000.000</span>
                </a>
              </div>
            </div>
            <div className="filter-item">
              <p className="product-filter-title">LOẠI GIÀY</p>
              <div className="product-filter-list">
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">GIÀY NAM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">GIÀY NỮ</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">GIÀY TRẺ EM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">GIÀY TÂY</span>
                </a>
              </div>
            </div>
            <div className="filter-item">
              <p className="product-filter-title">LOẠI SANDALS</p>
              <div className="product-filter-list">
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">SANDALS - NAM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">SANDALS - NỮ</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">SANDALS - TRẺ EM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">SANDALS - TRẮNG HỌC SINH</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">SANDALS - HUNTER</span>
                </a>
              </div>
            </div>
            <div className="filter-item">
              <p className="product-filter-title">LOẠI DÉP</p>
              <div className="product-filter-list">
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">DÉP NAM - QUAI NGANG</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">DÉP NAM - QUAI KẸP</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">DÉP NỮ - QUAI NGANG</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">DÉP NỮ - QUAI KẸP</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">DÉP TRẺ EM - QUAI NGANG</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">DÉP TRẺ EM - QUAI KẸP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-right">
          <div className="product-holder-group">
            <div className="sort-by-group">
              <div className="sort-by-list">
                <a href="/">Hàng mới</a>
                <a href="/">Giá tăng dần</a>
                <a href="/">Giá giảm dần</a>
                <a href="/">Xem nhiều</a>
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <select className="sort-select-item">
                  <option value={0}>Lọc sản phẩm</option>
                  <option value={1}>Còn hàng</option>
                  <option value={3}>Trao đổi</option>
                  <option value={4}>Đánh giá</option>
                  <option value={5}>Tên A-Z</option>
                </select>
              </div>
            </div>
            <div className="product-container">
              {loading ? (
                <SkeletonList length={12} />
              ) : (
                <>
                  {dataProducts.map((item, index) => (
                    <div key={index} className="product-item">
                      <ProductsCard data={item} />
                    </div>
                  ))}
                </>
              )}
            </div>
            {/* Products Pagination */}
            <CustomizePagination
              currentLimit={pagination.limit}
              totalItem={data.length}
              currentPage={pagination.page}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
