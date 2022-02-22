import { Grid, Image, Modal } from 'semantic-ui-react'
import Button from '../components/button/button'




export default function Service(props) {

    return (      

    <div className={ props.active ? 'service_wrap active' : 'service_wrap' } >

    { props.active ? <div className="close" onClick={props.goBack}>X</div> : '' }

    <div className="service" onClick={props.onClick}>
            
        
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

    
            

    </div>
    
     )
}