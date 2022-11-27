import * as React from "react";
import { Divider } from "semantic-ui-react";

import Filters from "./Filters";
import MealList from "./MealList";
import ChartToggler from "./ChartToggler";

import { FILTER_OPTIONS } from "../commons/const";
import axios from "axios";
import { useQuery } from "react-query";
import * as utils from "../commons/utils";
import { lazy } from "react";

const SelectMeal = (props) => {
  const [chartVisible, chartToggler] = useToggle();
  const {
    isLoading,
    error,
    data = [],
  } = useQuery("dataMeals", () => {
    return axios("/api/meals").then(({ data }) => data);
  });
  const [filters, setFilters] = React.useState({});
  const onFiltersChange = (filterId, isSelected) => {
    setFilters((state) => {
      return {
        ...state,
        [filterId]: isSelected,
      };
    });
  };
  const count = utils.countMealsByBedType(data);
  // const filteredData = utils.applyFilter(filters, data);

  const filteredData = React.useMemo(() => {
    return utils.applyFilter(filters, data);
  }, [data, filters]);

  const RatingChart = lazy(() => import("./RatingChart"));

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <React.Fragment>
      <ChartToggler isVisible={chartVisible} onChange={chartToggler} />
      <Divider hidden />
      <React.Suspense fallback={<span>Ładowanie</span>}>{chartVisible && <RatingChart data={data} />}</React.Suspense>
      <Divider />
      <Filters
        options={FILTER_OPTIONS}
        onChange={onFiltersChange}
        count={count}
      />
      <Divider />
      {isLoading ? "Loading.." : <MealList meals={filteredData} />}
      <Divider hidden></Divider>
    </React.Fragment>
  );
};

export default SelectMeal;

const useToggle = () => {
  const [value, setValue] = React.useState(false);
  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
};
