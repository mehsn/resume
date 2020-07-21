import React, {Component} from 'react';
import "./Skillcard.css"

class Skillcard extends Component{
    render(){
        const{skill} = this.props
        return(
            <div className="card" >
              <div className="card-top" > 
                   <img className="card-img" src={skill.contents.image} />
              </div>
              
              <div className="card-bottom" >
                <h3>{skill.contents.title} </h3>
                </div>
            </div>
        )
    }
}

export default Skillcard;