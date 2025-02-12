"use client";

import React, { useState, useEffect } from 'react';

interface CreditProps {
  onClose: () => void;
}

const Credit: React.FC<CreditProps> = ({ onClose }) => {
  const [textSize, setTextSize] = useState("0.98rem");

  useEffect(() => {
    const handleResize = () => {
      setTextSize(window.innerWidth < 574 ? "0.76rem" : "0.98rem");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="credit-container">
      <div className="credit-content">
        <h2>Credit</h2>
        <p className="credit-intro">
          The existence of this project (at least in its current form) wouldn't've been possible without the following:
        </p>
        <ul className="credit-list">
          <li>
            <a href="https://codepen.io/Haaguitos/pen/OJrVZdJ" target="_blank" rel="noopener noreferrer" className="credit-link">
              Chronicle Button
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/Haaguitos" target="_blank" rel="noopener noreferrer" className="credit-link">
              Haaguitos
            </a>
          </li>
          <li>
            <a href="https://codepen.io/kristen17/pen/pomgrKp" target="_blank" rel="noopener noreferrer" className="credit-link">
              Cards with inverted border-radius #scss
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/kristen17" target="_blank" rel="noopener noreferrer" className="credit-link">
              Kristen
            </a>
          </li>
          <li>
            <a href="https://codepen.io/utilitybend/pen/VwBRNwm" target="_blank" rel="noopener noreferrer" className="credit-link">
              Named scroll-timeline vertical
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/utilitybend" target="_blank" rel="noopener noreferrer" className="credit-link">
              utilitybend
            </a>
          </li>
          <li>
            <a href="https://codepen.io/zzznicob/pen/GRPgKLM" target="_blank" rel="noopener noreferrer" className="credit-link">
              JTB studios - Link
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/zzznicob" target="_blank" rel="noopener noreferrer" className="credit-link">
              Nico
            </a>
          </li>
          <li>
            <a href="https://codepen.io/ash_creator/pen/JjZReNm" target="_blank" rel="noopener noreferrer" className="credit-link">
              チェックしないと押せないボタン
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/ash_creator" target="_blank" rel="noopener noreferrer" className="credit-link">
              あしざわ - Webクリエイター
            </a>
          </li>
          <li>
            <a href="https://codepen.io/jkantner/pen/OJKZxpv" target="_blank" rel="noopener noreferrer" className="credit-link">
              Toolbars With Sliding Selection
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/jkantner" target="_blank" rel="noopener noreferrer" className="credit-link">
              Jon Kantner
            </a>
          </li>
          <li>
            <a href="https://codepen.io/yudizsolutions/pen/YzgXvZJ" target="_blank" rel="noopener noreferrer" className="credit-link">
              Gsap Slider
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/yudizsolutions" target="_blank" rel="noopener noreferrer" className="credit-link">
              Yudiz Solutions Limited
            </a>
          </li>
          <li>
            <a href="https://codepen.io/Neal-Simari/pen/wvLvGQp" target="_blank" rel="noopener noreferrer" className="credit-link">
              Untitled
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/Neal-Simari" target="_blank" rel="noopener noreferrer" className="credit-link">
              Neal Simari
            </a>
          </li>
          <li>
            <a href="https://ui.aceternity.com/components/container-cover" target="_blank" rel="noopener noreferrer" className="credit-link">
            Cover
            </a>{" "}
            by{" "}
            <a href="https://ui.aceternity.com" target="_blank" rel="noopener noreferrer" className="credit-link">
            Aceternity UI
            </a>
        </li>
        <li>
            <a href="https://ui.aceternity.com/components/infinite-moving-cards" target="_blank" rel="noopener noreferrer" className="credit-link">
            Infinite Moving Cards
            </a>{" "}
            by{" "}
            <a href="https://ui.aceternity.com" target="_blank" rel="noopener noreferrer" className="credit-link">
            Aceternity UI
            </a>
        </li>
        <li>
            <a href="https://ui.aceternity.com/components/meteors" target="_blank" rel="noopener noreferrer" className="credit-link">
            Meteor Effect
            </a>{" "}
            by{" "}
            <a href="https://ui.aceternity.com" target="_blank" rel="noopener noreferrer" className="credit-link">
            Aceternity UI
            </a>
        </li>
        <li>
            <a href="https://hextaui.com/docs/animation/spotlight-card" target="_blank" rel="noopener noreferrer" className="credit-link">
            Spotlight Card
            </a>{" "}
            by{" "}
            <a href="https://hextaui.com" target="_blank" rel="noopener noreferrer" className="credit-link">
            HextaUI
            </a>
        </li>
        <li>
            <a href="https://ui.aceternity.com/components/sparkles" target="_blank" rel="noopener noreferrer" className="credit-link">
            Sparkles
            </a>{" "}
            by{" "}
            <a href="https://ui.aceternity.com" target="_blank" rel="noopener noreferrer" className="credit-link">
            Aceternity UI
            </a>
        </li>
        <li>
            <a href="https://codepen.io/t_afif/pen/LEPBYvK" target="_blank" rel="noopener noreferrer" className="credit-link">
            Inverted border-radius using CSS mask II
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/t_afif" target="_blank" rel="noopener noreferrer" className="credit-link">
            Temani Afif
            </a>
        </li>
        <li>
            Photo by{" "}
            <a href="https://unsplash.com/@ilyapavlov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Ilya Pavlov
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/woman-standing-beside-lights-xE87C_OvVO4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Unsplash
            </a>
        </li>
        <li>
            Photo by{" "}
            <a href="https://unsplash.com/@anckor?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Julian O'hayon
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/space-black-case-apple-watch-silver-macbook-pro-jet-black-iphone-7-plus-and-silver-imac-with-corresponding-boxes-Bs-zngH79Ds?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Unsplash
            </a>
        </li>
        <li>
            Photo by{" "}
            <a href="https://unsplash.com/@rmrdnl?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Daniel Romero
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/white-and-blue-game-controller-TpXoTb1uR5A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Unsplash
            </a>
        </li>
        <li>
            Photo by{" "}
            <a href="https://unsplash.com/@rmrdnl?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Daniel Romero
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/person-holding-pink-and-black-iphone-case-jcJFOwBTEck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Unsplash
            </a>
        </li>
        <li>
            Photo by{" "}
            <a href="https://www.pexels.com/@zana-latif-2772032/" target="_blank" rel="noopener noreferrer" className="credit-link">
            Zana Latif
            </a>{" "}
            from{" "}
            <a href="https://www.pexels.com/photo/unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy-18525574/" target="_blank" rel="noopener noreferrer" className="credit-link">
            Pexels
            </a>
        </li>
        <li>
            <a href="https://ui.aceternity.com/components/container-cover" target="_blank" rel="noopener noreferrer" className="credit-link">
            Cover
            </a>{" "}
            by{" "}
            <a href="https://ui.aceternity.com" target="_blank" rel="noopener noreferrer" className="credit-link">
            Aceternity UI
            </a>
        </li>
        <li>
            <a href="https://ui.aceternity.com/components/infinite-moving-cards" target="_blank" rel="noopener noreferrer" className="credit-link">
            Infinite Moving Cards
            </a>{" "}
            by{" "}
            <a href="https://ui.aceternity.com" target="_blank" rel="noopener noreferrer" className="credit-link">
            Aceternity UI
            </a>
        </li>
        <li>
            <a href="https://ui.aceternity.com/components/meteors" target="_blank" rel="noopener noreferrer" className="credit-link">
            Meteor Effect
            </a>{" "}
            by{" "}
            <a href="https://ui.aceternity.com" target="_blank" rel="noopener noreferrer" className="credit-link">
            Aceternity UI
            </a>
        </li>
        <li>
            <a href="https://hextaui.com/docs/animation/spotlight-card" target="_blank" rel="noopener noreferrer" className="credit-link">
            Spotlight Card
            </a>{" "}
            by{" "}
            <a href="https://hextaui.com" target="_blank" rel="noopener noreferrer" className="credit-link">
            HextaUI
            </a>
        </li>
        <li>
            <a href="https://ui.aceternity.com/components/sparkles" target="_blank" rel="noopener noreferrer" className="credit-link">
            Sparkles
            </a>{" "}
            by{" "}
            <a href="https://ui.aceternity.com" target="_blank" rel="noopener noreferrer" className="credit-link">
            Aceternity UI
            </a>
        </li>
        <li>
            <a href="https://codepen.io/t_afif/pen/LEPBYvK" target="_blank" rel="noopener noreferrer" className="credit-link">
            Inverted border-radius using CSS mask II
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/t_afif" target="_blank" rel="noopener noreferrer" className="credit-link">
            Temani Afif
            </a>
        </li>
        <li>
            Photo by{" "}
            <a href="https://unsplash.com/@ilyapavlov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Ilya Pavlov
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/woman-standing-beside-lights-xE87C_OvVO4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Unsplash
            </a>
        </li>
        <li>
            Photo by{" "}
            <a href="https://unsplash.com/@anckor?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Julian O'hayon
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/space-black-case-apple-watch-silver-macbook-pro-jet-black-iphone-7-plus-and-silver-imac-with-corresponding-boxes-Bs-zngH79Ds?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Unsplash
            </a>
        </li>
        <li>
            Photo by{" "}
            <a href="https://unsplash.com/@rmrdnl?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Daniel Romero
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/white-and-blue-game-controller-TpXoTb1uR5A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Unsplash
            </a>
        </li>
        <li>
            Photo by{" "}
            <a href="https://unsplash.com/@rmrdnl?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Daniel Romero
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/person-holding-pink-and-black-iphone-case-jcJFOwBTEck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
            Unsplash
            </a>
        </li>
        <li>
            Photo by{" "}
            <a href="https://unsplash.com/@zana_qaradaghy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
                Zana Latif
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/silver-iphone-6-beside-silver-and-black-wireless-headphones-gtX5DIIHGqE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="credit-link">
                Unsplash
            </a>
            </li>
            </ul>
        <div className="button-container">
            <div className="normalButton">
                <button onClick={onClose} className="normalButton__button">
                    OK
                </button>
            </div>
        </div>
      </div>
      <style jsx>{`
        .normalButton {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 20px;
        }
        .normalButton__button {
            position: relative;
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 160px;
            height: 49px;
            font-size: 16px;
            border-radius: 0.76em;
            font-weight: bold;
            background-color: var(--foreground);
            border: none;
            color: var(--background);
            cursor: pointer;
            transition: all ease 0.3s;
        }
        .normalButton__button:hover {
            background-color: var(--theme-color-1);
        }
        .credit-container {
          position: fixed;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10010;
          background-color: rgba(0, 0, 0, 0.7);
          padding-top: 69px;
        }
        .credit-content {
          width: 84vw;
          max-width: 540px;
          max-height: calc(76vh - 69px);
          overflow-y: auto;
          background: var(--answer-background);
          border-radius: 3px;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          text-align: center;
          border: 1px solid #262626;
          color: var(--foreground);
        }
        h2 {
          margin: 5px 0 15px;
          color: var(--foreground);
          font-size: 1.5rem;
          font-weight: bold;
        }
        .credit-intro {
          margin: 10px 0;
          line-height: 1.4;
          font-size: ${textSize};
          text-align: center;
        }
        .credit-list {
          margin: 10px 0;
          padding-left: 20px;
          text-align: left;
          align-self: flex-start;
        }
        .credit-list li {
          margin-bottom: 10px;
          line-height: 1.4;
          font-size: ${textSize};
        }
        .credit-link {
          color: var(--foreground);
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }
        .credit-link:hover {
          color: var(--theme-color-1);
        }
        .credit-link::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: var(--foreground);
          transform: scaleX(1);
          transition: transform 0.3s ease;
        }
        .credit-link:hover::after {
          transform: scaleX(0);
        }
        .button-container {
          margin-top: 20px;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default Credit;