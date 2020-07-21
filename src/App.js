import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data.json"
import { SocialIcon } from 'react-social-icons';
import SnowStorm from 'react-snowstorm';
import TitleAndIcon from "./section/TitleAndIcon";
import AboutSection from "./section/AboutSection";
import SkillSection from "./section/SkillSection";
import MainPage from "./component/MainPage";
import scrollToComponent from 'react-scroll-to-component';
import { GoChevronDown } from "react-icons/go";
import { FiArrowUpCircle } from "react-icons/fi";

class App extends Component {
    constructor(props) {
        super(props);
        this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this)
      }
    
      componentDidMount() {
        scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
      }
    scrollToTopWithCallback() {
        let scroller = scrollToComponent(this.Tsection, { offset: 0, align: 'top', duration: 1500});
        scroller.on('end', () => console.log('Scrolling end!') );
      }
    render() {
        return (
            <div className="App">
                <SnowStorm flakesMaxActive="50" />
                <MainPage >     
                
                    <div className="right-bar" >
                        <div className="about-btn" type="button" onClick={() => scrollToComponent(this.Asection, 
                                { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}  
                                style={{color:this.props.color }} >about</div>

                        <div className="skill-btn" type="button" style={{color:this.props.color }} 
                        onClick={() => scrollToComponent(this.Ssection, 
                            { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})} 
                        >skill</div>   
                    </div>

                    <TitleAndIcon color=""  backgroundColor="" ref={(section) => { this.Tsection = section; }} >
                        <GoChevronDown className="blink infinite " onClick={() => scrollToComponent(this.Asection, 
                            { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})} 
                            style={{fontSize:"2em",cursor:"pointer",marginTop:"50px"}} />
                     </TitleAndIcon>
                    

                    <AboutSection ref={(section) => { this.Asection = section; }}  color=""  backgroundColor="">
                    <GoChevronDown className="blink infinite " onClick={() => scrollToComponent(this.Ssection, 
                            { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})} 
                            style={{fontSize:"2em",cursor:"pointer",marginTop:"50px"}} />
                    </AboutSection> 

                    <SkillSection  color="" ref={(section) => { this.Ssection = section; }}   backgroundColor="" >

                        <div  >
                            <FiArrowUpCircle onClick={this.scrollToTopWithCallback} className="blink infinite " 
                            style={{ fontSize:"2em",cursor:"pointer" }} /> 
                        </div>
                    </SkillSection>
                    
                </MainPage>
 
             </div>
        );
    }
}


export default App;
