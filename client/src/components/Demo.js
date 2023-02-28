import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Demo(){
  return (
    <div className="demos" id='demo'>
      <div className="demo">
        <h2 className="demo-intro">Demos.</h2>
        <h3 className="more-demo">More to come!</h3>
      </div>
      <div className="carousel">
        <Carousel >
                  <div>
                      <iframe width="500" height="450" className="videos" title="puppy-prowl" src="https://www.youtube.com/embed/9LWAuwXDsr0"></iframe>
                  </div>
                  <div>
                      <iframe width="500px" height="450px" className="videos" title="puppy-prowl2" src="https://www.youtube.com/embed/9LWAuwXDsr0"></iframe>
                  </div>
                  <div>
                      <iframe width="500px" height="450px" className="videos" title="puppy-prowl3" src="https://www.youtube.com/embed/9LWAuwXDsr0"></iframe>
                  </div>
              </Carousel>
        </div>
    </div>
  ) 
}

export default Demo;
