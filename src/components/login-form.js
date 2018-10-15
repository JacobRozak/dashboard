import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import '../App.css';


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/home'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
            <div>
                <h1 id='main'>Dev Challange</h1>
              <div class="row">
               <form class="col s6">
               <div class="input-field col s6">
               <input placeholder="Username" 
                  id="first_name" 
                  type="text" 
                  class="validate"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
               ></input>
               <label for="first_name"></label>
               </div>
               <div class="row">
               <div class="input-field col s6">
               <input placeholder="Password"
                id="password"
                type="text" 
                class="validate"
                  type="password"
                  name="password"
                  htmlFor="password"
                  value={this.state.password}
                  onChange={this.handleChange}>
                </input>
               <label for="first_name"></label>
               </div>
               </div>
               <button id="but" type='submit' onClick={this.handleSubmit}>
               
               Log in
               </button>
                </form>
              </div>
              <p id="new">
                New to the Challange?
                <Link to="/signup" id="link">
                sign up
                </Link>
              </p>
             </div>
            )
        }
    }
}

export default LoginForm
