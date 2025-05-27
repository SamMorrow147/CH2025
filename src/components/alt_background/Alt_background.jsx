import "./alt_background.css";
import DownArrow from "../DownArrow";
export default function Alt_background(props) {
    return (
        <div className="alt-animation-back">
           <div className="top anim_border"></div>
           <div className="left anim_border"></div>
           <div className="right anim_border"></div>
           <div className="bottom anim_border"></div>
           <div className="corner top-left anim_border"></div>
           <div className="corner top-right anim_border"></div>
           <div className="corner bottom-left anim_border"></div>
           <div className="corner bottom-right anim_border"></div>
           <div className="center_section"><DownArrow handleClick={props.arrowClick}/></div>
        </div>
    )
}
