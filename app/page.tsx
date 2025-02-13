"use client";
import React, { useRef, useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import styled from "styled-components";
import Navbar from "@/components/navbar/Navbar";
import SliderHeroSection from "@/components/slider-hero-section/SliderHeroSection";
import SectionHeaderTextHardcoded from "@/components/section-header-text-hardcoded/SectionHeaderTextHardcoded";
import SectionContainer from "@/components/section-container/SectionContainer";
import SectionHeaderText from "@/components/section-header-text/SectionHeaderText";
import InflectedCard from "@/components/inflected-card/InflectedCard";
import { IconCornerRightUp, IconFold } from "@tabler/icons-react";
import WhatsAppWidget from "@/components/whatsapp-widget/WhatsAppWidget"
import UnfoldingFAQ from "@/components/unfolding-faq/UnfoldingFAQ"
import AboutUsSection from '@/components/about-us-section/AboutUsSection';
import Footer from "@/components/footer/Footer"

const DESKTOP_THRESHOLD = 1000;

export default function Home() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const dealsRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const aboutUsRef = useRef<HTMLDivElement | null>(null);

  const [isMobileView, setIsMobileView] = useState(false);

  // Handle responsive switching for mobile and desktop views
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < DESKTOP_THRESHOLD);
    };

    // Check on mount and add resize listener
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavItemClick = (itemLabel: string) => {
    let ref;
    switch (itemLabel) {
      case "Home":
        ref = homeRef;
        break;
      case "Today's Hottest Deals":
        ref = dealsRef;
        break;
      case "Testimonials":
        ref = testimonialsRef;
        break;
      case "FAQ":
        ref = faqRef;
        break;
      case "About Us":
        ref = aboutUsRef;
        break;
      default:
        return;
    }

    // Scroll to the section if the ref exists
    if (ref && ref.current) {
      const yOffset = -69; // Offset for navbar height
      const element = ref.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const openGitHubRepository = () => {
    window.open("https://github.com/Northstrix/shakhor-fictional-electronics-store", "_blank", "noopener,noreferrer");
  };

  return (
    <PageContainer>
    <WhatsAppWidget
      name="Alice West"
      photo="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      status="online"
      nameTextColor= "var(--foreground)"
      statusTextColor= "var(--secondary-white)"
      containerHeaderBackground= "var(--theme-color-1)"
      containerBodyBackground= "#242424"
      containerBottomBackground= "var(--theme-color-2)"
      messageBackground= "var(--navbar-background)"
      messageTextColor= "var(--foreground)"
      defaultButtonBackground= "var(--theme-color-1)"
      hoveredButtonBackground= "#0077a0"
      buttonTextColor= "var(--foreground)"
      widgetRounding= "12px"
      onWhatsAppClick={openGitHubRepository}
      displayedMessage="Hi, I'm Alice from Shakhor. 🚀 Looking for brand new, pre-owned, or refurbished tech? We have great deals! What device interests you? Let's find a perfect match for you."
      selfPopUpsIn={3600}
      typingDotsColor= "#676767"
    />

      {/* Empty space to compensate for sticky navbar */}
      <Spacer />

      <ContentWrapper>
        <Navbar
          desktopPadding={{ leftRight: "24px", topBottom: "82px" }}
          mobilePadding={{ leftRight: "10px", topBottom: "69px" }}
          desktopVersionBottomThreshold={DESKTOP_THRESHOLD}
          onNavItemClick={handleNavItemClick}
        />
        <div ref={homeRef}>
          <SliderHeroSection
            title="Arguably, the best electronics store in Austin, Texas, offering customers competitively low prices, high-quality products, and huge discounts for loyal customers."
            showcaseOptions={[
              {
                text: "Brand New Electronics",
                imageUrl:
                  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                text: "Refurbished Devices",
                imageUrl:
                  "https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                text: "Pre-owned Electronics",
                imageUrl:
                  "https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ]}
            onOptionClick={(option) => console.log("Clicked item:", option)}
            onOptionHover={(option) => console.log("Hovered item:", option)}
            height="calc(100vh - 69px)"
            desktopPadding={{ leftRight: "24px", topBottom: "50px" }}
            mobilePadding={{ leftRight: "10px", topBottom: "41px" }}
            activeOptionColor="var(--theme-color-1)"
            desktopFontSize="60px"
            desktopVersionBottomThreshold={DESKTOP_THRESHOLD}
          />
        </div>
        <div ref={dealsRef}>
          <SectionHeaderTextHardcoded
            textColor="var(--foreground)"
            desktopPadding={{
              left: "24px",
              right: "24px",
              top: "40px",
              bottom: "32px",
            }}
            mobilePadding={{
              left: "10px",
              right: "10px",
              top: "30px",
              bottom: "24px",
            }}
            desktopFontSize="60px"
            mobileFontSize="33px"
            desktopVersionBottomThreshold={DESKTOP_THRESHOLD}
          />
          <SectionContainer
            desktopPadding={{
              left: "24px",
              right: "24px",
              top: "0px",
              bottom: "0px",
            }}
            mobilePadding={{
              left: "10px",
              right: "10px",
              top: "0px",
              bottom: "0px",
            }}
            desktopVersionBottomThreshold={DESKTOP_THRESHOLD}
          >
            <InflectedCard
              id="0"
              image="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color.jpeg"
              title="iPhone 15 Pro"
              description="Crafted with titanium, the iPhone 15 Pro features a groundbreaking camera for pro-level photos and videos. Experience its robust performance and elegant, lightweight design."
              tags={[
                {
                  name: "Brand new",
                  textColor: "#f7f7ff",
                  backgroundColor: "#9F4EFF",
                  rounding: 5,
                },
                {
                  name: "10% off",
                  textColor: "#242424",
                  backgroundColor: "#f1f1f7",
                  rounding: 5,
                },
              ]}
              parentBackgroundColor="var(--background)"
              cardRounding={15}
              fontSizes={
                isMobileView
                  ? {
                      title: "1.32rem",
                      description: "0.98rem",
                      tags: "0.9rem",
                      price: "0.94rem",
                    }
                  : {
                      title: "1.86rem",
                      description: "1.14rem",
                      tags: "0.94rem",
                      price: "1rem",
                    }
              }
              margins={{
                title: "0 0 7px 0",
                description: "0 0 22px 0",
                tags: "10px 0 0 0",
              }}
              buttonIcon={<IconCornerRightUp />}
              buttonIconSize={32}
              buttonIconColor="#ffffff"
              buttonIconHoverColor="#EEEEEE"
              buttonBackgroundColor="#9F4EFF"
              buttonBackgroundHoverColor="#a960ff"
              maxWidth="524px"
              imageHoverZoom={1.1}
              price="$1,079"
              priceTagTextColor="#f7f7ff"
              oldPrice="$1,199"
              priceTagRounding="25px"
            />

            <InflectedCard
              id="1"
              image="https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="iPhone 12"
              description="Featuring a Super Retina XDR display and A14 Bionic chip, the iPhone 12 offers enhanced speed, a dual-camera system, and 5G connectivity."
              tags={[
                { name: "Pre-owned", textColor: "#f7f7ff", backgroundColor: "#00A6FB", rounding: 8 },
                { name: "Pacific Blue", textColor: "#242424", backgroundColor: "#f1f1f7", rounding: 8 },
              ]}
              parentBackgroundColor="var(--background)"
              /*
              onClick={(target, id) => toast.info(`Clicked ${target} on card ${id}`)}
              onHover={(target, id) => toast.info(`Hovering over ${target} on card ${id}`)}
              */
              cardRounding={15}
              fontSizes={
                isMobileView
                  ? {
                      title: "1.32rem",
                      description: "0.98rem",
                      tags: "0.9rem",
                      price: "0.94rem",
                    }
                  : {
                      title: "1.86rem",
                      description: "1.14rem",
                      tags: "0.94rem",
                      price: "1rem",
                    }
              }
              margins={{
                title: "0 0 7px 0",
                description: "0 0 22px 0",
                tags: "10px 0 0 0",
              }}
              buttonIcon={<IconCornerRightUp />}
              buttonIconSize={32}
              buttonIconColor="#ffffff"
              buttonIconHoverColor="#EEEEEE"
              buttonBackgroundColor="#00A6FB"
              buttonBackgroundHoverColor="#0582CA"
              maxWidth="524px"
              imageHoverZoom={1.1}
              price="$159"
              priceTagRounding="25px"
              priceTagBackgroundColor = '#00A6FB'
              priceTagTextColor='#242424'
            />

            <InflectedCard
              id="2"
              image="https://images.unsplash.com/photo-1582046207438-595bf34ebbcf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Samsung Galaxy Fold"
              description="Innovative foldable smartphone with a sleek design that enhances portability while providing a large display for immersive viewing experiences and multitasking."
              tags={[
                { name: "Refurbished", textColor: "#f7f7ff", backgroundColor: "#FF3900", rounding: 2 },
                { name: "50% off", textColor: "#242424", backgroundColor: "#f1f1f7", rounding: 2 },
              ]}
              parentBackgroundColor="var(--background)"
              /*
              onClick={(target, id) => toast.info(`Clicked ${target} on card ${id}`)}
              onHover={(target, id) => toast.info(`Hovering over ${target} on card ${id}`)}
              */
              cardRounding={15}
              fontSizes={
                isMobileView
                  ? {
                      title: "1.32rem",
                      description: "0.98rem",
                      tags: "0.9rem",
                      price: "0.94rem",
                    }
                  : {
                      title: "1.86rem",
                      description: "1.14rem",
                      tags: "0.94rem",
                      price: "1rem",
                    }
              }
              margins={{
                title: "0 0 7px 0",
                description: "0 0 22px 0",
                tags: "10px 0 0 0",
              }}
              buttonIcon={<IconFold />}
              buttonIconSize={32}
              buttonIconColor="#ffffff"
              buttonIconHoverColor="#EEEEEE"
              buttonBackgroundColor="#FF3900"
              buttonBackgroundHoverColor="#FF5733"
              maxWidth="524px"
              imageHoverZoom={1.1}
              price="$549"
              priceTagTextColor="var(--background)"
              oldPrice="$1099"
              oldPriceTextColor="#565656"
              priceTagRounding="6px"
              priceTagBackgroundColor = 'rgba(255,255,255,0.78)'
            />

            <InflectedCard
              id="3"
              image="https://images.unsplash.com/photo-1511296933631-18b1a062212c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="iPhone X"
              description="סמארטפון אייקוני עם תצוגת Super Retina בגודל 5.8 אינץ', טכנולוגיית Face ID מתקדמת, מצלמות כפולות של 12MP ועיצוב חדשני שמהפכני בצילום הסלולרי."
              tags={[
                { name: "40% הנחה", textColor: "#242424", backgroundColor: "#f1f1f7", rounding: 15 },
                { name: "משומש", textColor: "#f7f7ff", backgroundColor: "#00A6FB", rounding: 15 },
              ]}
              parentBackgroundColor="var(--background)"
              /*
              onClick={(target, id) => toast.info(`Clicked ${target} on card ${id}`)}
              onHover={(target, id) => toast.info(`Hovering over ${target} on card ${id}`)}
              */
              cardRounding={36}
              fontSizes={
                isMobileView
                  ? {
                      title: "1.32rem",
                      description: "0.98rem",
                      tags: "0.9rem",
                      price: "0.94rem",
                    }
                  : {
                      title: "1.86rem",
                      description: "1.14rem",
                      tags: "0.94rem",
                      price: "1rem",
                    }
              }
              margins={{
                title: "0 0 7px 0",
                description: "0 0 22px 0",
                tags: "10px 0 0 0",
              }}
              buttonIcon={<IconCornerRightUp />}
              buttonIconSize={32}
              buttonIconColor="#ffffff"
              buttonIconHoverColor="#EEEEEE"
              buttonBackgroundColor="#00A6FB"
              buttonBackgroundHoverColor="#0582CA"
              maxWidth="524px"
              imageHoverZoom={1.5}
              price="₪594"
              priceTagTextColor="#f7f7ff"
              oldPrice="₪991"
              oldPriceOnTheRight={true}
              priceTagRounding="25px"
              mirrored={true}
              tagsAlignment="right"
              titleAlignment="center"
              descriptionAlignment="right"
            />
          </SectionContainer>
        </div>
        <div ref={testimonialsRef}>
          <SectionHeaderText
            text="Testimonials"
            textColor="var(--foreground)"
            desktopPadding={{ left: "24px", right: "24px", top: "40px", bottom: "32px" }}
            mobilePadding={{ left: "10px", right: "10px", top: "30px", bottom: "24px" }}
            desktopFontSize="60px"
            mobileFontSize="33px"
            desktopVersionBottomThreshold={DESKTOP_THRESHOLD}
          />
          <SectionHeaderText
            text="Making a difference, one customer at a time: get a glimpse of their stories!"
            textColor="var(--foreground)"
            desktopPadding={{ left: "24px", right: "24px", top: "0px", bottom: "32px" }}
            mobilePadding={{ left: "10px", right: "10px", top: "0px", bottom: "24px" }}
            desktopFontSize="1.14rem"
            mobileFontSize="1rem"
            desktopVersionBottomThreshold={DESKTOP_THRESHOLD}
          />
          <SectionContainer
            desktopPadding={{
              left: "24px",
              right: "24px",
              top: "0px",
              bottom: "0px",
            }}
            mobilePadding={{
              left: "10px",
              right: "10px",
              top: "0px",
              bottom: "0px",
            }}
            desktopVersionBottomThreshold={DESKTOP_THRESHOLD}
          >
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="slow"
            />
          </SectionContainer>
        </div>
        <div ref={faqRef}>
          <SectionHeaderText
            text="FAQ"
            textColor="var(--foreground)"
            desktopPadding={{ left: "24px", right: "24px", top: "40px", bottom: "32px" }}
            mobilePadding={{ left: "10px", right: "10px", top: "30px", bottom: "24px" }}
            desktopFontSize="60px"
            mobileFontSize="33px"
            desktopVersionBottomThreshold={DESKTOP_THRESHOLD}
          />
            <SectionHeaderText
              text="Still have questions? Browse our FAQs below or contact us for more help."
              textColor="var(--foreground)"
              desktopPadding={{ left: "24px", right: "24px", top: "0px", bottom: "32px" }}
              mobilePadding={{ left: "10px", right: "10px", top: "0px", bottom: "24px" }}
              desktopFontSize="1.14rem"
              mobileFontSize="1rem"
              desktopVersionBottomThreshold={DESKTOP_THRESHOLD}
            />
            <SectionContainer
              desktopPadding={{
                left: "24px",
                right: "24px",
                top: "0px",
                bottom: "0px",
              }}
              mobilePadding={{
                left: "10px",
                right: "10px",
                top: "0px",
                bottom: "0px",
              }}
              desktopVersionBottomThreshold={DESKTOP_THRESHOLD}
            >
              <UnfoldingFAQ faqs={FAQs} />
            </SectionContainer>
          </div>
          <div ref={aboutUsRef}>
            <AboutUsSection
              desktopThreshold={DESKTOP_THRESHOLD}
              aboutUsImages={aboutUsImages}
              aboutUsDescription={aboutUsDescription}
            />
            <AboutUsSpacer isMobile={isMobileView} />
          </div>
      </ContentWrapper>
      <Footer />
    </PageContainer>
  );
}

const aboutUsDescription = `
  Shakhor opened in July 2024 to address the growing demand for affordable and high-quality electronics in Austin, Texas. We offer competitive prices on a wide range of new, refurbished, and pre-owned products, including smartphones, tablets, laptops, gaming consoles, wearables, and more. Our carefully curated selection caters to tech enthusiasts, students, and professionals alike. What sets us apart is our commitment to customer satisfaction. Our expert staff provides personalized guidance to help you find the perfect device for your unique needs and lifestyle. By choosing Shakhor Electronics, you’re not just getting great deals on top-notch technology; you’re joining a community dedicated to making cutting-edge electronics accessible to all. We ensure that customers with limited budgets can afford quality refurbished and pre-owned devices, allowing everyone to experience the benefits of modern technology without breaking the bank.
`;

const aboutUsImages = [
  "https://images.unsplash.com/photo-1622531636820-5d727319e45d?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1603389335957-10bea39c9d32?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1695753456538-3d29fa0a4ba0?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const PageContainer = styled.div`
  background-color: var(--background);
`;

const Spacer = styled.div`
  height: 69px; /* Matches the height of the navbar */
`;

const AboutUsSpacer = styled.div<{ isMobile: boolean }>`
  height: ${(props) => (props.isMobile ? '28px' : '57px')};
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const testimonials = [
  {
      quote: "I was so hesitant about buying a laptop that wasn't brand new, but Shakhor proved me wrong! The quality is outstanding, and I got it for a steal.",
      name: "Alice Anderson",
      title: "First-Time Refurb Buyer"
  },
  {
      quote: "I needed a reliable phone without breaking the bank, and Shakhor was the answer. The quality is fantastic, and the savings were huge!",
      name: "Ben Baker",
      title: "Budget Shopper"
  },
  {
      quote: "I keep coming back to Shakhor because the prices are unbeatable, and the products are always top-notch. Why pay more for new?",
      name: "Charlotte Carter",
      title: "Repeat Customer"
  },
  {
      quote: "Shakhor made it so easy to upgrade my tablet without emptying my wallet. The quality is excellent, and I'm thrilled with my purchase.",
      name: "David Davis",
      title: "Tech Upgrade Enthusiast"
  },
  {
      quote: "I got a smartwatch that looks and functions like new, all thanks to Shakhor's amazing prices and quality. Highly recommend!",
      name: "Ethan Evans",
      title: "Smart Shopper"
  },
  {
      quote: "I was blown away by the quality of the phone I purchased—it felt brand new! Plus, the price was incredible. Thanks, Shakhor!",
      name: "Fiona Foster",
      title: "Satisfied Customer"
  },
  {
      quote: "The Sony headphones I bought from Shakhor sound amazing and were priced lower than anywhere else. Incredible value!",
      name: "George Garcia",
      title: "Music Lover"
  },
  {
      quote: "Finding an affordable tablet with great battery life was a breeze on Shakhor's website. I couldn't be happier with my purchase.",
      name: "Hannah Hill",
      title: "Informed Buyer"
  },
  {
      quote: "Shakhor is my go-to place for electronics. The service is great, and the prices are unbeatable for the quality you get.",
      name: "Isaac Ingram",
      title: "Electronics Enthusiast"
  },
  {
      quote: "I was hesitant about buying a refurbished product, but the smartwatch I got from Shakhor changed my mind. It's been perfect for my runs, and I saved so much money!",
      name: "Jessica Johnson",
      title: "Fitness Fanatic"
  },
  {
      quote: "I was looking for a high-quality refurbished phone, and Shakhor delivered exactly what I needed. The device looks and functions like new, and the price was unbeatable. I couldn’t be happier with my purchase!",
      name: "Kevin King",
      title: "Satisfied Buyer"
  },
  {
      quote: "There's no need to overpay for new electronics when Shakhor offers such great quality at such affordable prices. Highly recommend!",
      name: "Laura Lewis",
      title: "Smart Shopper"
  },
  {
      quote: "Shakhor helped me save money without sacrificing quality. I got an amazing laptop at a fraction of the cost of a new one!",
      name: "Michael Moore",
      title: "Budget-Friendly Buyer"
  },
  {
      quote: "Shakhor consistently offers great deals, so I often get smartwatches from there as gifts for my family members",
      name: "Nina Nelson",
      title: "Caring Family Member"
  },
  {
      quote: "The tablet I got from Shakhor is the great balance between budget and great experience when learning and studying!",
      name: "Oliver Owens",
      title: "Student Shopper"
  }
];

const FAQs = [
  {
    question: "What's the difference between refurbished and pre-owned electronics?",
    answer: (
      <p>
        Refurbished items have been restored to like-new condition and tested for functionality. Pre-owned items are used products that may show signs of previous use but are still in good working condition. Both offer great value compared to brand new items.
      </p>
    ),
  },
  {
    question: "Do you offer warranties on refurbished products?",
    answer: "Yes, we offer a 90-day warranty on all refurbished electronics. This covers any defects in materials or workmanship.",
  },
  {
    question: "Can I return a refurbished item if I'm not satisfied?",
    answer: (
      <p>
        Absolutely! We have a 30-day return policy for refurbished items. If you're not completely satisfied, you can return the product for a full refund or exchange. Please note that the item must be in its original condition with all accessories included.
      </p>
    ),
  },
  {
    question: "How do you ensure the quality of pre-owned electronics?",
    answer: "All pre-owned electronics undergo a thorough inspection process. We check for functionality, cosmetic condition, and ensure all essential components are present. Any issues are disclosed in the product description.",
  },
  {
    question: "Do you buy used electronics from customers?",
    answer: (
      <p>
        Yes, we do! We offer competitive prices for used electronics in good condition. You can bring your items to our store for an evaluation, or{" "}
        <a href="/trade-in" className="text-blue-500 underline">check our online trade-in program</a> for an estimate.
      </p>
    ),
  },
  {
    question: "How long does shipping usually take?",
    answer: (
      <ul>
        <li>Standard shipping: 3-5 business days</li>
        <li>Express shipping: 1-2 business days</li>
        <li>International shipping: 7-14 business days (varies by location)</li>
      </ul>
    ),
  },
  {
    question: "Do you price match?",
    answer: "Yes, we offer price matching on identical items from authorized retailers. Please contact our customer service team with the competitor's price and we'll be happy to review your request.",
  },
  {
    question: "Are your refurbished products tested for battery health?",
    answer: (
      <p>
        Yes, all refurbished devices with batteries (such as smartphones, laptops, and tablets) are tested for battery health. We ensure that the battery retains at least 80% of its original capacity. Battery health information is included in the product description.
      </p>
    ),
  },
  {
    question: "Are your products covered by manufacturer warranties?",
    answer: (
      <p>
        Brand new products come with full manufacturer warranties. Refurbished and pre-owned products include our store warranty but may not include manufacturer coverage unless specified in the product details.
      </p>
    ),
  },
  {
    question: "How can I contact customer service?",
    answer: (
      <p>
        You can reach us via email at{" "}
        <a href="mailto:support@shakhorelectronics.com" className="text-[var(--theme-color-1)] underline">support@shakhorelectronics.com</a>{" "}
        or call us at (234) 567-8901 during business hours (Sun-Fri, 9 AM - 5 PM).
      </p>
    ),
  },
];