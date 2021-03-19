import React,  {useState} from 'react'
import './App.css'
import { Chart } from "react-google-charts"



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
    <div className="App">
      {rows()}
      <div style={{ display: 'flex'}}>
        <Chart
          width={1300}
          height={300}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
data={chartHumData}
          options={{
            title: 'Ilmankosteus',
            hAxis: {
              minValue: 0,
            },
          }}
          legendToggle
        />
        </div>
        <div style={{ display: 'flex', maxWidth: 900 }}>
        <Chart
          width={400}
          height={300}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartTempData}
          options={{
            title: 'Lämpötila',
            hAxis: { title: '', titleTextStyle: { color: '#555' } },
            vAxis: { minValue: 0 },
            // For the legend to fit, we make the chart area smaller
            // lineWidth: 25
          }}
        />
      </div>

    </div>
  );
}

export default App;
