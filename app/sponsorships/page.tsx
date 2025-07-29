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

const SponsorshipSection = styled.div`
  margin: 3rem 0;
  padding: 2.5rem;
  background: ${colors.black}80;
  border: 3px solid ${colors.red};
  position: relative;
  text-align: center;
  
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
  font-size: 2.2rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`;

const SectionDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${colors.white};
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

const BenefitsList = styled.ul`
  text-align: left;
  max-width: 800px;
  margin: 2rem auto;
  padding-left: 2rem;
  
  @media (max-width: 768px) {
    text-align: center;
    padding-left: 1rem;
    margin: 1.5rem auto;
  }
  
  @media (max-width: 480px) {
    margin: 1rem auto;
  }
`;

const BenefitItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${colors.white};
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding: 1.5rem;
  background: ${colors.red}20;
  border: 2px solid ${colors.red};
  border-radius: 8px;
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    margin-top: 1rem;
    padding: 0.75rem;
  }
`;

const ContactText = styled.p`
  font-family: 'Orbitron', monospace;
  font-size: 1.2rem;
  color: ${colors.red};
  font-weight: 600;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ContactEmail = styled.a`
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem;
  color: ${colors.white};
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    color: ${colors.red};
    text-shadow: 0 0 10px ${colors.red}50;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export default function Sponsorships() {
  return (
    <PageContainer>
      <Navigation />
      <Content>
        <HeroSection>
          <Title>SPONSORSHIPS</Title>
          <Subtitle>Join the BST Community</Subtitle>
        </HeroSection>

        <SponsorshipSection>
          <SectionTitle>Support Our Team</SectionTitle>
          <SectionDescription>
            We’re always looking to connect with local businesses and individuals who want to be part of our journey. Supporting BST means you’re helping real people chase their goals, whether that’s winning tournaments or just getting better every day. If you want to make a difference and see your support in action, we’d love to have you on board.
          </SectionDescription>
        </SponsorshipSection>

        <SponsorshipSection>
          <SectionTitle>Why Sponsor BST?</SectionTitle>
          <SectionDescription>
            When you sponsor BST, you're backing a community that lives excellence, discipline, and growth. 
            Our team competes in local and regional tournaments, bringing recognition and success to our sponsors.
          </SectionDescription>
          <BenefitsList>
            <BenefitItem>Your brand gets seen at tournaments and events</BenefitItem>
            <BenefitItem>Logo on our team gear and competition wear</BenefitItem>
            <BenefitItem>We'll promote you on social media</BenefitItem>
            <BenefitItem>Access to our growing martial arts community</BenefitItem>
            <BenefitItem>Support local athletes and martial arts development</BenefitItem>
            <BenefitItem>Partner with a team that values excellence and discipline</BenefitItem>
          </BenefitsList>
        </SponsorshipSection>

        <SponsorshipSection>
          <SectionTitle>Our Community</SectionTitle>
          <SectionDescription>
            BST isn’t just a gym—it’s a place where people from all walks of life come together. We’ve got competitors, families, and folks who just love to train and have fun. Whether you’re a beginner or a seasoned athlete, you’ll find a welcoming environment and people who want to see you succeed. We’re proud of what we’ve accomplished together, and we’re excited to keep growing with the help of our community and supporters.
          </SectionDescription>
        </SponsorshipSection>

        <SponsorshipSection>
          <SectionTitle>Get Involved</SectionTitle>
          <SectionDescription>
            We're open to different sponsorship arrangements and would love to talk about how we can work together. 
            Whether you're a local business, sports equipment company, or individual supporter, there are ways 
            to get involved with our team.
          </SectionDescription>
          <ContactInfo>
            <ContactText>Want to sponsor BST?</ContactText>
            <ContactEmail href="mailto:bloodsweatandtearsjj@gmail.com">bloodsweatandtearsjj@gmail.com</ContactEmail>
            <ContactText style={{ marginTop: '1rem' }}>Call or Text: 978-810-2471</ContactText>
          </ContactInfo>
        </SponsorshipSection>
      </Content>
    </PageContainer>
  );
} 