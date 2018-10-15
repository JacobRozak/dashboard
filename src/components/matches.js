import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import matches from '../matches.json'


class Matches extends Component{
    
    render(){
        const random = Math.floor(Math.random()*300)
       // var result = ''
        const determineWinner = (e)=>{
            
            if(e[random].FTR == 'H'){
             return  (
                     e[random].HomeTeam +  ' beats ' + e[random].AwayTeam + '\n' + 
                     'in a home match ' +
                     e[random].FTHG + ':' + e[random].FTAG
                    )
            }
            else if(e[random].FTR=='D'){

             return  ( 
                     e[random].HomeTeam + ' draw ' + e[random].AwayTeam + '\n' +
                      'in a home match ' +
                     e[random].FTHG + ':' + e[random].FTAG
                    )
            }else if(e[random].FTR == 'A'){
               return  (
                        e[random].AwayTeam + ' beats ' + e[random].HomeTeam + '\n' + 
                        'in a away match '+
                        e[random].FTAG + ':' + e[random].FTHG)
            }
            
        }
        
        
        determineWinner(matches)
        
        return(
          <div>
            <h3 className='weat'>{determineWinner(matches)}</h3>
          </div>
        )
    }

}

export default Matches