

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import data from "./../utils/slider.json";

const Projects = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth">
                 <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     {
                data.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className="r-card">
                            <img src={card.image} alt="project" />
                        </div>
                       
                    </SwiperSlide>
                ))
                }
    </Swiper>
        <div className="slider-controler ">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
            </div>
              
        </section>
    )
}

export default Projects;

// const SliderButtons =() => {
//     const swiper = useSwiper()
//         return (
//             <div className="flexCenter r-buttons">
//                 <button onClick={()=> swiper.sliderPrev()}>&lt;</button>
//                 <button onClick={()=> swiper.sliderNext()}>&gt;</button>
//             </div>
//         )
// }


// <Swiper {...sliderSettings}>
//                     <SliderButtons />
//                 {
//                 data.map((card, i) => (
//                     <SwiperSlide key={i}>
//                         <div classname="flexColStart r-card">
//                             <img src={card.image} alt="home" />

//                             <span className="secondaryText r-price">
//                                 <span style={{ color: "orange"}}>naira sign</span>
//                                 <span>{card.price}</span>
//                             </span>

//                             <span className="primaryText">{card.name}</span>
//                             <span className="secondaryText">{card.detail}</span>
//                         </div>
//                     </SwiperSlide>
//                 ))
//                 }
//                 </Swiper>