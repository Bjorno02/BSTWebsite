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

const ProgramCard = styled.div`
  background: #1a1a1a;
  border: 1px solid ${colors.red};
  padding: 1.5rem;
  border-radius: 6px;
  text-align: center;
  
  h4 {
    color: ${colors.red};
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  
  p {
    color: ${colors.white};
    font-size: 0.9rem;
    line-height: 1.4;
    opacity: 0.9;
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
  position: relative;
  z-index: 10;
  
  &:hover {
    background: ${colors.dustyRed};
    border-color: ${colors.dustyRed};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);
  }
`;

export default function MuayThaiPricing() {
  return (
    <PageContainer>
      <Navigation />
      <PricingSection>
        <Container>
          <Title>Muay Thai Program</Title>
          <Subtitle>Traditional Thai Boxing Training</Subtitle>
          <Description>
            Master the art of Muay Thai with our comprehensive striking program. Learn traditional 
            Thai boxing techniques, improve your fitness, and develop powerful striking skills 
            under the guidance of experienced instructors.
          </Description>
          
          <MainPricingCard>
            <CardTitle>Muay Thai Membership</CardTitle>
            <Price>
              <span className="currency">$</span>125
              <span className="period">/month</span>
            </Price>
            <Features>
              <Feature>Unlimited Muay Thai classes</Feature>
              <Feature>Traditional Thai boxing techniques</Feature>
              <Feature>Striking and clinch work</Feature>
              <Feature>Fight conditioning and fitness</Feature>
              <Feature>Access to Open Mat sessions</Feature>
              <Feature>Free equipment usage</Feature>
              <Feature>No contracts, cancel anytime</Feature>
            </Features>
          </MainPricingCard>
          
          <BookNowButton href="https://www.vagaro.com/cl/wdcLUWbvg63Uoq8SiD2xdNuj3dL4oXb0d4HfdWPKlbg=" target="_blank" rel="noopener noreferrer">
            Book Now
          </BookNowButton>
          
          <InfoSection>
            <h3>What's Included</h3>
            <p>
              Our Muay Thai program focuses on traditional Thai boxing techniques including punches, 
              kicks, elbows, and knees. You'll learn proper form, develop power and speed, and 
              improve your overall fitness. Classes are suitable for all skill levels, from beginners 
              to advanced practitioners.
            </p>
          </InfoSection>
          
          <ProgramsGrid>
            <ProgramCard>
              <h4>Striking Techniques</h4>
              <p>Punches, kicks, elbows, and knees</p>
            </ProgramCard>
            <ProgramCard>
              <h4>Clinch Work</h4>
              <p>Close-range fighting and control</p>
            </ProgramCard>
            <ProgramCard>
              <h4>Fight Conditioning</h4>
              <p>Strength, endurance, and power training</p>
            </ProgramCard>
            <ProgramCard>
              <h4>Self-Defense</h4>
              <p>Practical applications for real situations</p>
            </ProgramCard>
          </ProgramsGrid>
          
          <InfoSection>
            <h3>Training Schedule</h3>
            <p>
              Muay Thai classes are held Monday, Wednesday, and Friday at 8PM. Classes focus on 
              technique development, conditioning, and practical application. Check our schedule 
              page for detailed class times and availability.
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
            <h3>Ready to Start Your Muay Thai Journey?</h3>
            <p>Call or text us to get started: <strong>978-810-2471</strong></p>
            <p>58 Pulaski Street, Building A, 2nd Floor, Peabody, MA</p>
          </ContactInfo>
        </Container>
      </PricingSection>
    </PageContainer>
  );
} 