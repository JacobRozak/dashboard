import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import News from './news'

class FullNews extends Component{
    state={
        transform:true
    }
    render(){
        return(
            <div>
                <News transform={this.state.transform} />
            </div>
        )
    }
}

export default FullNews
