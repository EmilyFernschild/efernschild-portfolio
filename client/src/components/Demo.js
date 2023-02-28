import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Demo(){
  return (
    <div className="demos" id='demo'>
      <div className="demo">
        <h2 className="demo-intro">Demos.</h2>
        <h3 className="more-demo">More to come!</h3>
      </div>
      <div className="carousel" >
        <Carousel showThumbs={false} >
          <div>
            <iframe width="450" height="500" title="puppy-prowl" id="inlineFrameExample" src="https://www.youtube.com/embed/9LWAuwXDsr0"></iframe>
          </div>
          <div>
            <iframe width="450" height="500" className="videos" id="inlineFrameExample" title="puppy-prowl2" src="https://www.youtube.com/embed/9LWAuwXDsr0"></iframe>
          </div>  
          <div>
            <iframe width="450" height="500" className="videos" id="inlineFrameExample" title="puppy-prowl3" src="https://www.youtube.com/embed/9LWAuwXDsr0"></iframe>
          </div>
        </Carousel>
        </div>
    </div>
  ) 
}

export default Demo;
