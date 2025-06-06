import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate";
import { useEffect, useRef } from 'react';

export default function City({paused}) {
    const wrapperRef = useRef(null);

    return (
        <div className="city_animation" style={{ 
            position: 'relative',
            width: '100%',
            height: '76vh',
            overflow: 'hidden'
        }}>
            <div ref={wrapperRef} style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(0.76)',
                transformOrigin: 'center center',
                width: '1024px',
                height: '750px'
            }}>
                <AnimateCC
                    animationName="heartcityTRANSITIONfinished"
                    composition="4F52BEB06C36473D9D26E331A183CF52"
                    paused={paused}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
        </div>
    )
}