import "./HomePage.css";
import title from "../../assets/Homepage/title.svg";
import text_openBook from "../../assets/Homepage/text_openBook.svg";
import mond from "../../assets/Homepage/mond.png";
import homepage_text from "../../assets/Homepage/homepage_text.svg";

function HomePage({ onGoLosbuch, isLeaving }) {

  return (
    <main className="home-page">
      <section
        className={`home-page__intro ${
          isLeaving ? "home-page__intro--leaving" : ""
        }`}
      >

      <img className="title" src={title} alt="Geomantia-Losbuch" />
    
      <img className="text_openBook" src={text_openBook} alt="Zum Losbuch" onClick={onGoLosbuch}/>

      <img className="homepage_text" src={homepage_text} alt="Erklär-Text" /> 

      <img className="mond" src={mond} alt="mond" />

      </section>
    </main>
  );
}

export default HomePage;
