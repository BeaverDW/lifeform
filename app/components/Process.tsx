"use client";

import { useRef, useEffect } from "react";

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    // 모바일에서 비디오 로드를 강제
    video.load();

    const initAndStart = async () => {
      try {
        await video.play();
        video.pause();
        video.currentTime = 0;
      } catch {
        // 무시
      }

      let rafId: number;

      const updateVideo = () => {
        if (!video.duration || !isFinite(video.duration)) {
          rafId = requestAnimationFrame(updateVideo);
          return;
        }

        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        // 스크롤 80% 지점에서 영상 끝까지 재생되도록
        const progress = Math.min(
          Math.max(scrolled / (sectionHeight * 0.8), 0),
          1,
        );
        video.currentTime = progress * video.duration;

        rafId = requestAnimationFrame(updateVideo);
      };

      rafId = requestAnimationFrame(updateVideo);

      return () => cancelAnimationFrame(rafId);
    };

    if (video.readyState >= 2) {
      initAndStart();
    } else {
      video.addEventListener("loadeddata", initAndStart, { once: true });
    }

    return () => {
      video.removeEventListener("loadeddata", initAndStart);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[500vh] bg-white">
      <div className="sticky top-0 flex min-h-dvh items-center justify-center px-5">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          src="/process_video_final.mp4"
          className="h-auto w-full rounded-xl"
        />
      </div>
    </section>
  );
}
