import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { itemCount, pageSize, onPageChange, currentPage } = this.props;
    const page = Math.ceil(itemCount / pageSize);
    const pageNumbers = _.range(1, page + 1);
    if (pageNumbers.length === 1) {
      return !pageNumbers;
    }
    return (
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Pagination;
