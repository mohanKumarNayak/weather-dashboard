import React from 'react'
import Rainfall from './Rainfall'
import axios from 'axios'
import AmountRainFall from './AmountRainFall'

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            pressure:970,
            temperature:11,
            days : []
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    componentDidMount = () => {
        axios.get('http://private-4945e-weather34.apiary-proxy.com/weather34/rain')
            .then((response)=>{
                this.setState({
                    days:response.data[0].days
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    } 
    render(){
        return(
            <div className="container">
                <h2>Weather service dashboard</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div>
                        <div style={{border:"1px solid black"}}>
                            <div className="container">
                            <h2><label htmlFor="formControlRange">Pressure [hPa]</label></h2>
                            <input type="range" className="form-control-range" id="formControlRange" name="pressure" value={this.state.pressure} onChange={this.handleChange} min="970" max="1030" />
                            <h4>Pressure - {this.state.pressure}hPa </h4>
                            </div>
                        </div>
                        <br /><br />
                            <div style={{border:"1px solid black"}}>
                            <div className="container">
                            <h2><label htmlFor="formControlTemp">Temperature [C]</label></h2>
                            <input type="range" className="form-control-range" id="formControlTemp" name="temperature" value={this.state.temperature} onChange={this.handleChange} min="11" max="35" />
                            <h4>Temperature- {this.state.temperature}'C </h4>
                            </div>
                        </div>
                        </div>
                       
                    </div>
                    <div className="col-md-6">
                        <Rainfall temperature={this.state.temperature} pressure={this.state.pressure} days={this.state.days}/>
                        <AmountRainFall days={this.state.days} />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home