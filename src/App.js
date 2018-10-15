import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'
import Weather from './components/weather'
import Todo from './components/todo'

//import sun from './assets/Sun_icon.png'

import FullNews from './components/fullNews'
import FullMatches from './components/fullMatches'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  //<Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />

  render() {
    return (
      <div className="App">
        
        <Route
          exact path="/home"
          //component={Home}
          render ={()=><Home username={this.state.username} />}
           />
        <Route
          exact path="/"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
        <Route
        path='/todos'
        component = {Todo}/>

      <Route
          exact path="/fullNews"
          render={() =>
            <FullNews
            />}
        />

          <Route
          exact path="/fullMatches"
          render={() =>
            <FullMatches
            />}
        />
       
      </div>
    );
  }
}

export default App;
