import React from "react";
import axios from "axios";
import Clock from "react-live-clock"

class Weather extends React.Component{
    constructor(props){
        super(props)

        this.state={
            temp: 0,
            desc: '',
            icon: '',
            loading: true
        }
    }

    componentDidMount(){
        let cityName = `Seoul`;
        let apiKey = `eec2caac90507cd771d6c0f902b42e9f`;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        axios.get(url)
        .then((res) => {
            let data = res.data;
            this.setState({
                temp: data.main.temp,
                desc: data.weather[0].description,
                icon: data.weather[0].icon,
                loading: false
            });
        })
        .catch((err) => console.log(err));
    }

    render(){
        if(this.state.loading){
            return <p>loading</p>
        }else{
            return(
                <div className="App">
                    <div>
                        <Clock format={'YYYY년 MM월 DD일 HH:mm:ss'} ticking={true} ></Clock>
                        &nbsp; &nbsp; &nbsp;현재 기온 : {(this.state.temp - 273.15).toFixed(1)}C
                    </div>
                </div>
            )
        }
    }
}

export default Weather;