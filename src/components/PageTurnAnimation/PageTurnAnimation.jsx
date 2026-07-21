import { useEffect, useState } from "react";

import "./PageTurnAnimation.css";

import {
  pageTurnImages as pages,
  preloadPageTurnImages
} from "../../utils/preloadPageTurnImages";

function PageTurnAnimation({ onFinished }) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const safetyTimeout = setTimeout(() => {
      if (!isCancelled) {
        setIsReady(true);
      }
    }, 400);

    preloadPageTurnImages().then(() => {
      if (!isCancelled) {
        clearTimeout(safetyTimeout);
        setIsReady(true);
      }
    });

    return () => {
      isCancelled = true;
      clearTimeout(safetyTimeout);
    };
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    if (currentFrame >= pages.length - 1) {
      const timeout = setTimeout(() => {
        onFinished();
      }, 120);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCurrentFrame(currentFrame + 1);
    }, 110);
    return () => clearTimeout(timeout);
  }, [currentFrame, isReady, onFinished]);

  return (
    <div className="page-turn-animation">
      <img
        src={pages[currentFrame]}
        alt=""
        className="page-turn-image"
      />
    </div>
  );
}

export default PageTurnAnimation;