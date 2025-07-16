"use client";

import styled from 'styled-components';
import { Container, Section, colors } from '../../components/StyledComponents';
import Navigation from '../../components/Navigation';
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
`;

const InstructorSection = styled(Section)`
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

const InstructorCard = styled.div`
  background: ${colors.darkGrey};
  border: 2px solid ${colors.red};
  padding: 3rem;
  border-radius: 8px;
  margin: 2rem 0;
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
`;

const InstructorInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const InfoSection = styled.div`
  h3 {
    color: ${colors.red};
    font-family: 'Orbitron', sans-serif;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  
  p {
    color: ${colors.white};
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    color: ${colors.white};
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
    
    &::before {
      content: '•';
      color: ${colors.red};
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }
`;

const PhotosSection = styled.div`
  margin: 4rem 0;
  text-align: center;
`;

const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const PhotoContainer = styled.div`
  img {
    max-width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    border: 3px solid ${colors.red};
  }
`;

export default function LukeLoureiro() {
  return (
    <PageContainer>
      <Navigation />
      <Content>
        <InstructorSection>
          <Container>
            <Title>Luke Loureiro</Title>
            <Subtitle>Kids Wrestling Instructor</Subtitle>
            <Description>
              Luke Loureiro is a highly experienced wrestling coach with over 10 years of wrestling experience and extensive coaching background. 
              A 4-year letter winner and 2x division and conference all-star at Beverly High School, Luke brings exceptional expertise to our kids program.
            </Description>
            
            <InstructorCard>
              <InstructorInfo>
                <InfoSection>
                  <h3>Wrestling Achievements</h3>
                  <ul>
                    <li>10+ years of wrestling experience</li>
                    <li>4-year letter winner at Beverly High School</li>
                    <li>Junior and senior captain of Beverly wrestling</li>
                    <li>2x division and conference all-star</li>
                  </ul>
                </InfoSection>
                
                <InfoSection>
                  <h3>Coaching Experience</h3>
                  <ul>
                    <li>Coaching Beverly youth for 8 years</li>
                    <li>Coaching Beverly high school for 5 years</li>
                    <li>Extensive experience with all age groups</li>
                    <li>Specialized in youth wrestling development</li>
                  </ul>
                </InfoSection>
              </InstructorInfo>
              
              <InstructorInfo>
                <InfoSection>
                  <h3>Background</h3>
                  <p>
                    Luke Loureiro brings his extensive wrestling experience and coaching background to our kids program, 
                    focusing on teaching fundamental wrestling techniques and building physical strength and coordination. 
                    His proven track record as both a successful wrestler and experienced coach makes him an exceptional 
                    instructor for young athletes.
                  </p>
                </InfoSection>
                
                <InfoSection>
                  <h3>Teaching Philosophy</h3>
                  <p>
                    Luke believes in a reward-based learning system with any ages from elementary to high school. 
                    The more the students pay attention and work hard during practice, the more time they have to learn 
                    cool moves from the internet and play games. This approach creates an engaging and motivating 
                    environment where children develop both wrestling skills and a love for the sport.
                  </p>
                </InfoSection>
              </InstructorInfo>
            </InstructorCard>
            
            <PhotosSection>
              <PhotosGrid>
                <PhotoContainer>
                  <Image 
                    src="/luke1.jpg" 
                    alt="Luke Loureiro Wrestling" 
                    width={400}
                    height={300}
                    style={{
                      maxWidth: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '3px solid #dc143c'
                    }}
                  />
                </PhotoContainer>
                <PhotoContainer>
                  <Image 
                    src="/luke2.jpg" 
                    alt="Luke Loureiro Coaching" 
                    width={400}
                    height={300}
                    style={{
                      maxWidth: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '3px solid #dc143c'
                    }}
                  />
                </PhotoContainer>
              </PhotosGrid>
            </PhotosSection>
          </Container>
        </InstructorSection>
      </Content>
    </PageContainer>
  );
} 