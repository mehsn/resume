 import React, {Component} from 'react';
 import Fullpage from '../component/Fullpage';
 import Skillcard from '../component/Skillcard';
 import data from "../data.json"
 import { SocialIcon } from 'react-social-icons';
 import "./SkillSection.css"

class SkillSection extends Component{
    render(){
        const{children} = this.props

        return(
            <Fullpage className="column"   >
               
                <h3 style={{marginTop:"100px"}} >{data.section[1].title}</h3>
                <div className="card-master" >
                    {data.section[1].items.map(es=>{
                        return (<Skillcard skill={es} />) ;

                    })}
                </div>      
                {children}           
            </Fullpage>   

        )
    }
}

export default SkillSection ;