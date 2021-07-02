import React from "react"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide_1 from "./images/slide_1.jpg"
import slide_2 from "./images/slide_2.jpg"
import slide_3 from "./images/slide_3.jpg"
import slide_4 from "./images/slide_4.jpg"
import slide_5 from "./images/slide_5.jpg"

function Frames () {
    return (
      <div className="slide-container" style={{
        //   backgroundColor: '#ffc85c',
          // width: '50%',
          // marginLeft: '10px'
      }}>
        <Slide >
        <div className="each-slide">
        <img src={slide_1} alt="slide 1" style={{ height: '300px', borderRadius: '12px'}} />
          </div>
          <div className="each-slide">
          <img src={slide_2}  alt="slide 2" style={{ height: '300px', borderRadius: '12px'}} />
          </div>

          <div className="each-slide">
           <img src={slide_3} alt="slide 3"  style={{ height: '300px', borderRadius: '12px'}} />
          </div>

          <div className="each-slide">
           <img src={slide_4} alt="slide 4" style={{ height: '300px', borderRadius: '12px'}} />
          </div>

          <div className="each-slide">
           <img src={slide_5} alt="slide 5" style={{ height: '300px', borderRadius: '12px'}} />
          </div>
        </Slide>
      </div>
    )
}
export default Frames