import React from "react";
import axios from "axios";

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
            console.log(res);
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
                    <p>현재 기온 : {(this.state.temp - 273.15).toFixed(1)}C</p>
                </div>
            )
        }
    }

}

export default Weather;