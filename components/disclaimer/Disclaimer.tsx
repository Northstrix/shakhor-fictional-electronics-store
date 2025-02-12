"use client";
import React, { useState } from 'react';

interface DisclaimerProps {
  onAccept: () => void;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ onAccept }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [activeTab, setActiveTab] = useState<"general" | "widget">("general");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleButtonClick = () => {
    if (isChecked) {
      onAccept();
      localStorage.setItem('acceptedDisclaimer', 'true');
    }
  };

  return (
    <div className="disclaimer-container background-image">
      <div className="disclaimer-content">
        <h2>IMPORTANT NOTICE</h2>
        
        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab ${activeTab === "general" ? "active" : ""}`}
            onClick={() => setActiveTab("general")}
          >
            General Disclaimer
          </button>
          <button
            className={`tab ${activeTab === "widget" ? "active" : ""}`}
            onClick={() => setActiveTab("widget")}
          >
            Telegram Widget Disclaimer
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "general" && (
          <div className="tab-content">
            <h3>Legal Notice and Website Disclaimer</h3>
            <p>
              This website and all its contents are for informational and demonstrative purposes only. 
              The products, services, pricing, and company information presented herein are entirely 
              fictional and created solely for design and portfolio demonstration.
            </p>
            <ul>
              <li>All product names, logos, brands, and other identifiers are hypothetical and do not represent real commercial offerings. Any similarity to actual products or services is purely coincidental.</li>
              <li>Prices, specifications, and descriptions are purely imaginative and not based on actual market products.</li>
              <li>No commercial transactions can or should be conducted through this platform.</li>
              <li>All trademarks, service marks, trade names, and brand identifiers mentioned or displayed on this website are the property of their respective owners, even if not explicitly stated. Their use here is for demonstration purposes only and does not imply any affiliation with or endorsement by the trademark owners.</li>
              <li>This website may contain fictional representations of trademarked elements. These are used strictly for illustrative purposes within this conceptual design showcase.</li>
            </ul>
          </div>
        )}

        {activeTab === "widget" && (
          <div className="tab-content">
            <h3>Telegram Widget Disclaimer</h3>
            <p>
              The person, name, and sales pitch demonstrated in this Telegram widget are entirely fictitious. 
              Any similarity to actual individual(s) or business(es) is purely coincidental and unintentional. 
              NamerStore is a fictional entity used for illustrative purposes only.
            </p>
            <p>
              This widget is a conceptual design prototype created for demonstrative and educational 
              purposes and does not represent an actual commercial offering. The store name is fictional; 
              any resemblance to existing business(es) is entirely coincidental and unintentional.
            </p>
          </div>
        )}

        <p className="acknowledgment">
          By proceeding, you acknowledge that this is a conceptual design showcase and understand that 
          no real commercial relationship is implied or established. You also recognize that any brand 
          identifiers or trademarks displayed are the property of their respective owners and are used 
          here solely for demonstrative purposes.
        </p>

        <div className="normalButton">
          <input
            type="checkbox"
            id="nb-check"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="nb-check" className="normalButton__check">
            I have read, understood, and agree to the terms
          </label>
          <button onClick={handleButtonClick} className="normalButton__button">
            {isChecked ? 'Continue' : 'Hold on a moment'}
          </button>
        </div>
      </div>
      <style jsx>{`
        .disclaimer-container {
          position: fixed;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          background-color: var(--navbar-background);
        }
        .disclaimer-content {
          width: 720px;
          max-width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          background: var(--background);
          border-radius: 22.5px;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          text-align: left;
          border: 1px solid #262626;
          color: var(--foreground);
        }
        h2 {
          margin: 5px 0 15px;
          color: var(--foreground);
          font-size: 1.5rem;
          font-weight: bold;
          align-self: center;
        }
        h3 {
          margin: 10px 0;
          font-size: 1.2rem;
        }
        p, ul {
          margin: 10px 0;
          line-height: 1.4;
        }
        ul {
          padding-left: 20px;
        }
        .acknowledgment {
          margin: 15px 0;
          font-style: italic;
        }
        #nb-check {
          display: none;
        }
        .normalButton {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 0;
          width: 100%;
          margin: 10px 0 0;
        }
        .normalButton::before {
          content: '';
          position: absolute;
          z-index: 2;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          width: 100%;
          height: 100%;
        }
        .normalButton__check {
          position: relative;
          z-index: 3;
          display: inline-block;
          font-size: 14px;
          padding: 14px 16px 14px 40px;
          margin-bottom: 6px;
          border-radius: 3px;
          cursor: pointer;
          color: var(--foreground);
          background: var(--navbar-background);
          transition: all ease .3s;
        }
        .normalButton__check::before {
          content: '';
          position: absolute;
          top: 0;
          left: 8px;
          bottom: 0;
          margin: auto 0;
          width: 20px;
          height: 20px;
          border-radius: 2px;
          background: var(--foreground);
        }
        .normalButton__check::after {
          content: '';
          position: absolute;
          top: 23px;
          left: 9px;
          width: 0;
          height: 0;
          overflow: hidden;
          box-sizing: border-box;
          border-left: solid 4px var(--navbar-background);
          border-bottom: solid 4px var(--navbar-background);
          opacity: 0;
          transform-origin: top left;
          transform: rotate(-45deg);
        }
        #nb-check:checked ~ .normalButton__check::after {
          animation: check ease .3s;
          animation-fill-mode: forwards;
        }
        #nb-check:checked ~ .normalButton__check {
          color: var(--foreground);
          background: var(--navbar-background);
        }
        @keyframes check {
          0%  { width: 0; height: 0; opacity: 0; }
          30% { width: 0; height: 10px; opacity: 1; }
          100%{ width: 16px; height: 10px; opacity: 1; }
        }
        .normalButton__button {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 280px;
          min-height: 64px;
          font-size: 16px;
          border-radius: 8px;
          font-weight: bold;
          background-color: transparent;
          border: none;
          text-decoration: none;
          box-sizing: border-box;
          padding: 8px 48px;
          color: var(--foreground);
          background: var(--theme-color-1);
          transition: all ease .3s;
          overflow: hidden;
          cursor: pointer;
        }
        .normalButton__button::before {
          content: 'Hold on a moment';
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          color: var(--foreground);
          background: var(--navbar-background);
          transition: all ease .7s;
        }
        .normalButton__button::after {
          content: '';
          position: absolute;
          top: 0;
          right: 32px;
          bottom: 0;
          margin: auto 0;
          width: 10px;
          height: 10px;
          box-sizing: border-box;
          border-top: solid 3px var(--foreground);
          border-right: solid 3px var(--foreground);
          transform: rotate(45deg);
          transition: all ease .3s;
        }
        #nb-check:checked ~ .normalButton__button::before {
          left: 100%;
        }
        #nb-check:checked ~ .normalButton__button {
          z-index: 3;
        }
        #nb-check:checked ~ .normalButton__button:hover {
          background: var(--theme-color-1);
        }
        #nb-check:checked ~ .normalButton__button:hover::after {
          right: 24px;
        }
        .tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
          width: 100%;
        }
        .tabs .tab {
          outline: 1px solid #262626; /* Adds the 1px outline */
          border-radius: 5px; /* Ensures rounded corners */
        }
        .tab {
          background: var(--navbar-background);
          color: var(--foreground);
          border: none;
          padding: 10px 20px;
          margin: 0 5px;
          cursor: pointer;
          border-radius: 5px;
        }
        .tab.active {
          background: var(--theme-color-1);
        }
        .tab-content {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default Disclaimer;
