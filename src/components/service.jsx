import { Image } from 'semantic-ui-react'
import Button from '../components/button/button'
import { useSwipeable } from 'react-swipeable'

export default function Service(props) {
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (props.active) {
                props.onSwipe('left')
            }
        },
        onSwipedRight: () => {
            if (props.active) {
                props.onSwipe('right')
            }
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: false,
        delta: 10, // min distance (px) before a swipe starts
        swipeDuration: 500, // max time (ms) for a swipe
        touchEventOptions: { passive: false }, // prevent default touch events
        trackTouch: true, // track touch events
        rotationAngle: 0, // set a rotation angle
    });

    return (      
        <div 
            className={props.active ? 'service_wrap active' : 'service_wrap'} 
            {...handlers}
            style={{ touchAction: 'pan-y pinch-zoom' }}
        >
            {props.active ? <div className="close" onClick={props.goBack}>X</div> : ''}
            {props.active ? '' : <div className="service_anchor" onClick={props.onClick}></div>}

            <div className="service">
                <div style={{ paddingTop: '25px' }}>
                    {props.paused ? <Image src=''/> : <Image src={props.image} />}
                </div>

                <div className="service_content">
                    <h2>{props.title}</h2>
                    <p className="service_text" dangerouslySetInnerHTML={{ __html: props.text }}></p>
                    <Button text="CONTACT US" className="contact_us" link={props.link}/>
                </div>

                <div>
                    {props.paused ? <Image src=''/> : <Image src={props.image} />}
                </div>
            </div> 
        </div>
    )
}