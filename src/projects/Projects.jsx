import { useState, useEffect } from 'react';
import Item from '../projects/Item';
import slugify from "react-slugify";
import DownArrow from "../components/DownArrow";
import { createClient } from 'contentful';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

const client = createClient({
    space: 'yk9odzegnojt',
    accessToken: 'Qo-cqV0zm7ZQzXFN8BuuWmwLo4yvW23cctCiBDLnYgU'
});

export default function Projects(props) {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        client.getEntries({
            content_type: 'projects'
        })
        .then(response => setProjectData(response.items))
        .catch(console.error);
    }, []);

    return (
        <div className="project_section">
            <div className="project_wrapper container">
                <div className="project_content">
                    <div className="project_title"><h3>RECENT PROJECTS</h3></div>
                    <Swiper modules={[Navigation]} spaceBetween={20}  navigation slidesPerView={1.3}  centeredSlides={false}  initialSlide={2} breakpoints={{  768: {slidesPerView: 4}}}>
                        {              
                            projectData?.map(({ sys, fields }, index) => (
                                <SwiperSlide key={`${index}_${fields.title}`} >
                                    <Item
                                        title={fields.title}
                                        tags={fields.tags}
                                        logo={fields.logo.fields.file.url}
                                        sub={fields.subtitle}
                                        img={fields.image.fields.file.url}
                                        categories={fields.categories}
                                        link={fields.link}
                                        slug={slugify(fields.title)}
                                        id={sys.id}
                                        theIndex={index}
                                        paused={props.paused}
                                        key={index}
                                        projectClick={props.projectClick}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper> 
                </div>
                <div className="project_text"></div>
            </div> 
            <DownArrow handleClick={props.arrowClick}/>
        </div>
    )
}
