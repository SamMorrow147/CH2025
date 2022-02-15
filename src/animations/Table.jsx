import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate";

export default function Table({paused}) {
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