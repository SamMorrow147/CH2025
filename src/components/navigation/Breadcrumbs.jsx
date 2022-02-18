export default function Breadcrumbs(props) {
    
    return (
    
      <ul className="breadcrumbs">
            {props.items.slice(1).map((d,index) => (
            <li className={props.anchor == d ? `active` : ''} key={index}> <img src={'./images/breadcrumbs/'+index+'.png'}/></li>
            ))} 
      </ul>
    )
}
