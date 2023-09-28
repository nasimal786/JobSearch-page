
import {Bar} from "react-chartjs-2"
import { Chart as chartjs,BarElement,CategoryScale,LinearScale,Tooltip,Legend } from 'chart.js'
chartjs.register(BarElement,CategoryScale,LinearScale,Tooltip,Legend)

function Chart() {

const data = {
  labels: [2020,2021,2022,2023],
  datasets : [{
    label: 'Number of Joiner',
    data: [110,244,557,1119],
    backgroundColor: ' rgba(165, 42, 42, 0.571)',
    borderColor: 'black',
    borderWidth: 1
  }]
}
const options = {}


  return (
    <div className="chart_bar">
        <div className="chart_bar_txt">
            <h1>This is the graph of our success</h1>
            <p>The graph illustrates the number of people who joined our courses over the period of four years.
                Overall more and more students will get connect with us by selecting our course. It can
                be observed that around 110 students purchased our course in 2020 whereas more than 1100 students connect with us by the year of 2023. 
            </p>
        </div>
    <div className="chart_bar_graph">
      <Bar data={data}  options={options}  />
    </div>
    </div>
  )
}

export default Chart