export default function Breadcrumbs(props) {
    
    return (
    
      <ul class="breadcrumbs">
             {console.log(props.items)} 
            {props.items.slice(1).map((d,index) => (
            <li className={props.anchor == d ? `active` : ''}> <img src={'./images/breadcrumbs/'+index+'.png'}/></li>
            ))} 

      </ul>
    )
}
