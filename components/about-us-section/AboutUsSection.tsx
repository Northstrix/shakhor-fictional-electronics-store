import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ChronicleButton from '@/components/chronicle-button/ChronicleButton';
import SectionHeaderText from '@/components/section-header-text/SectionHeaderText';
import SectionContainer from '@/components/section-container/SectionContainer';
import DicedGrid from '@/components/diced-grid/DicedGrid';
import Credit from '@/components/credit/Credit'

interface AboutUsSectionProps {
  desktopThreshold: number;
  aboutUsImages: string[];
  aboutUsDescription: string;
}

const TwoImageGrid = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  margin-bottom: 24px;
`;

const SquareImage = styled.img`
  width: calc(50% - 12px);
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 15px;
`;

const SingleImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 24px;
`;

// Styled components for widths of 1200px and above
const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: min(60%, 658px) 1fr;
  gap: 24px;
  align-items: center;
`;

const ImageGridWrapper = styled.div`
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center-aligns content, including the button */
  justify-content: center;
  text-align: center; /* Ensures text is centered */
  gap: 24px; /* Adds spacing between description and button */
`;


const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  desktopThreshold,
  aboutUsImages,
  aboutUsDescription,
}) => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showCredit, setShowCredit] = useState(false);

  const openCredit = () => setShowCredit(true);
  const closeCredit = () => setShowCredit(false);
  useEffect(() => {
    const handleResize = () => {
      if (sectionRef.current) {
        setViewportWidth(sectionRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopThreshold]);

  const renderImages = () => {
    if (viewportWidth < 1200) {
      // Width below 1200px
      if (viewportWidth < 600) {
        // Mobile view
        return (
          <SingleImage src={aboutUsImages[0]} alt="About Us" style={{ aspectRatio: '2 / 1' }} />
        );
      } else {
        // Tablet view
        return (
          <TwoImageGrid >
            <SquareImage src={aboutUsImages[3]} alt="About Us Image One" />
            <SquareImage src={aboutUsImages[1]} alt="About Us Image Two" />
          </TwoImageGrid>
        );
      }
    } else {
      // Width of 1200px or above
      return <DicedGrid images={aboutUsImages} />;
    }
  };
  
  return (
    <div ref={sectionRef}>
      <SectionHeaderText
        text="About Us"
        textColor="var(--foreground)"
        desktopPadding={{ left: '24px', right: '24px', top: '40px', bottom: '32px' }}
        mobilePadding={{ left: '10px', right: '10px', top: '30px', bottom: '24px' }}
        desktopFontSize="60px"
        mobileFontSize="33px"
        desktopVersionBottomThreshold={desktopThreshold}
      />
      <SectionContainer
        desktopPadding={{
          left: '24px',
          right: '24px',
          top: '0px',
          bottom: '0px',
        }}
        mobilePadding={{
          left: '10px',
          right: '10px',
          top: '0px',
          bottom: '0px',
        }}
        desktopVersionBottomThreshold={desktopThreshold}
      >
        {viewportWidth >= 1200 ? (
          // Desktop layout (1200px and above)
          <BentoGrid>
            <ImageGridWrapper>{renderImages()}</ImageGridWrapper>
            <TextContainer>
              <SectionHeaderText
                text={aboutUsDescription}
                textColor="var(--foreground)"
                desktopPadding={{ left: "0", right: "0", top: "0", bottom: "20" }}
                mobilePadding={{ left: "0", right: "0", top: "20", bottom: "20" }}
                desktopFontSize="1.14rem"
                mobileFontSize="1rem"
                desktopVersionBottomThreshold={desktopThreshold}
              />
              <ChronicleButton
                text="Credit"
                onClick={openCredit}
                hoverColor="#62d7ff"
              />
            </TextContainer>
          </BentoGrid>
        ) : (
          // Tablet/Mobile layout (below 1200px)
          <div>
            {renderImages()}
            <TextContainer>
              <SectionHeaderText
                text={aboutUsDescription}
                textColor="var(--foreground)"
                desktopPadding={{ left: "0", right: "0", top: "20", bottom: "20" }}
                mobilePadding={{ left: "0", right: "0", top: "20", bottom: "20" }}
                desktopFontSize="1.14rem"
                mobileFontSize="1rem"
                desktopVersionBottomThreshold={desktopThreshold}
              />
              <ChronicleButton
                text="Credit"
                onClick={openCredit}
                hoverColor="#62d7ff"
              />
            </TextContainer>
          </div>
        )}
      </SectionContainer>
      <div>
        {showCredit && <Credit onClose={closeCredit} />}
      </div>
    </div>
  );
  
};

export default AboutUsSection;
