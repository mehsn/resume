 import React, {Component} from 'react';
 import Fullpage from '../component/Fullpage';
 import data from "../data.json"
 import { SocialIcon } from 'react-social-icons';
 
class TitleAndIcon extends Component{
    render(){
                const{children} = this.props

        return(
            <Fullpage className="column "   >
                
                <h1 className="title"   >
                        {data.title}
                    </h1>
                    <h1 className="title"     >
                        {data.subtitle}
                    </h1>
                    <div>
                       {Object.keys(data.links).map(
                        key=>{
                            return(
                                <span className="professionIcon"  > 
                                    <SocialIcon url={data.links[key]} />
                                </span>
                            )
                        }
                    )}
                </div>      
                {children}     
            </Fullpage>   

        )
    }
}

export default TitleAndIcon;