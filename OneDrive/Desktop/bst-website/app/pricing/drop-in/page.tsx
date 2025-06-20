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

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
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

const CardTitle = styled.h3`
  color: ${colors.red};
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 1rem;
  
  .currency {
    font-size: 1.5rem;
    vertical-align: top;
  }
  
  .period {
    font-size: 1rem;
    color: ${colors.dustyRed};
    font-weight: 400;
  }
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const Feature = styled.li`
  color: ${colors.white};
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  
  &::before {
    content: '✓';
    color: ${colors.red};
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -10px;
  right: 20px;
  background: ${colors.red};
  color: ${colors.white};
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 20px;
  font-family: 'Orbitron', sans-serif;
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

export default function DropInPricing() {
  return (
    <PageContainer>
      <Navigation />
      <PricingSection>
        <Container>
          <Title>Drop-In Classes</Title>
          <Subtitle>$25 Drop-In Fee</Subtitle>
          <Description>
            Experience the power of Jiu Jitsu with our $25 Drop-In Fee at Blood Sweat and Tears Jiu Jitsu! 
            Perfect for those looking to try out a class, visiting practitioners, or anyone wanting to get 
            in a solid training session, this fee grants you access to any of our regular classes for one day.
          </Description>
          
          <PricingGrid>
            <PricingCard>
              <CardTitle>Drop-In Fee</CardTitle>
              <Price>
                <span className="currency">$</span>25
              </Price>
              <Features>
                <Feature>Access to any regular class for one day</Feature>
                <Feature>All skill levels welcome</Feature>
                <Feature>High-quality instruction</Feature>
                <Feature>Supportive community environment</Feature>
                <Feature>No commitment required</Feature>
              </Features>
            </PricingCard>
          </PricingGrid>
          
          <InfoSection>
            <h3>What to Expect</h3>
            <p>
              Join our welcoming community and engage in high-quality instruction led by experienced coaches. 
              Whether you're a seasoned grappler or new to the mats, you'll find a supportive environment 
              where you can learn, sweat, and connect with fellow martial artists.
            </p>
            <p>
              <strong>What to bring:</strong> Comfortable workout clothes, water bottle, and a positive attitude. 
              We provide all necessary equipment including mats and training gear.
            </p>
          </InfoSection>
          
          <InfoSection>
            <h3>Class Availability</h3>
            <p>
              Drop-ins are welcome for most classes. We recommend checking our schedule and calling ahead 
              to ensure availability. All skill levels are welcome, and our instructors will help you 
              get oriented and ensure you have a great experience.
            </p>
          </InfoSection>
          
          <ContactInfo>
            <h3>Ready to Start?</h3>
            <p>Call or text us to reserve your spot: <strong>978-810-247</strong></p>
            <p>Or book online: 
              <a href="https://www.bloodsweattearsjjujitsu.com/book-online" target="_blank" rel="noopener noreferrer">
                Book Online
              </a>
            </p>
            <p>58 Pulaski Street, Building A, 2nd Floor, Peabody, MA</p>
          </ContactInfo>
        </Container>
      </PricingSection>
    </PageContainer>
  );
} 