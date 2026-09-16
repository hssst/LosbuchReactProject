import { useState } from "react";

import "./App.css";
import TransitionPage from "./pages/TransitionPage/TransitionPage";

import AppLayout from "./components/layout/AppLayout/AppLayout";
import Header from "./components/layout/Header/Header";
import Navigation from "./components/layout/Navigation/Navigation";

import HomePage from "./pages/HomePage/HomePage";
import LosbuchPage from "./pages/LosbuchPage/LosbuchPage";
import ResultPage from "./pages/ResultPage/ResultPage";

import { playSound, startWind, stopAllSounds, fadeOutAudio } from "./sounds";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [losbuchResult, setLosbuchResult] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionOut, setTransitionOut] = useState(false);
  const [homeLeaving, setHomeLeaving] = useState(false);
  const [losbuchStartStep, setLosbuchStartStep] =
    useState("question");

  function handleFinish(result) {
    setLosbuchResult(result);
    setCurrentPage("result");
  }
  function handleRestart() {
    stopAllSounds();

    const m = playSound("mystic", { volume: 0.25, fadeIn: 400 });
    setTimeout(() => fadeOutAudio(m, 800), 3000);

    setTimeout(() => {
      startWind({ target: 0.3, duration: 4000 });
    }, 1000);

    setLosbuchResult(null);
    setLosbuchStartStep("question");
    setCurrentPage("losbuch");
  }
  function handleBackToInput() {
    setLosbuchStartStep("details");
    setCurrentPage("losbuch");
  }
  function goToLosbuch() {
    playSound("mystic", { volume: 0.25, fadeIn: 1500, fadeOut: 1500 });
    setLosbuchStartStep("question");

    // 1. Homepage-Inhalt ausblenden
    setHomeLeaving(true);

    // 2. Nach dem Fade die Transition anzeigen
    setTimeout(() => {
      setIsTransitioning(true);
      setTransitionOut(false);
    }, 800);

    setTimeout(() => {
      startWind({ target: 0.3, duration: 4000 });
    }, 5000);

    // 3. Nach der Transition Losbuch anzeigen
      setTimeout(() => {
    setCurrentPage("losbuch");
    setTransitionOut(true);
  }, 8800);

    // 4. Transition vollständig entfernen
    setTimeout(() => {
      setIsTransitioning(false);
      setTransitionOut(false);
      setHomeLeaving(false);
    }, 10300);
  }

  return (
    <AppLayout warping={isTransitioning}>

      <Header />

      <Navigation
        currentPage={currentPage}
        onGoHome={() => setCurrentPage("home")}
        onGoLosbuch={goToLosbuch}
        onGoResult={() => setCurrentPage("result")}
      />

      {isTransitioning && (
        <TransitionPage
          transitionOut={transitionOut}
        />
      )}

      {currentPage === "home" && (
        <HomePage
          onStart={() => {
            setLosbuchStartStep("question");
            setCurrentPage("losbuch");
          }}
          onGoLosbuch={goToLosbuch}
          isLeaving={homeLeaving}
        />
      )}

      {currentPage === "losbuch" && (
        <LosbuchPage
          onFinish={handleFinish}
          onGoHome={() => setCurrentPage("home")}
          initialStep={losbuchStartStep}
        />
      )}

      {currentPage === "result" && (
        <ResultPage
          losbuchResult={losbuchResult}
          onRestart={handleRestart}
          onBackToInput={handleBackToInput}
        />
      )}

    </AppLayout>
  );
}

export default App;