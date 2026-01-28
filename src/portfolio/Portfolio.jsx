import {useEffect, useState} from 'react';
import "./portfolio.scss"
import Item from "./Item";
import Panel from "./Panel";
import {PortfolioData} from "../data";
import slugify from 'react-slugify';
import React from 'react'


export default function Portfolio() {

    const [data, setData] = useState([]);
    const [currentpanel, setCurrentpanel] = useState(0);

    useEffect(()=>{
        setData(PortfolioData)
    }, []);
    
    function ActivePanel() {
        if(currentpanel !== 0 ) {
            return (
            data.filter(data => data.id === currentpanel)
            .map(item  => (
                <Panel
                title={item.title}
                tags={item.tags}
                img={item.img}
                categories={item.category}
                link={item.link}
                slug={slugify(item.title)}
                id={item.id}
                mobileImage={item.mobileImage}
                />
            ))
        )
        }

        else {
            return (
                <div>test</div>
            )
        }
    }

   

    return (
        <div className="portfolio">
            <div className="container">
                <div className="leftSide">
                <ActivePanel/>
                </div>
          
                <div className="work">
                
                    {              
                    data.map( (item,index)  => (
                            <Item
                            title={item.title}
                            tags={item.tags}
                            img={item.img}
                            categories={item.category}
                            link={item.link}
                            slug={slugify(item.title)}
                            id={item.id}
                            currentpanel={setCurrentpanel}
                            theIndex={index}
                            />
                        ))
                    }
                    
                </div>
            
            </div>
        </div>
    )
  
}
