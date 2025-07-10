"use client";

import styled from 'styled-components';
import { Container, Section, colors } from '../../components/StyledComponents';
import Navigation from '../../components/Navigation';

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

const PricingSection = styled(Section)`
  padding: 6rem 0 4rem;
  background: ${colors.black};
  color: ${colors.white};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${colors.red};
  text-align: center;
  margin: 0;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${colors.dustyRed};
  text-align: center;
  margin: 0.5rem 0 2rem;
  font-weight: 600;
  font-family: 'Orbitron', sans-serif;
`;

const Description = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 1rem auto 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${colors.white};
  opacity: 0.9;
`;

const MainPricingCard = styled.div`
  background: #1a1a1a;
  border: 3px solid ${colors.red};
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  position: relative;
  margin: 3rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid ${colors.dustyRed};
    transform: rotate(2deg);
    pointer-events: none;
  }
`;

const CardTitle = styled.h3`
  color: ${colors.red};
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const Price = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 1rem;
  
  .currency {
    font-size: 2rem;
    vertical-align: top;
  }
  
  .period {
    font-size: 1.2rem;
    color: ${colors.dustyRed};
    font-weight: 400;
  }
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  text-align: left;
`;

const Feature = styled.li`
  color: ${colors.white};
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
  font-size: 1.1rem;
  
  &::before {
    content: '✓';
    color: ${colors.red};
    position: absolute;
    left: 0;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
`;

const PricingCard = styled.div`
  background: #1a1a1a;
  border: 2px solid ${colors.red};
  padding: 2.5rem;
  border-radius: 8px;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
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
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(220, 20, 60, 0.3);
  }
`;

const ProgramCard = styled(PricingCard)`
  h4 {
    color: ${colors.red};
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  
  p {
    color: ${colors.white};
    line-height: 1.6;
  }
`;

const InfoSection = styled.div`
  background: #1a1a1a;
  border: 1px solid ${colors.red};
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  
  h3 {
    color: ${colors.red};
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  
  p {
    color: ${colors.white};
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  background: ${colors.black};
  border-radius: 8px;
  border: 1px solid ${colors.red};

  h3 {
    color: ${colors.red};
    margin-bottom: 1rem;
    font-family: 'Orbitron', sans-serif;
  }

  p {
    margin: 0.5rem 0;
    color: ${colors.white};
  }

  a {
    color: ${colors.red};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${colors.dustyRed};
      text-decoration: underline;
    }
  }
`;

const BookNowButton = styled.a`
  display: block;
  background: ${colors.red};
  color: ${colors.white};
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 8px;
  margin: 2rem auto;
  font-family: 'Orbitron', sans-serif;
  transition: all 0.3s ease;
  border: 2px solid ${colors.red};
  text-align: center;
  max-width: 300px;
  cursor: pointer;
  pointer-events: auto;
  
  &:hover {
    background: ${colors.dustyRed};
    border-color: ${colors.dustyRed};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);
  }
`;

export default function JiuJitsuMuayThaiPricing() {
  return (
    <PageContainer>
      <Navigation />
      <PricingSection>
        <Container>
          <Title>Complete BST Package</Title>
          <Subtitle>Complete Martial Arts Training</Subtitle>
          <Description>
            The ultimate combination package. Get unlimited access to both Jiu-Jitsu and Muay Thai classes. 
            Perfect for practitioners who want to master both grappling and striking disciplines.
          </Description>
          
          <MainPricingCard>
            <CardTitle>Complete BST Package</CardTitle>
            <Price>
              <span className="currency">$</span>150
              <span className="period">/month</span>
            </Price>
            <Features>
              <Feature>Unlimited Jiu-Jitsu classes (Beginner & Advanced)</Feature>
              <Feature>Unlimited Muay Thai classes</Feature>
              <Feature>Access to all Open Mat sessions</Feature>
              <Feature>Priority registration for special events</Feature>
              <Feature>Free equipment usage</Feature>
              <Feature>No contracts, cancel anytime</Feature>
            </Features>
          </MainPricingCard>
          
          <BookNowButton href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            Book Now
          </BookNowButton>
          
          <InfoSection>
            <h3>What's Included</h3>
            <p>
              The Jiu-Jitsu + Muay Thai Package gives you access to both of our core martial arts programs. 
              Train in both grappling and striking disciplines, becoming a well-rounded martial artist. 
              This package is perfect for those who want to develop both ground fighting and stand-up skills.
            </p>
          </InfoSection>
          
          <ProgramsGrid>
            <ProgramCard>
              <h4>Jiu-Jitsu</h4>
              <p>Brazilian Jiu-Jitsu fundamentals and advanced techniques</p>
            </ProgramCard>
            <ProgramCard>
              <h4>Muay Thai</h4>
              <p>Traditional Thai boxing with modern applications</p>
            </ProgramCard>
            <ProgramCard>
              <h4>Open Mat</h4>
              <p>Unstructured training time for practice and sparring</p>
            </ProgramCard>
            <ProgramCard>
              <h4>Conditioning</h4>
              <p>Fight-specific strength and conditioning</p>
            </ProgramCard>
          </ProgramsGrid>
          
          <InfoSection>
            <h3>Training Schedule</h3>
            <p>
              With the Jiu-Jitsu + Muay Thai Package, you can attend classes throughout the week. 
              Our schedule includes morning, afternoon, and evening classes to fit your lifestyle. 
              Check our schedule page for detailed class times and availability.
            </p>
          </InfoSection>
          
          <InfoSection>
            <h3>No Commitment Policy</h3>
            <p>
              We believe in earning your business every month. There are no long-term contracts, 
              no hidden fees, and no pressure. You can cancel your membership at any time with 
              no penalties. We're confident you'll love training with us!
            </p>
          </InfoSection>
          
          <ContactInfo>
            <h3>Ready to Start Your Martial Arts Journey?</h3>
            <p>Call or text us to get started: <strong>978-810-247</strong></p>
            <p>58 Pulaski Street, Building A, 2nd Floor, Peabody, MA</p>
          </ContactInfo>
        </Container>
      </PricingSection>
    </PageContainer>
  );
} 