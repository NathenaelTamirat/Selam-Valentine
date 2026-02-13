"use client";

import { FloatingHearts } from "@/components/floating-hearts";
import { BackgroundSlideshow } from "@/components/background-slideshow";
import { ValentineCard } from "@/components/valentine-card";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background slideshow with her photos */}
      <BackgroundSlideshow />

      {/* Floating hearts in the background */}
      <FloatingHearts />

      {/* Main Valentine card */}
      <ValentineCard />
    </main>
  );
}
