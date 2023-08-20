import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form'
import CityCard from './components/City/CityCard'
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
function App() {
  const showCity=useSelector(state=>state.showCity)
  return (
    <Fragment>
      {!showCity?<Form />:<CityCard/>}
    </Fragment>
  )
}

export default App;
