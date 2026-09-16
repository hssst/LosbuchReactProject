const files = {
  click: "/sounds/clicktwinkle.mp3",
  hover: "/sounds/hovertwinkle.mp3",
  mystic: "/sounds/mystic.mp3",
  wood: "/sounds/clickwood.mp3",
  paper: "/sounds/pageturn.mp3",
  rumble: "/sounds/rumble.mp3",
  gong: "/sounds/gong.mp3",
  tumble: "/sounds/tumble.mp3",
};

const cache = {};
Object.entries(files).forEach(([name, src]) => {
  const a = new Audio(src);
  a.preload = "auto";
  cache[name] = a;
});

export function playSound(
  name,
  { volume = 0.5, fadeIn = 0, fadeOut = 0 } = {}
) {
  if (!cache[name]) return;
  const audio = cache[name].cloneNode();
  audio.volume = fadeIn > 0 ? 0 : volume;
  audio.play().catch(() => {});

  if (fadeIn > 0) {
    const steps = 30;
    let i = 0;
    const t = setInterval(() => {
      i++;
      audio.volume = Math.min(volume, (volume * i) / steps);
      if (i >= steps) clearInterval(t);
    }, fadeIn / steps);
  }

  if (fadeOut > 0) {
    audio.addEventListener("loadedmetadata", () => {
      const startAt = audio.duration * 1000 - fadeOut;
      setTimeout(() => {
        const steps = 30;
        let i = steps;
        const t = setInterval(() => {
          i--;
          audio.volume = Math.max(0, (volume * i) / steps);
          if (i <= 0) clearInterval(t);
        }, fadeOut / steps);
      }, Math.max(0, startAt));
    });
  }

  return audio;
}

// --- Hover ---

let hoverAudio = null;

export function startHover(volume = 0.08, loop = false) {
  if (hoverAudio) return;
  hoverAudio = cache.hover.cloneNode();
  hoverAudio.volume = volume;
  hoverAudio.loop = loop;
  hoverAudio.play().catch(() => {});
}

export function stopHover(fade = 200) {
  if (!hoverAudio) return;
  const audio = hoverAudio;
  hoverAudio = null;

  if (fade <= 0) {
    audio.pause();
    return;
  }

  const steps = 10;
  let i = steps;
  const startVol = audio.volume;

  const t = setInterval(() => {
    i--;
    audio.volume = Math.max(0, (startVol * i) / steps);
    if (i <= 0) {
      clearInterval(t);
      audio.pause();
    }
  }, fade / steps);
}

// --- Hintergrundmusik: wind ---

const wind = new Audio("/sounds/wind.mp3");
wind.loop = true;
wind.volume = 0;

let windStarted = false;

export function startWind({ target = 0.3, duration = 4000 } = {}) {
  if (windStarted) return;
  windStarted = true;

  wind.play().catch(() => {});

  const steps = 40;
  const stepTime = duration / steps;
  let i = 0;

  const fade = setInterval(() => {
    i++;
    wind.volume = Math.min(target, (target * i) / steps);
    if (i >= steps) clearInterval(fade);
  }, stepTime);
}
export function playFile(src, { volume = 0.5, times = 1 } = {}) {
  const audio = new Audio(src);
  audio.volume = volume;

  let played = 1;
  if (times > 1) {
    audio.addEventListener("ended", () => {
      if (played < times) {
        played++;
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    });
  }

  audio.play().catch(() => {});
  return audio;
}