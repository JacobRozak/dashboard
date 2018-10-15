import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Weather from './weather'
import News from './news'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'

import Matches from './matches'
import Pictures from './pictures'

import {geolocated} from 'react-geolocated';




class Home extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
        this.newsClick = this.newsClick.bind(this)
        this.matchClick = this.matchClick.bind(this)
        //this.getLocation = this.getLocation.bind(this)
        //this.showPosition = this.showPosition.bind(this)
        this.state={
            latitude:null,
            longitude:null,
            redirectTo: null,
            news:'burp',
            location: 'London'
        }
    }
    
    componentDidMount(){
       // console.log(this.props.coords)
    }
    
    logout(event) {
        event.preventDefault()
        console.log('logging out')
        this.setState({
            redirectTo: "/"
        })
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null,
              path:'right here' 
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

      newsClick(e) {
        e.preventDefault()
        console.log('click')
        this.setState({
            redirectTo:"/fullNews"
        })
    }
    matchClick(e) {
        e.preventDefault()
        console.log('click')
        this.setState({
            redirectTo:"/fullMatches"
        })
    }

    render() {
        console.log(this.props.coords)
        if (this.state.redirectTo ==='/fullNews') {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else if(this.state.redirectTo ==='/') {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }else if(this.state.redirectTo ==='/fullMatches'){
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }else{
        return (
        <div>
            <h1 className='great'>Good Day, {this.props.username}!</h1>
            <Link to='#' onClick={this.logout} id='logout'>LOGOUT</Link>
            <div class="grid-container">
                <div class="grid-item"><span className="weat">Weather</span><div class="card"><Weather location={this.state.location} /></div></div>
                <div class="grid-item" onClick={this.newsClick}><span className="weat">News</span><div class="card"><News updateNews={this.passNews}/></div></div>
                <div class="grid-item" onClick={this.matchClick}><span className="weat">Sport</span><div class="card"><Matches /></div></div>  
                <div class="grid-item"><span className="weat">Photos</span><div class="card"><Pictures /></div></div>
                <div class="grid-item"><span className="weat">Tasks</span><div class="card"></div></div>
                <div class="grid-item"><span className="weat">Clothes</span><div class="card"></div></div>  
            </div>
        </div>

        )

    }
    }
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  }) (Home)
