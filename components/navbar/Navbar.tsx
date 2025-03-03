"use client";

import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import FancyNavBar from "@/components/fancy-navbar/FancyNavbar";
import {
  IconHome,
  IconDiscount,
  IconUserCheck,
  IconHelpHexagon,
  IconInfoCircle,
} from "@tabler/icons-react";

interface NavbarProps {
  desktopPadding: { leftRight: string; topBottom: string };
  mobilePadding: { leftRight: string; topBottom: string };
  desktopVersionBottomThreshold: number;
  onNavItemClick: (itemLabel: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  desktopPadding,
  mobilePadding,
  desktopVersionBottomThreshold,
  onNavItemClick,
}) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isFancyNavBarVisible, setIsFancyNavBarVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;

        // Check for mobile view and FancyNavBar visibility
        setIsMobileView(containerWidth < desktopVersionBottomThreshold);
        setIsFancyNavBarVisible(containerWidth >= 700); // Hide FancyNavBar if width < 700px
      }
    };

    handleResize(); // Initial check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [desktopVersionBottomThreshold]);

  return (
    <StickyNavbarWrapper>
      <NavbarContainer
        ref={containerRef}
        $isMobileView={isMobileView}
        $desktopPadding={desktopPadding.leftRight}
        $mobilePadding={mobilePadding.leftRight}
      >
        {/* Left Section */}
        <LeftSection
          $isMobileView={isMobileView}
          $desktopPadding={desktopPadding.leftRight}
          $mobilePadding={mobilePadding.leftRight}
        >
          <Link href="/" passHref legacyBehavior>
            <MainText $isMobileView={isMobileView}>Shakhor</MainText>
          </Link>
          <SecondaryText $isMobileView={isMobileView}>
            Cool, like a midnight in Austin!
          </SecondaryText>
        </LeftSection>

        {/* Center Section */}
        <CenterSection>
          {isFancyNavBarVisible && (
            <FancyNavBar
              items={[
                { icon: <IconHome size={22} />, label: "Home" },
                { icon: <IconDiscount size={22} />, label: "Today's Hottest Deals" },
                { icon: <IconUserCheck size={22} />, label: "Testimonials" },
                { icon: <IconHelpHexagon size={22} />, label: "FAQ" },
                { icon: <IconInfoCircle size={22} />, label: "About Us" },
              ]}
              onItemClick={(index) => {
                const clickedItem = [
                  "Home",
                  "Today's Hottest Deals",
                  "Testimonials",
                  "FAQ",
                  "About Us",
                ][index];
                onNavItemClick(clickedItem);
              }}
              activeIconColor="var(--foreground)"
              backgroundColor="var(--navbar-background)"
              foregroundColor="var(--theme-color-1)"
            />
          )}
        </CenterSection>

        {/* Right Section */}
        <RightSection
          $isMobileView={isMobileView}
          $desktopPadding={desktopPadding.leftRight}
          $mobilePadding={mobilePadding.leftRight}
        >
          <MainText as="a" href="tel:+12345678901" $isMobileView={isMobileView}>
            +1 (234) 567-8901
          </MainText>
          <SecondaryText $isMobileView={isMobileView}>
            Telegram, WhatsApp, Viber
          </SecondaryText>
        </RightSection>

        {/* Bottom Line */}
        <BottomLine />
      </NavbarContainer>
    </StickyNavbarWrapper>
  );
};

const StickyNavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
   z-index: 10000;
`;

const NavbarContainer = styled.div<{
  $isMobileView?: boolean;
  $desktopPadding?: string;
  $mobilePadding?: string;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  background-color: var(--navbar-background);
`;

const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--navbar-stripe-color);
`;

const LeftSection = styled.div<{
  $isMobileView?: boolean;
  $desktopPadding?: string;
  $mobilePadding?: string;
}>`
  display: flex;
  flex-direction: column;
  padding-left: ${(props) =>
    props.$isMobileView ? props.$mobilePadding : props.$desktopPadding};
`;

const CenterSection = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const MainText = styled.a<{ $isMobileView?: boolean }>`
  font-size: ${props => props.$isMobileView ? '20px' : '22px'};
  font-weight: bold;
  color: var(--theme-color-1);
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: var(--foreground);
    cursor: pointer;
  }
`;

const SecondaryText = styled.p<{ $isMobileView?: boolean }>`
  font-size: ${props => props.$isMobileView ? '12px' : '14px'};
  color: var(--theme-color-1);
`;

const RightSection = styled.div<{
  $isMobileView?: boolean;
  $desktopPadding?: string;
  $mobilePadding?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: ${(props) => props.$isMobileView ? props.$mobilePadding : props.$desktopPadding};
`;

export default Navbar;