 import React, {Component} from 'react';
 import Fullpage from '../component/Fullpage';
 import data from "../data.json"
 
class AboutSection extends Component{
    render(){
        const{children} = this.props

        return(
            <Fullpage className="column"   >
                        
                <h1 className="title">
                        {data.section[0].title}
                    </h1>
                    <p className="profession">
                        <h4>{data.section[0].items[0].contents[0]}</h4>
                        <h3>{data.section[0].items[0].contents[1]}</h3>
                        <h2>{data.section[0].items[0].contents[2]}</h2>
                        <h2>{data.section[0].items[0].contents[3]}</h2>
                        
                    </p>     
                    {children}           
            </Fullpage>   

        )
    }
}

export default AboutSection ;