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

  useGSAP(() => {

    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut"
    });

    gsap.to(".imagesdiv .sky", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    });

    gsap.to(".imagesdiv .bg", {
      scale: 1.3,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    });

    gsap.to(".imagesdiv .character", {
      scale: 1,
      x: "-50%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    });

    const main = document.querySelector('.main');

    main?.addEventListener("mousemove", (e) => {
        const xMove = (e.clientX / window.innerWidth - .5) * 16;
        gsap.to('.imagesdiv .text', {
          x: `${xMove}%`
        });
        gsap.to('.imagesdiv .sky', {
          x: `${xMove}%`
        })
        gsap.to('.imagesdiv .bg', {
          x: `${xMove*1.7}%`
        })
    });
  }, [showContent])

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

      {showContent && <div className='main rotate-[-10deg] scale-[1.7] w-full'>
          <div className='landing overflow-hidden relative w-full h-screen bg-black'>
            <div className='navbar flex gap-7 absolute top-0 left-0 w-full py-5 px-10 z-[2]'>
              <div className='lines flex flex-col gap-[5px]'>
                <div className="line w-15 h-2 bg-white"></div>
                <div className="line w-8 h-2 bg-white"></div>
                <div className="line w-5 h-2 bg-white"></div>
              </div>
              <h3 className='text-3xl -mt-[8px] text-white'>Rockstar</h3>
            </div>
            
            <div className='imagesdiv relative w-full h-screen overflow-hidden'>
              <img className='sky scale-[1.7] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover' src='./public/sky.png' />
              <img className='bg scale-[2] rotate-[-3deg] absolute top-0 left-0 w-full h-full object-cover' src='./public/bg.png' />
              <div className='text text-white flex flex-col gap-3 absolute top-16 left-3/5 -translate-x-1/2 top-0 left-0'>
                <h1 className='text-9xl -ml-70'>grand</h1>
                <h1 className='text-9xl ml-50'>theft</h1>
                <h1 className='text-9xl -ml-70'>auto</h1>
              </div>
              <img className='character absolute -bottom-[70%] left-1/2 -translate-x-1/2 rotate-[3deg] scale-[1.4]' src='./public/girlbg.png' />
            </div>
            <div className='btmbar pb-[10px] text-white absolute bottom-0 left-0 w-full py-12 px-10 z-[2] bg-gradient-to-t from-black to-transparent'>
              <div className='flex items-center gap-2'>
                <i className="text-2xl ri-arrow-down-line"></i>
                <h3 className='font-[hell] text-xl -mt-[5px]'>Scroll Down</h3>
              </div>
              <img className='absolute h-[65px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./public/ps5.png" alt="" />
            </div>
          </div>
          <div className='w-full h-screen flex items-center justify-center px-10 bg-black'>
            <div className='cntnr flex w-full h-[80%] text-white'>
              
                <div className='limg relative w-1/2 h-full'>
                  <img className='absolute w-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover' src="./public/imag.png" alt="" />
                </div>
                <div className='rimg pt-[100px]'>
                  <h1 className='text-7xl pb-[20px]'>About GTA-VI</h1>
                  <p style={{fontFamily: 'hell'}} className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p> 
                  <p style={{fontFamily: 'hell'}} className='text-2xl'> Esse incidunt corporis vero, placeat sunt consequatur delectus.</p>
                  <p style={{fontFamily: 'hell'}} className='text-2xl'>Provident inventore, fuga odit ipsum itaque, dolore eius eligendi,</p>
                  <p style={{fontFamily: 'hell'}} className='text-2xl pb-[20px]'>veritatis excepturi autem impedit animi.</p>
                  <button 
                  onMouseEnter={() => {
                    let btn = document.querySelector(".btn");
                    btn.style.transition = 'transform 0.5s ease';
                    btn.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={() => {
                    let btn = document.querySelector(".btn");
                    btn.style.transition = 'transform 0.5s ease';
                    btn.style.transform = 'scale(1)';
                  }}
                  style={{cursor: 'pointer'}} className='btn bg-yellow-500 text-black text-3xl ml-[20px] p-[10px]'>Download Now</button>
                </div>
                </div>
          </div>
        </div>}
    </>
  )
}

export default App
