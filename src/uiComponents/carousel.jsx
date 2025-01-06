// import React from "react";
// import Carousel from "react-multi-carousel";
// import Alixha from "../assets/alixhaHales.png";
// import David from "../assets/davidWoe.png";
// import Jane from "../assets/janeCooper.png";
// import Shane from "../assets/shaneSmith.png";
// import carousel from "./stylesheets/carousel.module.css";

// const testimonials = [
//   {
//     user: "Alixha Hales",
//     testimony:
//       "Trading made easy! This platform is a must-try for commodities enthusiasts",
//     imgUrl: Alixha,
//   },
//   {
//     user: "Jane Cooper",
//     testimony:
//       "This platform exceeded my expectations, making commodities trading a smooth journey",
//     imgUrl: Jane,
//   },
//   {
//     user: "Shane Smith",
//     testimony: "This platform has made commodities trading a breeze",
//     imgUrl: Shane,
//   },
//   {
//     user: "David Woe",
//     testimony: "This platform has made commodities trading a breeze",
//     imgUrl: David,
//   },
// ];
// function CarouselComponent() {
//   return (
//     <div>
//       <Carousel
//         additionalTransfrom={0}
//         arrows
//         autoPlay
//         autoPlaySpeed={1000}
//         centerMode={false}
//         className=""
//         containerClass="container-with-dots"
//         dotListClass=""
//         draggable
//         focusOnSelect={false}
//         infinite
//         itemClass=""
//         keyBoardControl
//         minimumTouchDrag={80}
//         pauseOnHover
//         renderArrowsWhenDisabled={false}
//         renderButtonGroupOutside={false}
//         renderDotsOutside={false}
//         responsive={{
//             desktop: {
//               breakpoint: { max: 3000, min: 1024 },
//               items: 4,
//               slidesToSlide: 1
//             },
//             tablet: {
//               breakpoint: { max: 1024, min: 464 },
//               items: 2,
//               slidesToSlide: 1
//             },
//             mobile: {
//               breakpoint: { max: 464, min: 0 },
//               items: 1,
//               slidesToSlide: 1
//             }
//           }}
//       >
//         <div className={carousel.testimony}>
//           <div className={carousel.imgCtn}>
//             <img src={Alixha} alt="" />
//           </div>
//           <h4 className="specialText">Jane Cooper</h4>
//           <p>
//             This platform exceeded my expectations, making commodities trading a
//             smooth journey
//           </p>
//         </div>
//         <div className={carousel.testimony}>
//           <div className={carousel.imgCtn}>
//             <img src={Alixha} alt="" />
//           </div>
//           <h4 className="specialText">Jane Cooper</h4>
//           <p>
//             This platform exceeded my expectations, making commodities trading a
//             smooth journey
//           </p>
//         </div>
//         <div className={carousel.testimony}>
//           <div className={carousel.imgCtn}>
//             <img src={Alixha} alt="" />
//           </div>
//           <h4 className="specialText">Jane Cooper</h4>
//           <p>
//             This platform exceeded my expectations, making commodities trading a
//             smooth journey
//           </p>
//         </div>
//         <div className={carousel.testimony}>
//           <div className={carousel.imgCtn}>
//             <img src={Alixha} alt="" />
//           </div>
//           <h4 className="specialText">Jane Cooper</h4>
//           <p>
//             This platform exceeded my expectations, making commodities trading a
//             smooth journey
//           </p>
//         </div>
//       </Carousel>

//       {/* {testimonials.map((testimony) => {
//         return (
//           <div className={carousel.testimony}>
//             <div className={carousel.imgCtn}>
//               <img src={Alixha} alt="" />
//             </div>
//             <h4 className="specialText">Jane Cooper</h4>
//             <p>
//               This platform exceeded my expectations, making commodities trading
//               a smooth journey
//             </p>
//           </div>
//         );
//       })} */}
//     </div>
//   );
// }

// export default CarouselComponent;




import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Alixha from "../assets/alixhaHales.png";
import David from "../assets/davidWoe.png";
import Jane from "../assets/janeCooper.png";
import Shane from "../assets/shaneSmith.png";
import carousel from "./stylesheets/carousel.module.css";

const testimonials = [
  {
    user: "Alixha Hales",
    testimony:
      "Trading made easy! This platform is a must-try for commodities enthusiasts",
    imgUrl: Alixha,
  },
  {
    user: "Jane Cooper",
    testimony:
      "This platform exceeded my expectations, making commodities trading a smooth journey",
    imgUrl: Jane,
  },
  {
    user: "Shane Smith",
    testimony: "This platform has made commodities trading a breeze",
    imgUrl: Shane,
  },
  {
    user: "David Woe",
    testimony: "This platform has made commodities trading a breeze",
    imgUrl: David,
  },
];

function CarouselComponent() {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2000} // Adjusted for better readability
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3, // Adjusted for better display
            slidesToSlide: 1,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
          },
        }}
      >
        {testimonials.map((testimony, index) => (
          <div key={index} className={carousel.testimony}>
            <div className={carousel.imgCtn}>
              <img src={testimony.imgUrl} alt={testimony.user} />
            </div>
            <h4 className="specialText">{testimony.user}</h4>
            <p>{testimony.testimony}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;

