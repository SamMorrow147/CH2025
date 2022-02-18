import { Grid, Image, Modal } from 'semantic-ui-react'
import React from 'react'
import Button from '../components/button/button'




export default function Service(props) {

    const [open, setOpen] = React.useState(false)

    return (      

    <div className="service_wrap">
    <div className="service" onClick={() => setOpen(true)}>
            
        
        <div>
        { props.paused ? <Image src=''/> : <Image src={props.image} />  }
       </div>

        <div className="service_content">
            <h2>{props.title}</h2>
            <p className="service_text">
                {props.text}
            </p>
          <Button text="CONTACT US" />
        </div>

        <div>
        { props.paused ? <Image src=''/> : <Image src={props.image} />  }
       </div>

    </div> 

    
            { open ? 

            <div className="service_modal" style={{zIndex:100, transform:'translate3d(0px,'+props.offset+'px, 0px)'}}>

                <div className="overlay" onClick={() => setOpen(false)}/>

                <div className="service_mobile">

                    { props.paused ? <Image src=''/> : <Image src={props.image} />  }

                    <h2>{props.title}</h2>
                    <p className="service_text">
                    {props.text}                    
                    </p>
                    <Button text="CONTACT US" />
                    
                </div>

               

            </div>

            : ''  }

    </div>
    
     )
}