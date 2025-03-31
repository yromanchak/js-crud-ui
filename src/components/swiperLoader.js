import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function initSwiper(pageType) {
  let swiperOptions = {};

  if (pageType === "home-page") {
    swiperOptions = {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };
  } else if (pageType === "product-page") {
    swiperOptions = {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    };
  }

  new Swiper(".swiper-container", swiperOptions);
}