import React, { useState, useEffect } from "react";
import "./products.css";
import Breadcrumb from "../../components/BreadcrumbTitle/index";
import ProductsCard from "../../components/ProductsComponents/ProductsCard";
import SkeletonList from "../../components/ProductsComponents/SkelektonList/SkeletonList";
import { useSelector, useDispatch } from "react-redux";
import CustomizePagination from "../../components/Pagination/index";
import {
  fetchCategory,
  loadDataCategory,
} from "../../redux/actions/actionsCategory";

const Products = () => {
  let { data, pagination, category } = useSelector((state) => {
    return {
      data: state.productsList.products,
      pagination: state.dataPagination,
      category: state.categoryCode.category,
    };
  });


  // products filter
  const [productsFilter, setProductsFilter] = useState({});
  const handleFilter = (item) => {
    if (productsFilter.code !== item.code) {
      setProductsFilter(item)
    }
  }


  if (productsFilter.code) {
    data = data.filter((currentValue, index) => {
      return currentValue.categoryCode === productsFilter.code
    })
  }

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
  const [loading, setLoading] = useState(true);
  if (loading === true) {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  // filter data
  const dispatch = useDispatch();
  useEffect(() => {
    // api
    fetch("https://5e1fc92ee31c6e0014c6000e.mockapi.io/api/category")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          dispatch(fetchCategory(data));
        }
      });
    dispatch(loadDataCategory());
  }, []);

  return (
    <>
      <Breadcrumb page="sản phẩm" />
      <div className="product-page container">
        <div className="col-left">
          <div className="product-filter-container">
            <div className="product-filter-item">
              <p className="product-filter-title">HÃNG SẢN XUẤT</p>
              <div className="product-filter-list">
                {category.map((item, index) => (
                  <div key={index} className="product-filter-input">
                    <input type="checkbox" checked={productsFilter.code === item.code} onChange={() => handleFilter(item)}/>
                    <span className="filter-title">{item.name}</span>
                  </div>
                ))}
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">BITAS</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">THÁI</span>
                </button>
              </div>
            </div>
            <div className="filter-item">
              <p className="product-filter-title">KHOẢNG GIÁ</p>
              <div className="product-filter-list">
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">Dưới 500 ngàn</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">500 ngàn - 1.000.000</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">Trên 1.000.000</span>
                </button>
              </div>
            </div>
            <div className="filter-item">
              <p className="product-filter-title">LOẠI GIÀY</p>
              <div className="product-filter-list">
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">GIÀY NAM</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">GIÀY NỮ</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">GIÀY TRẺ EM</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">GIÀY TÂY</span>
                </button>
              </div>
            </div>
            <div className="filter-item">
              <p className="product-filter-title">LOẠI SANDALS</p>
              <div className="product-filter-list">
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">SANDALS - NAM</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">SANDALS - NỮ</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">SANDALS - TRẺ EM</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">SANDALS - TRẮNG HỌC SINH</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">SANDALS - HUNTER</span>
                </button>
              </div>
            </div>
            <div className="filter-item">
              <p className="product-filter-title">LOẠI DÉP</p>
              <div className="product-filter-list">
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">DÉP NAM - QUAI NGANG</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">DÉP NAM - QUAI KẸP</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">DÉP NỮ - QUAI NGANG</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">DÉP NỮ - QUAI KẸP</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">DÉP TRẺ EM - QUAI NGANG</span>
                </button>
                <button>
                  <i className="icon-square"></i>
                  <span className="filter-title">DÉP TRẺ EM - QUAI KẸP</span>
                </button>
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
              isScrollToTop={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
