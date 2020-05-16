import React from 'react'
import { Chart } from "react-google-charts"

function AmountRainFall(props){
    const titles =[['days','amount']]
    const data = props.days.map((ele=>{
        return [`day ${ele.day} `,ele.amount]
    }))
    const resultData = [].concat(titles).concat(data)
    console.log(resultData)
    return(
        <div>
            <Chart
                width={'800px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={resultData}
                rootProps={{ 'data-testid': '2' }}
                />
        </div>
    )
}

export default AmountRainFall