import './button.css';
import { Link } from 'react-router-dom';

export default function Button(props) {
    return (
        <Link to={props.link} className={"btn "+props.className} >
          <svg width="180px" height="45px" viewBox="0 0 180 45" className="border">
            <polyline points="179,1 179,44 1,44 1,1 179,1" className="bg-line" />
            <polyline points="179,1 179,44 1,44 1,1 179,1" className="hl-line" />
          </svg>
          <span>{props.text}</span>
        </Link>
    )
}
