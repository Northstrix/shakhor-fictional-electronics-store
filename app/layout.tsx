"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import "./globals.css";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a short loading time

    return () => clearTimeout(timer);
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
          // Loader Placeholder (can be replaced with a spinner)
          <div className="flex items-center justify-center h-screen">
            <span>Loading...</span>
          </div>
        ) : showDisclaimer ? (
          // Show Disclaimer until accepted
          <Disclaimer onAccept={handleAcceptDisclaimer} />
        ) : (
          // Render the actual website content after disclaimer is accepted
          children
        )}
      </body>
    </html>
  );
};

export default AppLayout;
