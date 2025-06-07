import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate";

export default function City({paused}) {
    return (
        <div className="city_animation">
            <style>
                {`
                    .city_animation canvas {
                        margin-top: -80px !important;
                    }
                    
                    @media only screen and (max-width: 400px) {
                        .city_animation {
                            max-width: 88vw;
                        }
                    }
                `}
            </style>
            <AnimateCC
                animationName="heartcityTRANSITIONfinished"
                composition="4F52BEB06C36473D9D26E331A183CF52"
                paused={paused}
            />
        </div>
    )
}