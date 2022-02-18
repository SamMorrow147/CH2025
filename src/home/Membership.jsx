import { Grid, Image } from 'semantic-ui-react'
import Typist from 'react-typist'

import Background from './Background'

export default function Membership({paused}) {

    return (    
        <div className="membership_section white_background">

            <Background/>

        

            <div className="membership_wrapper container_full_width">

                <Grid columns='four' divided>
                    <Grid.Row>
                        <Grid.Column >
                            <div> 
                                { paused ? <Image src=''/> : <Image src='./images/animations/square.gif' /> }
                            </div> 
                        </Grid.Column>
                        <Grid.Column>
                            <div> 
                                { paused ? <Image src=''/> : <Image src='./images/animations/heart.gif' /> }
                            </div> 
                        </Grid.Column>
                        <Grid.Column>
                            <div> 
                                { paused ? <Image src=''/> : <Image src='./images/animations/leaf.gif' /> }
                            </div> 
                        </Grid.Column>
                        <Grid.Column >
                            <div> 
                                { paused ? <Image src=''/> : <Image src='./images/animations/square.gif' /> }
                            </div> 
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <div className="membership_content">
                    <h2>OUR MEMBERSHIPS</h2>

                    { paused ? <p></p>  : <p><Typist avgTypingDelay='.1'>
                    We know the rules of marketing game and we dont play by them. Our memberscript platform gives you a direct link to top teir marketing creative. Talk to us about your company to learn what membership works for you. 
                     </Typist></p> }
            
                </div>

            </div>

        </div>
        )
    }