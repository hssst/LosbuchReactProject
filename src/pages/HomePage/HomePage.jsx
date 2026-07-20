import "./HomePage.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import background from "../../assets/Homepage/background.svg";
import title from "../../assets/Homepage/title.svg";
import text_openBook from "../../assets/Homepage/text_openBook.png";
import fleck from "../../assets/Homepage/fleck.png";
import ellipse1 from "../../assets/Homepage/ellipse 1.png";
import ellipse2 from "../../assets/Homepage/ellipse 2.png";
import ellipse3 from "../../assets/Homepage/ellipse 3.png";
import ellipse4 from "../../assets/Homepage/ellipse 4.png";
import ellipse5 from "../../assets/Homepage/ellipse 5.png";
import mond from "../../assets/Homepage/mond.png";
import merkur from "../../assets/Homepage/merkur.png";
import venus from "../../assets/Homepage/venus.png";
import mars from "../../assets/Homepage/mars.png";
import jupiter from "../../assets/Homepage/jupiter.png";
import saturn from "../../assets/Homepage/saturn.png";
import uranus from "../../assets/Homepage/uranus.png";
import neptun from "../../assets/Homepage/neptun.png";

function HomePage({ onStart, onGoLosbuch }) {
  
  useEffect(() => {
    gsap.to(".title", {
      rotation: 1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      transformOrigin: "center center"
    });
  }, []);

  return (
    <main className="home-page">
      <section className="home-page__intro">

      <img className="background" src={background} alt="Hintergrund"/>
      <img className="title" src={title} alt="Geomantia-Losbuch" />
      
      <div className="startButton" onClick={onGoLosbuch}>
        <img className="fleck" src={fleck} alt=""></img>
        <img className="text_openBook" src={text_openBook} alt="Zum Losbuch"/>
      </div>

      <img className="ellipse1" src={ellipse1} alt="" />
      <img className="ellipse2" src={ellipse2} alt="" />
      <img className="ellipse3" src={ellipse3} alt="" />
      <img className="ellipse4" src={ellipse4} alt="" />
      <img className="ellipse5" src={ellipse5} alt="" />
      <img className="mond" src={mond} alt="mond" />
      <img className="merkur" src={merkur} alt="merkur" />
      <img className="venus" src={venus} alt="venus" />
      <img className="mars" src={mars} alt="mars" />
      <img className="jupiter" src={jupiter} alt="jupiter" />
      <img className="saturn" src={saturn} alt="saturn" />
      <img className="uranus" src={uranus} alt="uranus" />
      <img className="neptun" src={neptun} alt="neptun" />

        <h1>Geomantia-Losbuch</h1>

        <p>
          Eine digitale Losbuch-Erfahrung nach Peter Jordan.
        </p>

        <button type="button" onClick={onStart}>
          Los starten
        </button>
      </section>
    </main>
  );
}

export default HomePage;
