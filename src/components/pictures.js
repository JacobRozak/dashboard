import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'


class Pictures extends Component {

    state ={
        img : null
    }
    
    handleChange(event) {
        this.setState({
            img: event.target.name
        })
       // console.log(this.state.img)
    }

    handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()
    }
		//request to server to add a new username/password
		/*axios.post('/user/', {
			path = this.state.img
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
    */
    render(){
        console.log(this.state.img)
        return(
           <div>
               <form>
               <input  type="file" name="myimage" ></input>
               <input onClick={this.handleSubmit} type="submit" name="submit" value="submit"></input>
               </form>
           </div>
        )
    }
}
export default Pictures