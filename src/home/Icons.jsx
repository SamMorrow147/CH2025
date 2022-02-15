import Typist from "react-typist";
export default function icons({paused}) {

    const elements = ['one', 'two', 'three'];

    const items = []
  
    for (var i = 1; i < 5; i++) {
        items.push(<div style={{animationDelay:'.'+i+'s', top:i*120+'px'}}><img src={'/images/icons/'+i+'.png'} className={'single_icon '+'icon-'+i}  /></div>);
      }

      for (var i = 1; i < 4; i++) {
        items.push(<div style={{animationDelay:'.'+(i+4)+'s', top:i*120+60+'px'}}><img src={'/images/icons/'+(i+3)+'.png'} className={'single_icon '+'icon-'+i+4} /></div>);
      }

      for (var i = 1; i < 3; i++) {
        items.push(<div  style={{animationDelay:'.'+(i+7)+'s', top:i*120+120+'px'}}><img src={'/images/icons/'+(i+7)+'.png'} className={'single_icon '+'icon-'+i+4} /></div>);
      }

      for (var i = 1; i < 2; i++) {
        items.push(<div style={{animationDelay:'1.1s', top:i*120+190+'px'}}><img src={'/images/icons/'+(i+9)+'.png'} className={'single_icon '+'icon-'+i+4}/></div>);
      }



    return (    
        <div class="icons_section">

            <div className="icons_wrapper container">

                <div class="icons_content">
                    <h2>WE<span> PARTNER <br/> WITH MEMBERS  <br/> TO</span> ACCELORATE  <br/> BUSINESS INTO BRANDS</h2>
                    { paused ? <p></p>  : <p><Typist avgTypingDelay='.1'>
                        OUR MEMBERS HAVE ACCESS TO TOP TIER CREATIVES FROM ARUOND THE USA. LEARN MORE ABOUT OUR AGENCIES AND AGENDAS
                        </Typist></p> }
                   
                    <a href="" className="button apply" >APPLY</a>
                </div>
    
                  <div className="icons">
                    {items}
                </div>

            </div>

        </div>
        )
    }