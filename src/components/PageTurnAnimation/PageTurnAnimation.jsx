import { useEffect, useState } from "react";

import "./PageTurnAnimation.css";

import page1 from "../../assets/Buchseiten/Buchseite1.png";
import page2 from "../../assets/Buchseiten/Buchseite2.png";
import page3 from "../../assets/Buchseiten/Buchseite3.png";
import page4 from "../../assets/Buchseiten/Buchseite4.png";
import page5 from "../../assets/Buchseiten/Buchseite5.png";
import page6 from "../../assets/Buchseiten/Buchseite6.png";
import page7 from "../../assets/Buchseiten/Buchseite7.png";


const frames = [
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7
];


function PageTurnAnimation({ onFinished }) {

  const [frameIndex, setFrameIndex] = useState(0);


  useEffect(() => {

    /*
      Geschwindigkeit pro Bild.

      150 ms × 7 Bilder
      = ungefähr 1 Sekunde Animation
    */
    const FRAME_DURATION = 150;


    const timer = setInterval(() => {

      setFrameIndex((currentFrame) => {

        /*
          Letztes Bild erreicht
        */
        if (currentFrame >= frames.length - 1) {

          clearInterval(timer);

          /*
            Letzten Frame noch kurz sichtbar lassen
          */
          setTimeout(() => {
            onFinished?.();
          }, FRAME_DURATION);

          return currentFrame;
        }


        return currentFrame + 1;

      });

    }, FRAME_DURATION);


    return () => {
      clearInterval(timer);
    };

  }, [onFinished]);


  return (
    <div className="page-turn-animation">

      <img
        className="page-turn-animation__image"
        src={frames[frameIndex]}
        alt=""
      />

    </div>
  );
}


export default PageTurnAnimation;