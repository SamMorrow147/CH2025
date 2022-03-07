import './alt_background.css';
import DownArrow from '../DownArrow';

export default function Alt_background() {
    return (
        <div className="alt-animation-back">

           <div className="top anim_border"></div>
           <div className="left anim_border"></div>
           <div className="right anim_border"></div>
           <div className="bottom anim_border"></div>

            <div className="center_section"><DownArrow/></div>
      
        </div>


    )
}
