import Table from '../animations/Table.js'
import Background from './Background'
import TextLoop from "react-text-loop";
import DownArrow from '../components/DownArrow.jsx';
export default function About(props) {
    return (    

     
        <div className="second_section white_background">
            
            {props.paused === false ? <Background/> : '' } 
            {props.paused === false ? 

            <div className="second_wrapper container">

                <div className="second_content">
                    <h2>WE ARE A<span> CREATIVE</span> POWERHOUSE</h2>
                    <p>A FULL DECK OF MARKETING ACES WHO DESIGN, CREATE AND BUILD {props.paused ? 'COOL S#!%' : <TextLoop children={["COOL $#!%", "STORIES", "BRANDS", "CAMPAIGNS", "ADS", "START-UPS", "PACKAGE DESIGNS", "BUSINESSES", "LEGENDS"]} />}</p>
                </div>
                <Table paused = {props.paused}/>
                
            </div> : ''}
            <DownArrow handleClick={props.arrowClick}/>


        </div>
        )
    }