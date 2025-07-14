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
  border-radius: 12px;
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
  font-size: 2rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const CardPrice = styled.div`
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

const CardFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  text-align: left;
`;

const CardFeature = styled.li`
  color: ${colors.white};
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  font-size: 1rem;
  
  &::before {
    content: '✓';
    color: ${colors.red};
    position: absolute;
    left: 0;
    font-weight: bold;
    font-size: 1.1rem;
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

const AgeGroupInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
`;

const AgeGroup = styled.div`
  background: ${colors.black};
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
  
  h4 {
    color: ${colors.red};
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: ${colors.white};
    font-size: 0.9rem;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  background: #1a1a1a;
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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
`;

const BenefitCard = styled.div`
  background: ${colors.darkGrey};
  border: 1px solid ${colors.red};
  padding: 1.5rem;
  border-radius: 8px;
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

export default function KidsPricing() {
  return (
    <PageContainer>
      <Navigation />
      <PricingSection>
        <Container>
          <Title>Kids Programs</Title>
          <Subtitle>Martial Arts Training for Children</Subtitle>
          <Description>
            Build confidence, discipline, and character through martial arts training. Our kids 
            programs focus on self-defense and personal development in a safe, 
            supportive environment.
          </Description>
          
          <PricingGrid>
            <PricingCard>
              <CardTitle>Unlimited Kids Membership</CardTitle>
              <CardPrice>
                <span className="currency">$</span>125
                <span className="period">/month</span>
              </CardPrice>
              <CardFeatures>
                <CardFeature>Unlimited Kids Jiu-Jitsu classes</CardFeature>
                <CardFeature>Unlimited Kids Wrestling classes</CardFeature>
                <CardFeature>Unlimited Kids Muay Thai classes</CardFeature>
                <CardFeature>Access to all kids programs</CardFeature>
                <CardFeature>Age-appropriate training</CardFeature>
                <CardFeature>Self-defense curriculum</CardFeature>
                <CardFeature>Character development</CardFeature>
                <CardFeature>Belt progression system</CardFeature>
                <CardFeature>Free equipment usage</CardFeature>
                <CardFeature>No contracts, cancel anytime</CardFeature>
              </CardFeatures>
            </PricingCard>

            <PricingCard>
              <CardTitle>Kids Grappling Membership</CardTitle>
              <CardPrice>
                <span className="currency">$</span>75
                <span className="period">/month</span>
              </CardPrice>
              <CardFeatures>
                <CardFeature>Unlimited Kids Jiu-Jitsu classes</CardFeature>
                <CardFeature>Unlimited Kids Wrestling classes</CardFeature>
                <CardFeature>Age-appropriate training</CardFeature>
                <CardFeature>Self-defense curriculum</CardFeature>
                <CardFeature>Character development</CardFeature>
                <CardFeature>Belt progression system</CardFeature>
                <CardFeature>Free equipment usage</CardFeature>
                <CardFeature>No contracts, cancel anytime</CardFeature>
              </CardFeatures>
            </PricingCard>

            <PricingCard>
              <CardTitle>Kids Muay Thai Membership</CardTitle>
              <CardPrice>
                <span className="currency">$</span>75
                <span className="period">/month</span>
              </CardPrice>
              <CardFeatures>
                <CardFeature>Unlimited Kids Muay Thai classes</CardFeature>
                <CardFeature>Age-appropriate striking training</CardFeature>
                <CardFeature>Self-defense techniques</CardFeature>
                <CardFeature>Character development</CardFeature>
                <CardFeature>Physical fitness and coordination</CardFeature>
                <CardFeature>Discipline and respect training</CardFeature>
                <CardFeature>Free equipment usage</CardFeature>
                <CardFeature>No contracts, cancel anytime</CardFeature>
              </CardFeatures>
            </PricingCard>
          </PricingGrid>
          
          <BookNowButton href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            Book Now
          </BookNowButton>
          
          <InfoSection>
            <h3>Program Overview</h3>
            <p>
              Our Kids Programs are specifically designed for children. 
              We focus on building confidence, teaching self-defense, and developing character 
              through martial arts training. Our curriculum emphasizes respect, discipline, 
              and personal growth in a fun, safe environment.
            </p>
          </InfoSection>
          
          <BenefitsGrid>
            <BenefitCard>
              <h4>Confidence Building</h4>
              <p>Develop self-confidence and self-esteem through martial arts training</p>
            </BenefitCard>
            <BenefitCard>
              <h4>Self-Defense</h4>
              <p>Learn practical self-defense techniques and strategies</p>
            </BenefitCard>
            <BenefitCard>
              <h4>Discipline</h4>
              <p>Build focus, self-control, and respect for others</p>
            </BenefitCard>
            <BenefitCard>
              <h4>Physical Fitness</h4>
              <p>Improve coordination, strength, and overall physical health</p>
            </BenefitCard>
            <BenefitCard>
              <h4>Social Skills</h4>
              <p>Make friends and learn teamwork in a supportive environment</p>
            </BenefitCard>
            <BenefitCard>
              <h4>Character Development</h4>
              <p>Develop integrity, perseverance, and leadership qualities</p>
            </BenefitCard>
          </BenefitsGrid>
          
          <InfoSection>
            <h3>Age Groups</h3>
            <p>
              Our kids programs are designed for children ages 7-12. We provide age-appropriate 
              training that focuses on building confidence, teaching self-defense, and developing 
              character through martial arts.
            </p>
          </InfoSection>
          
          <InfoSection>
            <h3>Class Schedule</h3>
            <p>
              Kids classes are held Monday, Tuesday, Wednesday, Thursday, and Friday at 5PM. 
              Classes are 45-60 minutes long and include warm-ups, technique instruction, 
              and supervised practice. Parents are welcome to watch from our viewing area.
            </p>
          </InfoSection>
          
          <InfoSection>
            <h3>Safety First</h3>
            <p>
              Safety is our top priority. All instructors are certified and trained in 
              working with children. We maintain a clean, safe training environment and 
              use age-appropriate equipment. Classes are supervised at all times to ensure 
              a positive learning experience.
            </p>
          </InfoSection>
          
          <ContactInfo>
            <h3>Ready to Get Your Child Started?</h3>
            <p>Call or text us to schedule a free trial class: <strong>978-810-2471</strong></p>
            <p>58 Pulaski Street, Building A, 2nd Floor, Peabody, MA</p>
          </ContactInfo>
        </Container>
      </PricingSection>
    </PageContainer>
  );
} 