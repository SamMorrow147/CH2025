import { Grid, Image } from 'semantic-ui-react'
import Typist from 'react-typist'
import Button from '../components/button/button'
import Service from '../components/service'
export default function Services(props, {paused}) {
    
    return (    
        <div className="services_section">

        

        

            <div className="membership_wrapper container_full_width">

                <Grid columns='four' stackable className="membership_column">
                    <Grid.Row className="membership_row">
                        <Grid.Column>
                            <Service 
                                title="CONTENT" 
                                text="The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. " 
                                image="./images/animations/social-media-girl.gif" 
                                paused={paused}
                                offset={props.offset}
                            />
                        </Grid.Column>
                        <Grid.Column>
                              
                            <Service 
                                title="BRANDING" 
                                text="The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. " 
                                image="./images/animations/painting-guy.gif" 
                                paused={paused}
                                offset={props.offset}
                            />

                        </Grid.Column>
                        <Grid.Column>

                            <Service 
                                title="STRATEGY" 
                                text="The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. " 
                                image="./images/animations/drawing-guy.gif" 
                                paused={paused}
                                offset={props.offset}
                            />

                        </Grid.Column>
                        <Grid.Column >
                            <Service 
                                title="WEB" 
                                text="The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. " 
                                image="./images/animations/computer-guy.gif" 
                                paused={paused}
                                offset={props.offset}
                            />
                        </Grid.Column>
                    </Grid.Row> 
                </Grid>


            </div>

        </div>
        )
    }