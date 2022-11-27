import * as React from "react";
import { Divider, Loader } from "semantic-ui-react";

import Filters from "./Filters";
import MealList from "./MealList";
import ChartToggler from "./ChartToggler";

import { FILTER_OPTIONS } from "../commons/const";
import axios from "axios";
import { useQuery } from "react-query";
import * as utils from "../commons/utils";
// import { lazy } from "react";

const SelectMeal = (props) => {
  const [chartVisible, chartToggler] = useToggle();
  const {
    isLoading,
    error,
    data = [],
  } = useQuery("dataMeals", () => {
    return axios("/api/meals").then(({ data }) => {
      RatingChart.preload();
      return data;
    });
  });
  const [filters, setFilters] = React.useState({});

  const [isPending, setTransition] = React.useTransition();

  const onFiltersChange = (filterId, isSelected) => {
    setTransition(() => setFilters((state) => {
      return {
        ...state,
        [filterId]: isSelected,
      };
    }));
  };
  const count = utils.countMealsByBedType(data);
  // const filteredData = utils.applyFilter(filters, data);

  const filteredData = React.useMemo(() => {
    return utils.applyFilter(filters, data);
  }, [data, filters]);

  const RatingChart = lazyWithPreload(() => import("./RatingChart"));

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <React.Fragment>
      <ChartToggler isVisible={chartVisible} onChange={chartToggler} />
      <Divider hidden />
      <React.Suspense fallback={<span>Ładowanie</span>}>
        {chartVisible && <RatingChart data={filteredData} />}
      </React.Suspense>
      <Divider />
      <Filters
        options={FILTER_OPTIONS}
        onChange={onFiltersChange}
        count={count}
      />
      {isPending && <Loader active size="mini" inline />}
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

function lazyWithPreload(factory) {
  const Component = React.lazy(factory);
  Component.preload = factory;
  return Component;
}
