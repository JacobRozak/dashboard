import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'


class Todo extends Component{
    state ={
        todos:[{
            todo:'task1',
            tick:false
        },{
            todo:'task2',
            tick:false
        },{
            todo:'task3',
            tick:false
        },{
            todo:'task4',
            tick:false
        },{
            todo:'task5',
            tick:false
        },{
            todo:'task6',
            tick:false
        },{
            todo:'task7',
            tick:false
        }
    ]
    }
    
    componentDidMount(){
        axios.put('/user/update', {
            path:this.state.todos
        })
        .then(response => {
            console.log('login response: ')
            console.log(response)
    }).catch(error => {
        console.log('Logout error')
    })
}
    render(){
        const todos = this.state.todos
       // console.log(todos)
        var display = todos.forEach(e=>{
            return '<li>'+ e.todo +'</li>'
        })
        return(
            <div>
                <ul>
                  {display}
               </ul>
            </div>
        )
    }

}

export default Todo