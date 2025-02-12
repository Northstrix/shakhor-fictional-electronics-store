"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface SectionHeaderTextProps {
  text: string;
  textColor?: string;
  desktopPadding?: { left: string; right: string; top: string; bottom: string };
  mobilePadding?: { left: string; right: string; top: string; bottom: string };
  desktopFontSize?: string;
  mobileFontSize?: string;
  desktopVersionBottomThreshold?: number;
  desktopTextAlign?: "left" | "center" | "right";
  mobileTextAlign?: "left" | "center" | "right";
  isBold?: boolean;
}

const SectionHeaderText: React.FC<SectionHeaderTextProps> = ({
  text,
  textColor = "#00A7E1",
  desktopPadding = { left: "24px", right: "24px", top: "50px", bottom: "30px" },
  mobilePadding = { left: "10px", right: "10px", top: "41px", bottom: "20px" },
  desktopFontSize = "62px",
  mobileFontSize = "33px",
  desktopVersionBottomThreshold = 768,
  desktopTextAlign = "left",
  mobileTextAlign = "center",
  isBold = false,
}) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < desktopVersionBottomThreshold);
    };

    // Check on mount and add resize listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [desktopVersionBottomThreshold]);

  return (
    <HeaderContainer
      $isMobileView={isMobileView}
      $desktopPadding={desktopPadding}
      $mobilePadding={mobilePadding}
      $desktopFontSize={desktopFontSize}
      $mobileFontSize={mobileFontSize}
      $textColor={textColor}
      $desktopTextAlign={desktopTextAlign}
      $mobileTextAlign={mobileTextAlign}
      $isBold={isBold}
    >
      {text}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.h1<{
  $isMobileView: boolean;
  $desktopPadding: { left: string; right: string; top: string; bottom: string };
  $mobilePadding: { left: string; right: string; top: string; bottom: string };
  $desktopFontSize: string;
  $mobileFontSize: string;
  $textColor: string;
  $desktopTextAlign: "left" | "center" | "right";
  $mobileTextAlign: "left" | "center" | "right";
  $isBold: boolean;
}>`
  color: ${(props) => props.$textColor};
  font-size: ${(props) =>
    props.$isMobileView ? props.$mobileFontSize : props.$desktopFontSize};
  padding: ${(props) =>
    props.$isMobileView
      ? `${props.$mobilePadding.top} ${props.$mobilePadding.right} ${props.$mobilePadding.bottom} ${props.$mobilePadding.left}`
      : `${props.$desktopPadding.top} ${props.$desktopPadding.right} ${props.$desktopPadding.bottom} ${props.$desktopPadding.left}`};
  text-align: ${(props) => props.$isMobileView ? props.$mobileTextAlign : props.$desktopTextAlign};
  font-weight: ${(props) => (props.$isBold ? "bold" : "normal")};
`;

export default SectionHeaderText;
