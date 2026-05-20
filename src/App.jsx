import { useState } from "react";

import AppLayout from "./components/layout/AppLayout/AppLayout";
import Header from "./components/layout/Header/Header";
import Navigation from "./components/layout/Navigation/Navigation";

import HomePage from "./pages/HomePage/HomePage";
import LosbuchPage from "./pages/LosbuchPage/LosbuchPage";
import ResultPage from "./pages/ResultPage/ResultPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [losbuchResult, setLosbuchResult] = useState(null);

  function handleFinish(result) {
    setLosbuchResult(result);
    setCurrentPage("result");
  }

  function handleRestart() {
    setCurrentPage("home");
  }

  return (
    <AppLayout>
      <Header />

      <Navigation
        currentPage={currentPage}
        onGoHome={() => setCurrentPage("home")}
        onGoLosbuch={() => setCurrentPage("losbuch")}
        onGoResult={() => setCurrentPage("result")}
      />

      {currentPage === "home" && (
        <HomePage onStart={() => setCurrentPage("losbuch")} />
      )}

      {currentPage === "losbuch" && (
        <LosbuchPage onFinish={handleFinish} />
      )}

      {currentPage === "result" && (
        <ResultPage
          losbuchResult={losbuchResult}
          onRestart={handleRestart}
        />
      )}
    </AppLayout>
  );
}

export default App;
