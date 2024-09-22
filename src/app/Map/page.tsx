"use client"; // This line is necessary for client-side rendering

import { siteConfig } from "@/config/site";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Home() {
  // Ref to store map instance
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Check if map is already initialized
    if (mapRef.current) return;

    // Initialize Leaflet map
    mapRef.current = L.map("map").setView([0, 0], 2);

    // Add OpenStreetMap base layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    }).addTo(mapRef.current);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-24 md:p-24 overflow-x-hidden">
      <div className="text-center mt-8">
        <h1 className="scroll-m-20 mb-4 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          <span className="gradient-text">{siteConfig.name}</span> - NDVI Map
        </h1>

        <div className="frame-containers flex items-center justify-center rounded shadow-lg p-10 -z-10">
          <div id="map" style={{ height: "700px", width: "1000px" }} className="-z-10"></div>
        </div>
      </div>
    </main>
  );
}
