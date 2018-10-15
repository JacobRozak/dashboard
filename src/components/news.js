import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import FullNews from './fullNews'

class News extends Component{
    state ={
        news:null,
        content:null,
        title:null,
        description:null,
        pic:null

    }
    componentDidMount(){
        // let id = this.props.match.params.post_id 


         axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=07641867703843789a5a7c2958ea3a60')
         .then(res =>{
            const random = Math.floor(Math.random()*10)
            //console.log(random)
           this.setState({
               news:res.data,
               content:res.data.articles[random].content,
               title:res.data.articles[random].title,
               description:res.data.articles[random].description,
               pic:res.data.articles[random].urlToImage
           })

         })
      }
      render(){
          const news = this.state.news
          const content = this.state.content
          const title = this.state.title
          const description = this.state.description
          const pic = this.state.pic

          console.log(this.props.transform)

          const fullNews = <FullNews content={this.state.content}
          title={this.state.title}
          description={this.state.description}
          pic={this.state.pic} />

          const featured = news !== null?(
             <div>
                 <h3 id='newsTitle'>{title}</h3>
                 <h4 id='newsDescription'>{description}</h4>
             </div>
          ):(
            <div>
              <h1>something is wrong </h1>
            </div>
          )
          return(
              <div>
                  {this.props.transform?
                  (
                     <div>
                         <img src={pic}></img>
                         <h1 className='weat'>{title}</h1>
                         <h2 className='weat'>{content}</h2>
                     </div>
                  ):(
                    <h1>{featured}</h1>
                  )
                  }
              </div>
          )
      }
}

export default News