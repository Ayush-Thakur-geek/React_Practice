import React, {useState} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

function App() {

   let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  return (
    <>
      <div className='svg fixed top-0 left-0 z-[2] w-full h-screen overflow-hidden bg-[#000]'>
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && <div className='main w-full'>
          <div className='landing w-full h-screen bg-black'>
            <div className='navbar flex gap-7 absolute top-0 left-0 w-full py-5 px-10 z-[2]'>
              <div className='lines flex flex-col gap-[5px]'>
                <div className="line w-15 h-2 bg-white"></div>
                <div className="line w-8 h-2 bg-white"></div>
                <div className="line w-5 h-2 bg-white"></div>
              </div>
              <h3 className='text-3xl -mt-[8px] text-white'>Rockstar</h3>
            </div>
            <div className='imagesdiv relative w-full h-screen overflow-hidden'>
              <img className='absolute top-0 left-0 w-full h-full object-cover' src='./public/sky.png' />
              <img className='absolute top-0 left-0 w-full h-full object-cover' src='./public/bg.png' />
              <img className='absolute -bottom-[70%] left-1/2 -translate-x-1/2' src='./public/girlbg.png' />
            </div>
            <div className='btmbar pb-[10px] text-white absolute bottom-0 left-0 w-full py-10 px-10 z-[2] bg-gradient-to-t from-black to-transparent'>
              <div className='flex items-center gap-2'>
                <i class="text-2xl ri-arrow-down-line"></i>
                <h3 className='font-[Ariel] text-xl -mt-[5px]'>Scroll Down</h3>
              </div>
            </div>
          </div>
        </div>}
    </>
  )
}

export default App
