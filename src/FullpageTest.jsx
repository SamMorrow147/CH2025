
import ReactFullpage from '@fullpage/react-fullpage';

export default function FullpageTest() {
  var offset = '0';
 
 

    return (
        <ReactFullpage
        debug /* Debug logging */

        // Required when using extensions

        // fullpage options
        licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
        navigation
        anchors={['firstPage', 'secondPage', 'thirdPage']}

        render={comp => (
          <ReactFullpage.Wrapper>
                      <div className="section">
                      </div>
                      <div className="section">
                      </div>
                      <div className="section">
                      </div>
          </ReactFullpage.Wrapper>
        )}
      />
    ) 
}