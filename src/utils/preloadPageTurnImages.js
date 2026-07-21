import page1 from "../assets/Buchseiten/Buchseite1.png";
import page2 from "../assets/Buchseiten/Buchseite2.png";
import page3 from "../assets/Buchseiten/Buchseite3.png";
import page4 from "../assets/Buchseiten/Buchseite4.png";
import page5 from "../assets/Buchseiten/Buchseite5.png";
import page6 from "../assets/Buchseiten/Buchseite6.png";
import page7 from "../assets/Buchseiten/Buchseite7.png";

export const pageTurnImages = [
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7
];

let pagesPreloadPromise = null;

export function preloadPageTurnImages() {
  if (!pagesPreloadPromise) {
    pagesPreloadPromise = Promise.all(
      pageTurnImages.map((src) => {
        return new Promise((resolve) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = resolve;
          image.src = src;
        });
      })
    );
  }
  return pagesPreloadPromise;
}