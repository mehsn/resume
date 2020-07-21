import React, {Component} from 'react';
import "./Bar.css"
import { RiMagicLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import scrollToComponent from 'react-scroll-to-component';


class Bar extends Component{

    
    render(){
        
        const{children} = this.props ;
        const{color} = this.props.color    ;
         return(
            <div className={`bar ${this.props.className || '' }`  }  style={ this.props.style }  >
                
                <div className="left-bar" >
                    <div>
                        {children[0]}
                    </div>
                </div> 

                     {children[1]} 
                 
            </div>               
        )
    }
}

export default Bar;