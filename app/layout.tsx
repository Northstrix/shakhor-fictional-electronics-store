"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import "./globals.css";

const imagesToPreload = [
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color.jpeg",
  "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1582046207438-595bf34ebbcf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511296933631-18b1a062212c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1622531636820-5d727319e45d?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1603389335957-10bea39c9d32?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1695753456538-3d29fa0a4ba0?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = imagesToPreload.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to preload images:", error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  const handleAcceptDisclaimer = () => {
    setShowDisclaimer(false);
  };

  return (
    <html lang="en">
      <Head>
        <title>Shakhor</title>
        <meta name="description" content="Fictional electronics store" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="antialiased">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-screen">
            <span className="text-lg">Loading...</span>
            <span className="text-lg">Please wait for a while.</span>
          </div>
        ) : showDisclaimer ? (
          <Disclaimer onAccept={handleAcceptDisclaimer} />
        ) : (
          children
        )}
      </body>
    </html>
  );  
};

export default AppLayout;
