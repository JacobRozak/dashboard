import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import matches from '../matches.json'
import {geolocated} from 'react-geolocated';
import Weather from './weather'





class FullMatches extends Component{
    state ={
        latitude:null,
        longitude:null
    }

    render(){
      var cords = this.props.coords
      console.log(cords)
     //console.log(this.state.latitude)
        return(
          <div>
            <Weather cords={this.props.coords} />
          </div>
          
        )
    }
  }
  export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(FullMatches);
   