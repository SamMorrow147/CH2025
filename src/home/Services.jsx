import { Grid, Image } from 'semantic-ui-react'
import Typist from 'react-typist'
import Button from '../components/button/button'

export default function Services({paused}) {

    return (    
        <div class="services_section">

        

        

            <div className="membership_wrapper container_full_width">

                <Grid columns='four' stackable className="membership_column">
                    <Grid.Row className="membership_row">
                        <Grid.Column>

                            <div className="service">

                                <div>
                                { paused ? <Image src=''/> : <Image src='./images/animations/social-media-girl.gif' />  }
                               </div>

                                <div className="service_content">
                                    <h2>CONTENT</h2>
                                    <p className="service_text">
                                        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. 
                                    </p>
                                  <Button text="CONTACT US" />
                                </div>

                                <div>
                                { paused ? <Image src=''/> : <Image src='./images/animations/social-media-girl.gif' />  }
                               </div>

                            </div> 

                        </Grid.Column>
                        <Grid.Column>
                              
                            <div className="service">

                                <div>
                                { paused ? <Image src=''/> : <Image src='./images/animations/painting-guy.gif' />  }
                               </div>

                                <div className="service_content">
                                    <h2>BRANDING</h2>
                                    <p className="service_text">
                                        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. 
                                    </p>
                                    <Button text="CONTACT US" />
                                </div>

                                <div>
                                { paused ? <Image src=''/> : <Image src='./images/animations/painting-guy.gif' />  }
                               </div>

                            </div> 

                        </Grid.Column>
                        <Grid.Column>
                           <div className="service">

                                <div>
                                { paused ? <Image src=''/> : <Image src='./images/animations/drawing-guy.gif' />  }
                               </div>

                                <div className="service_content">
                                    <h2>STRATEGY</h2>
                                    <p className="service_text">
                                        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. 
                                    </p>
                                    <Button text="CONTACT US" />
                                </div>

                                <div>
                                { paused ? <Image src=''/> : <Image src='./images/animations/drawing-guy.gif' />  }
                               </div>

                            </div> 
                        </Grid.Column>
                        <Grid.Column >
                           <div className="service">

                                <div>
                                { paused ? <Image src=''/> : <Image src='./images/animations/computer-guy.gif' />  }
                               </div>

                                <div className="service_content">
                                    <h2>WEB</h2>
                                    <p className="service_text">
                                        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. 
                                    </p>
                                    <Button text="CONTACT US" />
                                </div>

                                <div>
                                { paused ? <Image src=''/> : <Image src='./images/animations/computer-guy.gif' />  }
                               </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row> 
                </Grid>


            </div>

        </div>
        )
    }