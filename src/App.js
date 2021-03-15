import React from 'react';
import './App.css';
import { Chart } from "react-google-charts";



function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', maxWidth: 1250 }}>
        <Chart
          width={1400}
          height={300}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
    data={[
      ['%', '', ''],
      ['', 25, 25.2],
      ['', 25.5, 26],
      ['', 26.2 , 26.5],
      ['', 27, 27.2],
      ['', 27.5, 28],
    ]}
  
          options={{
            title: 'Ilmankosteus',
            chartArea: { width: '30%' },
            hAxis: {
              title: '',
              minValue: 0,
            },
            vAxis: {
              title: '',
            },
          }}
          legendToggle
        />
        </div>
        <div style={{ display: 'flex', maxWidth: 900 }}>
        <Chart
          width={400}
          height={'300px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['', 'C', ''],
            ['', 24.5, 25.8],
            ['', 24.8, 26],
            ['', 25, 26.6],
            ['', 25.5, 27],
          ]}
          options={{
            title: 'Lämpötila',
            hAxis: { title: '', titleTextStyle: { color: '#555' } },
            vAxis: { minValue: 0 },
            // For the legend to fit, we make the chart area smaller
            chartArea: { width: '50%', height: '70%' },
            // lineWidth: 25
          }}
        />
      </div>

    </div>
  );
}

export default App;
