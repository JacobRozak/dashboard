import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			email: '',
			redirectTo:null

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

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
               <input placeholder="email"
                id="email"
                type="text" 
				name="email"
				id="email"
				  >
                </input>
               <label for="first_name"></label>
               </div>
               </div>
			   <div class="input-field col s6">
               <input placeholder="Password" 
                  id="first_name" 
				  type="password" 
                  class="validate"
				  name="password"
				  htmlFor="password"
				  value={this.state.password}
                  onChange={this.handleChange}
               ></input>
               <label for="first_name"></label>
               </div>
               <div class="row">
               <div class="input-field col s6">
               <input placeholder="Confirm Password"
                id="password"
                type="text" 
                class="validate"
                  type="password"
                  name="password"
                  htmlFor="password"
				  >
                </input>
               <label for="first_name"></label>
               </div>
               </div>
               <button id="but" type='submit' onClick={this.handleSubmit}>
               
               Register
               </button>
                </form>
              </div>
			  </div>

	)
}
}
}

export default Signup
