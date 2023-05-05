
export default function DownArrow({handleClick}) {

    return (      
        <div className="container_2" onClick={handleClick}>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
        </div>
    )
}