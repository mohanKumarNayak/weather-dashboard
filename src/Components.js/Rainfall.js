import React from 'react'
import { Chart } from "react-google-charts"

function Rainfall(props){
    const titles =  [['x', 'lower','mean', 'upper']]
    const data = props.days.map((ele,i)=>{
        var score = Math.log(ele.amount + 1)*Math.log(props.pressure-929)*Math.log(props.temperature-9)
            var mean = Math.min(Math.max(score, 0), 100)
            var upper_bound = Math.min(1.5 * mean, 100);
            var lower_bound = Math.max(0.5 * mean, 0);
            return [i,lower_bound, mean, upper_bound];
    })
    const rainChart = [].concat(titles).concat(data)
    return(
        <div>
            <Chart
                width={'800px'}
                height={'400px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={rainChart}
                options={{
                    hAxis: {
                    title: 'Days',
                    },
                    vAxis: {
                    title: 'Probability of rain [0-100%] ',
                    },
                    series: {
                    1: { curveType: 'function' },
                    },
                }}
                rootProps={{ 'data-testid': '2' }}
                />
        </div>
    )
}

export default Rainfall