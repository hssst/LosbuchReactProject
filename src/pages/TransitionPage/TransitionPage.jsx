import "./TransitionPage.css";
import fleck from "../../assets/Homepage/fleck.png";


function TransitionPage({ transitionOut }) {
    return (
      <div className={`transition-wrapper ${transitionOut ? "fade-out" : ""}`}>
        
        <img className="transition-fleck" src={fleck} alt=""/>

        <div className="transition-black"></div>


        <div className="text">Wie die Sterne am Himmel stehen und die Zeiten sich wandeln, 
                              so wendet der Zufall die Zeichen. Betrachte nicht allein die Zahl,
                              sondern schaue das Verborgene dahinter. Denn nicht das Buch 
                              entscheidet dein Schicksal, sondern der Geist, der die Zeichen zu 
                              deuten weiß.   
        </div>

        <div className="zitat">- Heinrich Cornelius Agrippa von Nettersheim
        </div>

      </div>

      
    );
  }
  
  export default TransitionPage;