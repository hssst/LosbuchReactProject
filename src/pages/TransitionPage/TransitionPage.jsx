import "./TransitionPage.css";
import fleck from "../../assets/Homepage/fleck.png";


function TransitionPage({ transitionOut }) {
    return (
      <div className={`transition-wrapper ${transitionOut ? "fade-out" : ""}`}>
        
        <img className="transition-fleck" src={fleck} alt=""/>

        <div className="transition-black"></div>


        <div className="text">Aus Zahlen entstehen Zeichen, aus Zeichen eine Deutung. Im Zusammenspiel von Zeit, 
            Zufall und den Einflüssen der Planeten offenbart das Geomantie-Losbuch eine Antwort auf deine Frage.</div>
      </div>
    );
  }
  
  export default TransitionPage;