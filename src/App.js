import React from 'react';
import './App.css';
import { Chart } from "react-google-charts";



function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex'}}>
        <Chart
          width={1300}
          height={300}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}

    data={[
      ['Aika', '%'],
      ['1.3.2021', 45],
      ['2.3.2021', 47],
      ['3.3.2021', 52],
      ['4.3.2021', 47],
      ['5.3.2021', 51],
      ['6.3.2021', 45],
      ['7.3.2021', 49],
      ['8.3.2021', 44],
      ['9.3.2021', 47],
      ['10.3.2021', 55],
    ]}
  
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
          data={[
            ['Aika', 'Asteet'],
            ['1.3', 45],
            ['2.3', 51],
            ['3.3', 39],
            ['4.3', 46],
            ['5.3', 45],
            ['6.3', 54],
            ['7.3', 42],
            ['8.3', 46],
            ['9.3', 54],
            ['10.3', 48],
          ]}
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
