import { Grid, Image } from 'semantic-ui-react'
import Typist from 'react-typist'


export default function Services({paused}) {

    return (    
        <div class="services_section">

        

        

            <div className="membership_wrapper container_full_width">

                <Grid columns='four' divided>
                    <Grid.Row>
                        <Grid.Column >

                            <div className="service">

                                <div>
                                    <Image src='./images/animations/social-media-girl.gif' /> 
                               </div>

                                <div className="service_content">
                                    <h2>CONTENT</h2>
                                    <div className="service_text">
                                        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. 
                                    </div>
                                </div>

                                <div>
                                    <Image src='./images/animations/social-media-girl.gif' /> 
                               </div>

                            </div> 

                        </Grid.Column>
                        <Grid.Column>
                              
                            <div className="service">

                                <div>
                                    <Image src='./images/animations/painting-guy.gif' /> 
                               </div>

                                <div className="service_content">
                                    <h2>BRANDING</h2>
                                    <div className="service_text">
                                        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. 
                                    </div>
                                </div>

                                <div>
                                    <Image src='./images/animations/painting-guy.gif' /> 
                               </div>

                            </div> 

                        </Grid.Column>
                        <Grid.Column>
                           <div className="service">

                                <div>
                                    <Image src='./images/animations/drawing-guy.gif' /> 
                               </div>

                                <div className="service_content">
                                    <h2>STRATEGY</h2>
                                    <div className="service_text">
                                        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. 
                                    </div>
                                </div>

                                <div>
                                    <Image src='./images/animations/drawing-guy.gif' /> 
                               </div>

                            </div> 
                        </Grid.Column>
                        <Grid.Column >
                            <div> 
                           
                            </div> 
                        </Grid.Column>
                    </Grid.Row>
                </Grid>


            </div>

        </div>
        )
    }