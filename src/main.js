import "./assets/styles/main.scss";
import { initCRUD } from "./components/crud.js";

document.addEventListener("DOMContentLoaded", () => {
  initCRUD();

  if (document.querySelector(".home-page .swiper-container")) {
    import("./components/swiperLoader.js").then((module) => {
      module.initSwiper("home-page");
    });
  } else if (document.querySelector(".product-page .swiper-container")) {
    import("./components/swiperLoader.js").then((module) => {
      module.initSwiper("product-page");
    });
  }
});
