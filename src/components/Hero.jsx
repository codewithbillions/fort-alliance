import {useState, useEffect} from "react";

import {HiLocationMarker} from 'react-icons/hi';
import CountUp from "react-countup";
import {motion} from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { pic1, pic2, pic3 } from "../assets";

const images = [pic1, pic2, pic3 ];


const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 2000)
        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="pt-10">
            <div className="paddings innerWidth flexCenter hero-container">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                <div className="orange-circle" />
                    <h1>
                        Innovative <br />
                        designs,
                        <br/>
                        Excellent delivery.
                        </h1>
                </div>

                <div className="flexColStart hero-des">
                  <motion.p variants={fadeIn("", "", 0.1, 1)}className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> To provide timous yet timeless service that portray</motion.p>
                  <motion.p variants={fadeIn("", "", 0.1, 1)}className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>highest levels of quality, integrity and professionalism.</motion.p>
                </div>

                

                    <div className="flexCenter stats">
                    
                    <div className="flexColCenter stat">
                    <div className="flexCenter">
                        <HiLocationMarker color="var(--blue)" size={45}/>
                        
                    </div>

                    
                        <span>
                            <CountUp start={5} end={100} duration={4} />
                            <span>+</span>
                        </span>
                        <span className="secondaryText">projects</span>
                    </div>    
                </div>
                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src={images[currentIndex]} alt="image"/>
                    </div>
                </div>
            
            </div>
           
        </section>
    )
}

export default Hero;


// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#22c55e]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Meet <span className='text-[#22c55e]'>Kehinde</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 mb-[50px] text-white-100`}>
//             a highly skilled and creative web developer with a passion for web<br className='sm:block hidden' />
//               technologies
//           </p>
//         </div>
//       </div>

//       <ComputersCanvas />

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
