import React from "react";

export default function Hero() {
  return (
    <section className="hero-section flex items-center justify-between px-8 py-16 bg-white">
      {/* Left content */}
      <div className="hero-content max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Site</h1>
        <p className="text-lg text-gray-700">
          What’s up! I’m Kae, an amateur dev mixing curiosity with caffeine. Glad you popped by.
        </p>
      </div>

      {/* Right image */}
      <div className="hero-image-container flex-shrink-0 max-w-sm">
        <img
          src={`${import.meta.env.BASE_URL}assets/Art/k1_cool.png`}
          alt="Cool avatar"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
