"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface SectionContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  desktopPadding?: { left: string; right: string; top: string; bottom: string };
  mobilePadding?: { left: string; right: string; top: string; bottom: string };
  desktopVersionBottomThreshold?: number;
  desktopContentAlign?: "left" | "center" | "right";
  mobileContentAlign?: "left" | "center" | "right";
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  backgroundColor = "transparent",
  desktopPadding = { left: "24px", right: "24px", top: "0px", bottom: "0px" },
  mobilePadding = { left: "10px", right: "10px", top: "0px", bottom: "0px" },
  desktopVersionBottomThreshold = 768,
  desktopContentAlign = "left",
  mobileContentAlign = "center",
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
    <StyledContainer
      $isMobileView={isMobileView}
      $desktopPadding={desktopPadding}
      $mobilePadding={mobilePadding}
      $backgroundColor={backgroundColor}
      $desktopContentAlign={desktopContentAlign}
      $mobileContentAlign={mobileContentAlign}
    >
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{
  $isMobileView: boolean;
  $desktopPadding: { left: string; right: string; top: string; bottom: string };
  $mobilePadding: { left: string; right: string; top: string; bottom: string };
  $backgroundColor: string;
  $desktopContentAlign: "left" | "center" | "right";
  $mobileContentAlign: "left" | "center" | "right";
}>`
  background-color: ${(props) => props.$backgroundColor};
  padding: ${(props) =>
    props.$isMobileView
      ? `${props.$mobilePadding.top} ${props.$mobilePadding.right} ${props.$mobilePadding.bottom} ${props.$mobilePadding.left}`
      : `${props.$desktopPadding.top} ${props.$desktopPadding.right} ${props.$desktopPadding.bottom} ${props.$desktopPadding.left}`};
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: ${(props) => {
    const alignment = props.$isMobileView ? props.$mobileContentAlign : props.$desktopContentAlign;
    switch (alignment) {
      case "center":
        return "center";
      case "right":
        return "flex-end";
      default:
        return "flex-start";
    }
  }};
`;

export default SectionContainer;
