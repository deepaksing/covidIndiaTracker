import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './Global';
import './App.css';
import Header from './Header';
import Level from './Level';
import Table from './Table';


const App = () => {

  const [states, setStates] = useState([]);
  const [stateDistrictWiseData, setStateDistrictWiseData] = useState({});


  useEffect(() => {
    getStates();
  }, [])

  const getStates = async() => {

      const [
        {data},
        {data: stateDistrictWiseResponse},
        ] = await Promise.all([
        axios.get('https://api.covid19india.org/data.json'),
        axios.get('https://api.covid19india.org/state_district_wise.json'),
        axios.get('https://api.covid19india.org/state_test_data.json'),
      ]);

      setStates(data.statewise);
      setStateDistrictWiseData(stateDistrictWiseResponse);
  }
  console.log(states);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => { theme === 'light' ? setTheme('dark') : setTheme('light')}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      
      <div className = "main">
      <div className="button">
        <div className="toggle-wrapper">
          <input id="provide-muffins" className="toggle" name="dark mode" type="checkbox" onClick={toggleTheme}/>
          <label for="provide-muffins" class="toggle--label"></label>
        <div className="foux-toggle"></div>
        </div>
      </div>
      <div className="head">
        <Header/>
      </div>
      <div className="body">
        Total Cases
        <div className="data">
          {states && <Level data = {states[0]}/>}
        </div>
      
          {states && <Table data = {states}/>}
        
      </div>
    </div>

  
    </ThemeProvider>
  )
}


export default App;



