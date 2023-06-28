import { createClient } from 'contentful'
import React, { useState, useEffect, useRef} from 'react';
import { Link, useParams } from 'react-router-dom/dist';
import ReactFullpage from '@fullpage/react-fullpage';
import MainMenu from '../home/MainMenu';
import "./project.scss"
import Item from './Item';
import ProjectRecomend from './ProjectRecomend';


const client = createClient({
    space: 'yk9odzegnojt',
    accessToken: 'Qo-cqV0zm7ZQzXFN8BuuWmwLo4yvW23cctCiBDLnYgU'
});



const ProjectDetails = () => {

const {id} = useParams();
    const [singleprojectData, setSingleProjectData] = useState({});
    const contentRef = useRef(null);

    useEffect(() => {
      client.getEntries({
        'sys.id': id
    }).then(response => setSingleProjectData(response))
        .catch(console.error);
    }, [id]);

  const project = singleprojectData.items && singleprojectData.items[0].fields; // Add conditional check
  const sections = project?.sections || [];

  console.log(project);
  console.log(sections);

  const modifiedURL = project?.url ? (/^https?:\/\//i.test(project.url) ? project.url : `https://${project.url}`) : null;


  useEffect(() => {
    if (contentRef.current) {
      setTimeout(() => {contentRef.current.scrollIntoView({ behavior: 'instant', block: 'start' }) }, 100)
    }
  }, [singleprojectData?.items]);


  return (
    <>
    <MainMenu/>
    
    {project?.url &&
        <div className="project-url">
           <a href={modifiedURL} target="_BLANK">
          VISIT <img src={`${project.logo.fields.file.url}`} alt="Project Logo"/> WEBSITE!
        </a>
        </div>
}

      <div class="project-details mt-5" ref={contentRef}>
      <div className="proj-header" style={{backgroundImage:`url(${project?.headerImage?.fields.file.url})`}}>
{project?.video &&
        <video preload="auto" autoPlay={true} muted>
          
         { project.video.fields.file.url && <source src={project.video.fields.file.url} type="video/mp4"/>}

          Your browser does not support the video tag.
      </video>
}
        <h1>{project?.title}</h1>
      </div>

        <div className="container-lg project-content">
          
        <div className="row align-items-center">
        </div>
        {project?.text}

       

        {
  sections &&
    sections.map((item) => (
      <div key={item.sys.id + item.fields?.title} className="row section">
        {/* the media div */}
        <div
          className={`col ${
            item.fields && !item.fields.media && item.fields.title && item.fields.text
              ? 'col-12' // If there is no media and only text, make it full width
              : item.fields && item.fields.media && item.fields.media.length === 1 && !item.fields.title && !item.fields.text
              ? 'col-12 singleImage'
              : item.fields && item.fields.media && item.fields.media.length > 1
              ? 'col-12 multiple-images'
              : 'col-12 col-md-5'
          }`}
        >
          {item.fields && item.fields.media &&
            item.fields.media.map((mediaItem) => {
              const { contentType, url } = mediaItem.fields.file;

              if (contentType.startsWith('image/')) {
                return <img key={mediaItem.id} src={url} />;
              } else if (contentType.startsWith('video/')) {
                return (
                  <video key={mediaItem.id} src={url} autoplay="true" loop>
                    Your browser does not support the video tag.
                  </video>
                );
              }

              return null; // Skip non-image and non-video media items
            })}
        </div>

        {/* the Text div */}
        <div
          className={`col ${
            item.fields && !item.fields.media && item.fields.text
              ? 'col-12 max-it' // If there is no media and there is text, make it full width
              : item.fields && item.fields.media && item.fields.media.length > 1
              ? 'col-12'
              : 'col-12 col-md-7'
          }`}
        >
          <h3>{item.fields && item.fields.title}</h3>
          <p>{item.fields && item.fields.text}</p>
        </div>
      </div>
    ))
}


        </div>
      </div>
      
{project && <ProjectRecomend skip={id}/>}
      </>
  )
}

export default ProjectDetails