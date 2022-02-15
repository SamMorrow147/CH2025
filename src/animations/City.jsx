import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate";

export default function City({paused}) {
  
    return (
        <div className="city_animation">
        <AnimateCC
            animationName="heartcityTRANSITIONfinished"
            composition="4F52BEB06C36473D9D26E331A183CF52"
            paused={paused}
          />
        </div>
    
    )
}