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
        <Carousel infiniteLoop dynamicHeight >
                  <div>
                      <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                      {/* <p className="legend">Legend 1</p> */}
                  </div>
                  <div>
                      <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                      {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                      <img src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                      {/* <p className="legend">Legend 3</p> */}
                  </div>
              </Carousel>
        </div>
    </div>
  ) 
}

export default Demo;
