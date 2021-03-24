import React,  {useState} from 'react'
import './App.css'
import { Chart } from "react-google-charts"
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Portfolio from './components/Portfolio';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {

  const initweather = [];

  const [weather, setWeather] = useState(initweather);


  function convertUTCDateToLocalDate(date) {
  //var dateLocal = new Date(date);
  new Date(date.getTime() + date.getTimezoneOffset()*60*1000);
  return date;
}

let chartHumData = [
  ['Aika', '%'],
  ['Please wait...', 0]
];

let chartTempData = [
  ['Aika', 'Asteet'],
  ['Please wait...', 0]

];

  fetch('https://oppilas-10.azurewebsites.net/api/HttpTriggerCSharp2?code=tYDuJTbUAGC3seAny8DOEduxbafwGmk5Gy2jdcKwPize8/X0JKgj1g==&deviceId=2f002a001947393035313138&amount=10')
    .then(response => response.json())
    .then(json => setWeather([...json]));

  let humtempkey = 1;

  const rows = () => weather.map(temphum => {

    if(chartHumData[1][0] === 'Please wait...'){
      chartHumData.pop();
    }
        if(chartTempData[1][0] === 'Please wait...'){
      chartTempData.pop();
      }

  chartHumData.push([String(convertUTCDateToLocalDate(new Date(temphum.Timestamp))).split(' ')[4], parseInt(temphum.Hum)])
  chartTempData.push([String(convertUTCDateToLocalDate(new Date(temphum.Timestamp))).split(' ')[4], parseInt(temphum.Temp)])

  return <div key={humtempkey++}>
  <b> Klo: </b> {String(convertUTCDateToLocalDate(new Date(temphum.Timestamp))).split(' ')[4]} &nbsp;
  <b> Ilmankosteus </b> {temphum.Hum} % &nbsp;
  <b> Lämpötila </b>  {temphum.Temp} °C
  </div>
  })

  return (
    <Router>
    <div className="App">
    <Header />
    <Switch>
    <Route path="/portfolio">
      <Portfolio />
    </Route>
    <Route>
      {rows()}
      <div style={{ display: 'flex'}}>
        <Chart
          width={'100%'}
          height={300}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
data={chartHumData}
          options={{
            title: 'Ilmankosteus',
            chartArea: { width: '50%'},
            hAxis: {
              minValue: 0,
            },
          }}
          legendToggle
        />
        </div>
        <div className="App">
        <Chart
          width={'100%'}
          height={300}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartTempData}
          options={{
            title: 'Lämpötila',
            chartArea: { width: '50%'},
            hAxis: { title: '', titleTextStyle: { color: '#555' } },
            vAxis: { minValue: 0 }
             }}
          />
      </div>
      </Route>
      </Switch>
    <Footer />
  </div>
  </Router>
  );
}
export default App;
