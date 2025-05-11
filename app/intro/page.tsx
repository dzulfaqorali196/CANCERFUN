"use client";

import { useEffect } from "react";
import Intro from "@/components/intro";

export default function Home() {
  useEffect(() => {
    // Cari semua elemen audio
    const audioElements = document.querySelectorAll("audio");

    // Fade out audio yang tersisa
    const fadeOutInterval = setInterval(() => {
      let allStopped = true;

      audioElements.forEach((audio) => {
        if (audio instanceof HTMLAudioElement) {
          const initialVolume = parseFloat(audio.dataset.initialVolume || "1");
          if (audio.volume > 0) {
            audio.volume = Math.max(0, audio.volume - initialVolume * 0.05);
            allStopped = false;
          }
        }
      });

      if (allStopped) {
        clearInterval(fadeOutInterval);
        // Hentikan semua audio setelah fade out selesai
        audioElements.forEach((audio) => {
          if (audio instanceof HTMLAudioElement) {
            audio.pause();
            audio.currentTime = 0;
          }
        });
      }
    }, 50);

    // Cleanup
    return () => {
      clearInterval(fadeOutInterval);
      audioElements.forEach((audio) => {
        if (audio instanceof HTMLAudioElement) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Intro />
    </main>
  );
}
