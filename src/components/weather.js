import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import sun from '../assets/Sun_icon.png'
import rain from '../assets/Rain_icon.png'
import cloud from '../assets/Clouds_icon.png'
import {geolocated} from 'react-geolocated';


class Weather extends Component{
    state = {
        post:[],
        icon:null
    }
   componentDidMount(){
     // let id = this.props.match.params.post_id

     console.log(this.props.location)
      
      axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ this.props.location +'&appid=d0a10211ea3d36b0a6423a104782130e')
      .then(res =>{
         //const currentWeather = res.data
        const icon = parseInt(res.data.weather[0].icon)
         this.setState({
            post:res.data,
            icon:icon
         })
         
         //console.log(res.data.weather[0].icon)
        
      })
   }
   render(){
    console.log(this.props.coords)
     const selected = this.state.post
     const temp = function(e){
         return Math.round(e - 273.15)
     }
     let icon = this.state.icon
   
    // console.log(icon)

    let pickedIcon = null;

    if(icon === 1){
        pickedIcon = sun
     }else if(icon > 1 && icon < 9){
        pickedIcon = cloud
     }else{
         pickedIcon = rain
     }
     
    
     const item = selected.length != 0 ?
     (
      <div>
        <div>
          <img id='weatherPic' src={pickedIcon}></img>
          <div id='weatherTxt'><p className='weat'>
              {temp(selected.main.temp)} degrees
          </p>
        </div>
          <h2 className='weat'>
               {selected.name}
          </h2>
          </div>
      </div>
        
     ):
     (
         <div>
             <h1>nuthing's here</h1>
        </div>
     )
       return(
           <div>
              {item}
           </div>
       )
   }
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  }) (Weather)