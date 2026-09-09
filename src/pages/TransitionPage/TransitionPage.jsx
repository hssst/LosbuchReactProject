import "./TransitionPage.css";


function TransitionPage({ transitionOut }) {
    return (
      <div className={`transition-wrapper ${transitionOut ? "fade-out" : ""}`}>

        <div className="text">Es gibt eine den Himmeln eingepflanzte Kraft, 
          welche durch das Werk der Geomantie die verborgenen Dinge offenbart. 
          So ergreift die Seele, wenn sie von den oberen Einflüssen berührt wird, das 
          Los - auf dass der Zufall nicht bloß ungeordnet sei, sondern ein Bild der oberen Ordnung trage.
        </div>

        <div className="zitat">- Heinrich Cornelius Agrippa von Nettersheim
        </div>

      </div>

      
    );
  }
  
  export default TransitionPage;