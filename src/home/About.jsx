import Table from '../animations/Table'
import Background from './Background'
import TextLoop from "react-text-loop";

export default function About({paused}) {
    return (    
        <div className="second_section white_background">
            <Background/>
            <div className="second_wrapper container">

                <div className="second_content">
                    <h2>WE ARE A<span> CREATIVE</span> POWERHOUSE</h2>
                    <p>A FULL DECK OF MARKETING ACES WHO DESIGN, CREATE AND BUILD <TextLoop children={["COOL $#!%", "STORIES", "BRANDS", "CAMPAIGNS", "ADS", "START-UPS", "PACKAGE DESIGNS", "BUSINESSES", "LEGENDS"]} /></p>
                </div>
                <Table paused = {paused}/>
                
            </div>

        </div>
        )
    }