import * as React from 'react';
import { Divider } from 'semantic-ui-react';

import Filters from './Filters';
import MealList from './MealList';
import ChartToggler from './ChartToggler';
import RatingChart from './RatingChart';

import { FILTER_OPTIONS } from '../commons/const';
import * as utils from '../commons/utils';

const SelectMeal = (props) => {
  const data = [];
  const chartData = utils.prepareChartData(data);
  const [chartVisible, chartToggler] = useToggle();


  return (
    <React.Fragment>
      <ChartToggler isVisible={chartVisible} onChange={chartToggler}/>
      <Divider hidden />
      {chartVisible && <RatingChart data={chartData} />}
      <Divider />
      <Filters options={FILTER_OPTIONS} />
      <Divider />
      <MealList />
      <Divider hidden></Divider>
    </React.Fragment>
  );
};

export default SelectMeal;

const useToggle = () => {
  const [value, setValue] = React.useState(true);
  const toggleValue = () => {
    setValue(!value)
  };
  return [value, toggleValue]
}