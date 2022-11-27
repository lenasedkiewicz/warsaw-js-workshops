import * as React from 'react';
import { Divider } from 'semantic-ui-react';

import Filters from './Filters';
import MealList from './MealList';
import ChartToggler from './ChartToggler';
import RatingChart from './RatingChart';

import { FILTER_OPTIONS } from '../commons/const';
import axios from 'axios';

const SelectMeal = (props) => {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true);
  const [chartVisible, chartToggler] = useToggle();

  React.useEffect(() => {
    axios('/data.json').then(({data})=>{
      setData(data)
      setIsLoading(false)
    })
  }, [])

  return (
    <React.Fragment>
      <ChartToggler isVisible={chartVisible} onChange={chartToggler}/>
      <Divider hidden />
      {chartVisible && <RatingChart data={data} />}
      <Divider />
      <Filters options={FILTER_OPTIONS} />
      <Divider />
      {isLoading ? 'Loading..' : <MealList meals={data}/> }
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