import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import SwipeDeck from './components/SwipeDeck';
import { SECTIONS, getSectionsWithProjects } from './lib/sections';
import { transformContentfulProjects } from './lib/contentfulMobile';
import { useNavigate } from 'react-router-dom';

const client = createClient({
  space: 'yk9odzegnojt',
  accessToken: 'Qo-cqV0zm7ZQzXFN8BuuWmwLo4yvW23cctCiBDLnYgU'
});

export default function ProjectsMobile() {
  const [sections, setSections] = useState(SECTIONS);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    client.getEntries({
      content_type: 'projects',
      include: 2
    })
    .then(response => {
      console.log('Contentful response:', response);
      const projects = transformContentfulProjects(response.items);
      console.log('Transformed projects:', projects);
      const sectionsWithProjects = getSectionsWithProjects(SECTIONS, projects);
      console.log('Sections with projects:', sectionsWithProjects);
      setSections(sectionsWithProjects);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error fetching projects:', error);
      setError(error.message);
      setIsLoading(false);
    });
  }, []);

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  if (error) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ff0000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: '20px'
      }}>
        <h2>Error Loading Projects</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#293a8d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        Loading...
      </div>
    );
  }

  console.log('Rendering SwipeDeck with sections:', sections);
  return <SwipeDeck sections={sections} onProjectClick={handleProjectClick} />;
}
