import {ProjectData} from "../projects/project_data";
import {useEffect, useState} from 'react';
import Item from '../projects/Item'
import slugify from "react-slugify";
import DownArrow from "../components/DownArrow";

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
export default function Projects(props) {

    const [data, setData] = useState([]);


    useEffect(()=>{
        
        setData(ProjectData)

});

    return (
   
        <div className="project_section">


        <div className="project_wrapper container">
            <div className="project_content">
            <div className="project_title"><h3>RECENT PROJECTS</h3></div>
            <Swiper modules={[Navigation]} spaceBetween={20}  navigation slidesPerView={1.3}  centeredSlides={false}  initialSlide={2} breakpoints={{  768: {slidesPerView: 4,}}}>

                    {              
                    data.map( (item,index)  => (
                        <SwiperSlide key={`${index}_${item.title}`} >

                            <Item
                            title={item.title}
                            tags={item.tags}
                            logo={item.logo}
                            sub={item.sub}
                            img={item.img}
                            categories={item.category}
                            link={item.link}
                            slug={slugify(item.title)}
                            id={item.id}
                            theIndex={index}
                            paused={props.paused}
                            key={index}
                            />

                         </SwiperSlide>

                        ))
                    }
                </Swiper> 
            </div>

            <div className="project_text">
            </div>

        </div> 

        <DownArrow handleClick={props.arrowClick}/>


    </div>
        
    )
}