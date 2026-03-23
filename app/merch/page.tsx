"use client";

import styled from 'styled-components';
import { colors } from '../components/StyledComponents';
import Navigation from '../components/Navigation';
import Image from 'next/image';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${colors.black};
  position: relative;
  overflow-x: hidden;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      /* Paper collage base texture */
      url('data:image/svg+xml;utf8,<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg"><defs><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><filter id="torn"><feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3"/><feDisplacementMap in="SourceGraphic" scale="20"/></filter></defs><rect width="100%" height="100%" fill="%23f5f5dc" filter="url(%23noise)" opacity="0.3"/><g filter="url(%23torn)" opacity="0.4"><path d="M0,0 L1200,50 L1200,800 L0,750 Z" fill="%23e8e8d0"/><path d="M50,0 L1250,100 L1250,850 L50,800 Z" fill="%23d4d4b8"/><path d="M100,0 L1300,150 L1300,900 L100,850 Z" fill="%23c0c0a0"/></g></svg>'),
      /* Grunge brush strokes */
      url('data:image/svg+xml;utf8,<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg"><defs><filter id="brush"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2"/><feDisplacementMap in="SourceGraphic" scale="15"/></filter></defs><g filter="url(%23brush)" opacity="0.25"><path d="M0,200 Q300,150 600,200 T1200,250 L1200,300 Q900,250 600,300 T0,350 Z" fill="%23cc0000"/><path d="M0,400 Q400,350 800,400 T1200,450 L1200,500 Q800,450 400,500 T0,550 Z" fill="%23990000"/><path d="M0,600 Q500,550 1000,600 T1200,650 L1200,700 Q1000,650 500,700 T0,750 Z" fill="%23800000"/></g></svg>'),
      /* Torn paper edges */
      url('data:image/svg+xml;utf8,<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg"><defs><filter id="tear"><feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3"/><feDisplacementMap in="SourceGraphic" scale="25"/></filter></defs><g filter="url(%23tear)" opacity="0.3"><path d="M0,0 L1200,0 L1200,50 Q1100,25 1000,50 T800,25 T600,50 T400,25 T200,50 T0,25 Z" fill="%23ffffff"/><path d="M0,750 Q200,775 400,750 T800,775 T1200,750 L1200,800 L0,800 Z" fill="%23ffffff"/><path d="M0,0 L50,0 Q25,100 50,200 T25,400 T50,600 T25,800 L0,800 Z" fill="%23ffffff"/><path d="M1150,0 L1200,0 L1200,800 L1150,800 Q1175,600 1150,400 T1175,200 T1150,0 Z" fill="%23ffffff"/></g></svg>'),
      /* Additional grunge overlays */
      radial-gradient(ellipse at 30% 20%, #cc000015 0%, transparent 60%),
      radial-gradient(ellipse at 70% 80%, #99000012 0%, transparent 70%),
      radial-gradient(ellipse at 20% 60%, #80000010 0%, transparent 80%);
    opacity: 0.5;
    z-index: 0;
  }
`;

const Content = styled.div`
  padding-top: 100px;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    padding-top: 80px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  @media (max-width: 480px) {
    padding-top: 70px;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 4rem 0 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 2rem 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0 0.5rem;
  }
`;

const Title = styled.h1`
  font-family: 'Orbitron', monospace;
  font-size: 4rem;
  font-weight: 900;
  color: ${colors.red};
  text-shadow: 3px 3px 0px ${colors.black};
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-family: 'Orbitron', monospace;
  font-size: 1.2rem;
  color: ${colors.white};
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const FeaturedImageContainer = styled.div`
  margin: 0 0 2rem;
  position: relative;
  border: 3px solid ${colors.red};
  border-radius: 8px;
  overflow: hidden;
  background: ${colors.black};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid ${colors.dustyRed};
    transform: rotate(0.5deg);
    pointer-events: none;
    z-index: 1;
  }
`;

const LatestDropSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 0 auto 3.5rem;
  align-items: start;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin: 0 auto 2.5rem;
  }
`;

const NewestDropCard = styled.div`
  padding: 2rem;
  background: ${colors.darkGrey}90;
  border: 2px solid ${colors.red};
  border-radius: 8px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid ${colors.dustyRed};
    transform: rotate(0.4deg);
    pointer-events: none;
  }
`;

const NewestDropTitle = styled.h2`
  font-family: 'Orbitron', monospace;
  font-size: 1.9rem;
  color: ${colors.red};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
  text-shadow: 2px 2px 0px ${colors.black};

  @media (max-width: 768px) {
    font-size: 1.45rem;
    letter-spacing: 0.06em;
  }
`;

const NewestDropText = styled.p`
  color: ${colors.white};
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 auto 1rem;
  max-width: 640px;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const PriceLine = styled.p`
  color: ${colors.white};
  font-family: 'Orbitron', monospace;
  font-size: 1rem;
  letter-spacing: 0.04em;
  margin: 0.35rem 0;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.92rem;
  }
`;

const ContactOrderLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: ${colors.red};
  font-family: 'Orbitron', monospace;
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  padding: 0.7rem 1.4rem;
  border: 2px solid ${colors.red};
  border-radius: 4px;
  background: ${colors.red}10;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.red}20;
    box-shadow: 0 0 15px ${colors.red}35;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
`;

const LatestDropImageContainer = styled.div`
  position: relative;
  border: 3px solid ${colors.red};
  border-radius: 8px;
  overflow: hidden;
  background: ${colors.black};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid ${colors.dustyRed};
    transform: rotate(0.5deg);
    pointer-events: none;
    z-index: 1;
  }

`;

const CollabText = styled.div`
  text-align: center;
  margin: 2.5rem 0 3.5rem;
  padding: 2rem;
  background: ${colors.darkGrey}60;
  border: 2px solid ${colors.red}50;
  border-radius: 8px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin: 1.5rem 0 2.5rem;
    padding: 1.5rem 1.25rem;
  }
`;

const CollabDescription = styled.p`
  font-size: 1.15rem;
  color: ${colors.white};
  margin-bottom: 1.25rem;
  line-height: 1.7;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const CollabLink = styled.a`
  color: ${colors.red};
  font-family: 'Orbitron', monospace;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 2px solid ${colors.red};
  border-radius: 4px;
  transition: all 0.3s ease;
  background: ${colors.red}10;
  text-decoration: none;
  
  &:hover {
    background: ${colors.red}20;
    border-color: ${colors.red};
    box-shadow: 0 0 15px ${colors.red}40;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.65rem 1.25rem;
  }
`;

const StandaloneImageContainer = styled.div`
  margin: 3.5rem auto;
  position: relative;
  border: 3px solid ${colors.red};
  border-radius: 8px;
  overflow: hidden;
  background: ${colors.black};
  max-width: 900px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid ${colors.dustyRed};
    transform: rotate(0.5deg);
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    margin: 2rem auto;
  }
`;

const ProductSection = styled.section`
  margin: 5rem 0;
  padding: 4rem 2rem 8rem;
  background: ${colors.darkGrey}80;
  border: 2px solid ${colors.red};
  position: relative;
  overflow: visible;
  min-height: 800px;
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid ${colors.dustyRed};
    transform: rotate(1deg);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    margin: 2.5rem 0;
    padding: 2.25rem 1rem 3rem;
    min-height: 560px;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0.85rem 2.5rem;
    min-height: 500px;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Orbitron', monospace;
  font-size: 2.25rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-shadow: 2px 2px 0px ${colors.black};
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.55rem;
    margin-bottom: 1.75rem;
  }
`;

const StackContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  
  @media (max-width: 768px) {
    height: 420px;
    max-width: 520px;
  }
  
  @media (max-width: 480px) {
    height: 340px;
    max-width: 340px;
  }
`;

const StackImageBack = styled.div`
  position: absolute;
  top: 27%;
  right: 10%;
  width: 45%;
  height: 85%;
  border: 3px solid ${colors.red};
  border-radius: 8px;
  overflow: hidden;
  background: ${colors.black};
  transform: rotate(-3deg);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid ${colors.dustyRed};
    transform: rotate(0.5deg);
    pointer-events: none;
    z-index: 1;
  }
`;

const StackImageFront = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  width: 45%;
  height: 85%;
  border: 3px solid ${colors.red};
  border-radius: 8px;
  overflow: hidden;
  background: ${colors.black};
  transform: rotate(3deg);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
  z-index: 2;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: rotate(4deg) scale(1.01);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid ${colors.dustyRed};
    transform: rotate(-0.5deg);
    pointer-events: none;
    z-index: 1;
  }
`;

const SupportSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  margin: 5rem 0;
  padding: 3rem;
  background: ${colors.darkGrey}80;
  border: 2px solid ${colors.red};
  position: relative;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid ${colors.dustyRed};
    transform: rotate(1deg);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    padding: 1.5rem 1rem;
    margin: 2.75rem 0 2rem;
  }
`;

const SupportImageContainer = styled.div`
  position: relative;
  border: 3px solid ${colors.red};
  border-radius: 8px;
  overflow: hidden;
  background: ${colors.black};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid ${colors.dustyRed};
    transform: rotate(0.5deg);
    pointer-events: none;
    z-index: 1;
  }
`;

const SupportText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const SupportTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-shadow: 2px 2px 0px ${colors.black};
  
  @media (max-width: 768px) {
    font-size: 1.55rem;
    margin-bottom: 0.75rem;
  }
`;

const SupportDescription = styled.p`
  font-size: 1.2rem;
  color: ${colors.white};
  line-height: 1.8;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.65;
  }
`;

export default function Merch() {
  return (
    <PageContainer>
      <Navigation />
      <Content>
        <HeroSection>
          <Title>MERCH</Title>
          <Subtitle>BST Apparel & Gear</Subtitle>
        </HeroSection>

        <LatestDropSection>
          <NewestDropCard>
            <NewestDropTitle>Shop Our Latest Drop</NewestDropTitle>
            <NewestDropText>
              Oversized BST T-shirt available now. Reach out and we will help you place your order fast.
            </NewestDropText>
            <PriceLine>Oversized T-Shirt: $60</PriceLine>
            <PriceLine>Sweatpants: $75</PriceLine>
            <PriceLine>Hoodies: $85</PriceLine>
            <ContactOrderLink href="/contact">Contact Us to Order</ContactOrderLink>
          </NewestDropCard>

          <LatestDropImageContainer>
            <Image 
              src="/ShirtBSTTop.JPEG" 
              alt="BST Oversized T-Shirt" 
              width={800}
              height={1000}
              style={{ 
                width: '100%', 
                height: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </LatestDropImageContainer>
        </LatestDropSection>

        {/* Featured Image - SUllySeanLucas */}
        <FeaturedImageContainer>
          <Image 
            src="/SUllySeanLucas.JPG" 
            alt="BST x Butterfly X Collaboration" 
            width={1200}
            height={1600}
            style={{ 
              width: '100%', 
              height: 'auto',
              display: 'block'
            }}
            priority
          />
        </FeaturedImageContainer>

        {/* Collab Text */}
        <CollabText>
          <CollabDescription>
            BST x Butterfly X collaboration piece. Limited release styling built for standout training and everyday wear.
          </CollabDescription>
          <CollabLink href="/contact">Contact Us for Collaboration Orders</CollabLink>
        </CollabText>

        {/* BST Sweat Hoodie Standalone */}
        <StandaloneImageContainer>
          <Image 
            src="/BSTSweatHoodie.jpg" 
            alt="BST Sweat Hoodie" 
            width={600}
            height={800}
            style={{ 
              width: '100%', 
              height: 'auto',
              display: 'block'
            }}
          />
        </StandaloneImageContainer>

        {/* Hoodies Section with Stack Effect */}
        <ProductSection>
          <SectionTitle>Premium Hoodies</SectionTitle>
          <StackContainer>
            <StackImageBack>
              <Image 
                src="/HoodieBack.JPEG" 
                alt="BST Hoodie Back" 
                width={500}
                height={600}
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </StackImageBack>
            <StackImageFront>
              <Image 
                src="/HoodieFront.JPEG" 
                alt="BST Hoodie Front" 
                width={500}
                height={600}
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </StackImageFront>
          </StackContainer>
        </ProductSection>

        {/* Sweatpants Section with Stack Effect */}
        <ProductSection>
          <SectionTitle>Premium Sweatpants</SectionTitle>
          <StackContainer>
            <StackImageBack>
              <Image 
                src="/SweatPantsBack.JPEG" 
                alt="BST Sweatpants Back" 
                width={500}
                height={600}
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </StackImageBack>
            <StackImageFront>
              <Image 
                src="/SweatPantsFront.JPEG" 
                alt="BST Sweatpants Front" 
                width={500}
                height={600}
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </StackImageFront>
          </StackContainer>
        </ProductSection>

        {/* Support Section with Ryan Wenis */}
        <SupportSection>
          <SupportImageContainer>
            <Image 
              src="/RyanWenis.JPG" 
              alt="Support Our Team" 
              width={600}
              height={800}
              style={{ 
                width: '100%', 
                height: 'auto',
                display: 'block'
              }}
            />
          </SupportImageContainer>
          <SupportText>
            <SupportTitle>Support Our Team Today!</SupportTitle>
            <SupportDescription>
              Get your BST gear and show your support for the team. 
              Quality apparel designed for training and everyday wear. 
              Represent Blood Sweat and Tears wherever you go.
            </SupportDescription>
          </SupportText>
        </SupportSection>
      </Content>
    </PageContainer>
  );
}
