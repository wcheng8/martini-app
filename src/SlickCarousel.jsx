import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const SlickCarousel = ({quotes}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true
      };
    return (
        <Slider {...settings}>
            {quotes.map((quote) => {
                const {content, author, authorSlug} = quote
                return (<div key={authorSlug}>
                    <p>{content}</p>
                    <p>{author}</p>
                </div>)
            })}
      </Slider>
    )
  
}
