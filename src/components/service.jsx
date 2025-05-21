import { Grid, Image, Modal } from 'semantic-ui-react'
import Button from '../components/button/button'




export default function Service(props) {

    return (      

    <div className={ props.active ? 'service_wrap active' : 'service_wrap' } >

    { props.active ? <div className="close" onClick={props.goBack}>X</div> : '' }
    {props.active ? '' : <div className="service_anchor" onClick={props.onClick}></div>  }

    <div className="service">
        
        <div style={{ paddingTop: '25px' }}>
        { props.paused ? <Image src=''/> : <Image src={props.image} />  }
       </div>

        <div className="service_content">
            <h2>{props.title}</h2>
            <p className="service_text">
                {props.text}
            </p>
          <Button text="CONTACT US" className="contact_us" link={props.link}/>
        </div>

        <div>
        { props.paused ? <Image src=''/> : <Image src={props.image} />  }
       </div>

    </div> 

    
            

    </div>
    
     )
}