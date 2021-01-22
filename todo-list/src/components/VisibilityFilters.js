import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = () => {
  const activeFilter = useSelector(state => state.visibilityFilter);
  const dispatch = useDispatch();

  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx("filter", currentFilter === activeFilter && "filter-active")}
            onClick={() => {dispatch(setFilter(currentFilter))}}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

export default VisibilityFilters;