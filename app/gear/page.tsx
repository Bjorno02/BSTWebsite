"use client";

import styled from 'styled-components';
import { colors } from '../components/StyledComponents';
import Navigation from '../components/Navigation';

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
  padding: 4rem 0;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0;
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

const GearSection = styled.section`
  margin: 3rem 0;
  padding: 2.5rem;
  background: ${colors.darkGrey}80;
  border: 3px solid ${colors.red};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid ${colors.dustyRed};
    transform: rotate(1deg);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    margin: 2rem 0;
    padding: 2rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin: 1.5rem 0;
    padding: 1.5rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 2px 2px 0px ${colors.black};
  
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const GearDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${colors.white};
  margin-bottom: 2rem;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const GearGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const GearItem = styled.div`
  background: ${colors.black}80;
  border: 2px solid ${colors.red};
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  
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
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 0 0 2px ${colors.black},
      0 0 0 4px ${colors.red},
      0 0 20px ${colors.red}30;
  }
`;

const GearItemTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 1rem;
  text-transform: uppercase;
  text-shadow: 1px 1px 0px ${colors.black};
`;

const GearItemDescription = styled.p`
  color: ${colors.white};
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: ${colors.darkGrey}40;
  border: 2px solid ${colors.red};
  text-align: center;
  margin: 3rem 0;
  position: relative;
  
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
    padding: 3rem 1.5rem;
    margin: 2rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem;
    margin: 1.5rem 0;
  }
`;

const ContactText = styled.p`
  color: ${colors.white};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  background: ${colors.red};
  color: ${colors.white};
  border: 2px solid ${colors.red};
  font-family: 'Orbitron', monospace;
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    background: transparent;
    color: ${colors.red};
    box-shadow: 0 0 10px ${colors.red}50;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.875rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.75rem 1.25rem;
  }
`;

export default function Gear() {
  return (
    <PageContainer>
      <Navigation />
      <Content>
        <HeroSection>
          <Title>GEAR</Title>
          <Subtitle>Essential Equipment for Training</Subtitle>
        </HeroSection>

        <GearSection>
          <SectionTitle>Training Gear</SectionTitle>
          <GearDescription>
            At BST Jiu-Jitsu, we offer quality gear and equipment to support your martial arts journey. 
            Whether you're just starting out or looking to upgrade your equipment, we have what you need 
            to train safely and effectively.
          </GearDescription>

          <GearGrid>
            <GearItem>
              <GearItemTitle>Rash Guards</GearItemTitle>
              <GearItemDescription>
                High-quality rash guards for No-Gi training. Available in various sizes and designs. 
                Perfect for protecting your skin during intense training sessions.
              </GearItemDescription>
            </GearItem>

            <GearItem>
              <GearItemTitle>Shorts</GearItemTitle>
              <GearItemDescription>
                Durable training shorts designed for grappling. Comfortable fit with reinforced stitching 
                for long-lasting performance.
              </GearItemDescription>
            </GearItem>

            <GearItem>
              <GearItemTitle>Mouthguards</GearItemTitle>
              <GearItemDescription>
                Essential protection for sparring and competition. Custom-fit options available. 
                Protect your teeth and reduce risk of injury.
              </GearItemDescription>
            </GearItem>

            <GearItem>
              <GearItemTitle>Hand Wraps</GearItemTitle>
              <GearItemDescription>
                Professional hand wraps for Muay Thai and striking training. Proper wrist support 
                and hand protection for heavy bag work and sparring.
              </GearItemDescription>
            </GearItem>

            <GearItem>
              <GearItemTitle>Shin Guards</GearItemTitle>
              <GearItemDescription>
                Quality shin guards for Muay Thai training. Lightweight and durable protection 
                for your shins during pad work and sparring sessions.
              </GearItemDescription>
            </GearItem>

            <GearItem>
              <GearItemTitle>Gloves</GearItemTitle>
              <GearItemDescription>
                Boxing and Muay Thai gloves in various sizes. From training gloves to competition-grade 
                equipment. Find the perfect fit for your training needs.
              </GearItemDescription>
            </GearItem>
          </GearGrid>
        </GearSection>

        <GearSection>
          <SectionTitle>Special Offers</SectionTitle>
          <GearDescription>
            New to BST? Take advantage of our special gear package! Get everything you need to start 
            training, including essential equipment and your first month of unlimited classes.
          </GearDescription>
          <ContactText style={{ marginTop: '1.5rem' }}>
            Check out our <a href="/pricing/special-offer" style={{ color: colors.red, textDecoration: 'underline' }}>Special Offer</a> page for details on our gear + membership package.
          </ContactText>
        </GearSection>

        <ContactSection>
          <ContactText>
            Interested in purchasing gear or have questions about equipment? Contact us to learn more 
            about available gear, sizes, and pricing. We're here to help you get everything you need 
            for your training journey.
          </ContactText>
          <ContactButton href="/contact">Contact Us About Gear</ContactButton>
        </ContactSection>
      </Content>
    </PageContainer>
  );
}
