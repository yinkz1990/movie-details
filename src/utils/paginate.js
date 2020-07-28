import _ from "lodash";

const Paginate = (items, pageNumber, pageSize) => {
  const startItem = (pageNumber - 1) * pageSize;
  return _(items).slice(startItem).take(pageSize).value();
};

export default Paginate;
