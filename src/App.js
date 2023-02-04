import './App.css';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

function App() {
  const misalnyaDataApi = [
    {
      "date": "2022-01-01",
      "orderCount": 1
    },
    {
      "date": "2022-01-02",
      "orderCount": 3
    },
    {
      "date": "2022-01-03",
      "orderCount": 2
    },
    {
      "date": "2022-01-04",
      "orderCount": 7
    },
    {
      "date": "2022-01-05",
      "orderCount": 5
    },
  ]

  // data seharusnya dari backend, ini sementara
  const labels = misalnyaDataApi.map(data => data.date)

  const dataOrder = misalnyaDataApi.map(data => data.orderCount)


  const data = {
    labels: labels,
    datasets: [{
      label: 'Data peminjaman',
      backgroundColor: 'green',
      // borderColor: 'blue',
      data: dataOrder
    }]
  }

  return (
    <div className="App">
      <Bar data={data} />
    </div>
  );
}

export default App;
