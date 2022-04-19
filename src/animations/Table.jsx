import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate";
import useScript from '../animations.js'
import {useEffect} from 'react'

export default function Table({paused}) {

    // loads the script for the city animation at the bottom, this helps with load time.
    useScript('https://clubhausagency.com/city.js', 'city_animation');

    
    return (

 

        <div className="table_animation">
                <AnimateCC
                animationName="MrwTableanimVER2"
                composition="7D1E80A734B44C329A7374B6FC4E4B6B"
                paused={paused}
            />
      
        </div>
    
    )
}