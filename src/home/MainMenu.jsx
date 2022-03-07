export default function MainMenu({currentScroll, onClick}) {

    function isEven(n) {
        return n % 2 === 0;
     }
     



    return (
        <div className={`${isEven(currentScroll) ? 'menu' : 'menu even'} ${currentScroll !== 0 ? 'menu_active' : ''}`}>

            <div className="mobile_icon" onClick={onClick}>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179 79">
                <rect x="0.5" y="0.5" width="178" height="27.97"/>
                <path className="cls-1" d="M190,9V36H13V9H190m1-1H12V37H191V8Z" transform="translate(-12 -8)"/>
                <rect x="0.5" y="50.53" width="178" height="27.97"/>
                <path className="cls-1" d="M190,59V86H13V59H190m1-1H12V87H191V58Z" transform="translate(-12 -8)"/>
                </svg>
            </div>

        </div>
        
    )
}