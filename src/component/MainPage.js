import React, {Component} from 'react';
import "./MainPage.css"
import Bar from "./Bar";
import { RiMagicLine } from "react-icons/ri";

class MainPage extends Component{
    constructor(){
        super();
        this.state={
            color:'white'
        }
    }
    colorRand=()=>{
        const letters = ["white","black","red","aqua"];
        let col=letters[Math.floor(Math.random() * 4 ) ] ;
        this.setState({ color: col })
        console.log(this.state.color)
    }
    backgroundColorRand=()=>{
        const letters = ["AliceBlue","AntiqueWhite","Olive","OliveDrab","Orange","beige","brown","blue","red","yellow"];
        let col=letters[Math.floor(Math.random() * 10 ) ] ; 
        this.setState({  backgroundColor: col })    
    }
    render(){
        const{children} = this.props
        return(
            <div className={`main-page ${this.props.className || '' }`  } 
                style={this.props.style ,{backgroundColor:this.state.backgroundColor,
                color:this.state.color,textShadow:"1px 1px 1px #000"}}    >

                <Bar color={this.state.color}  >
                    <RiMagicLine className="pointer" style={{cursor:"pointer",boxShadow:"1px 1px 1px #010"}}
                        onClick={() => { this.colorRand() ; this.backgroundColorRand() ;}} color={this.state.color} />
                    {children[0]}
                </Bar>

                   
                   {children[1]}
                   {children[2]}
                   {children[3]}
            </div>
        )
    }
}
export default MainPage;