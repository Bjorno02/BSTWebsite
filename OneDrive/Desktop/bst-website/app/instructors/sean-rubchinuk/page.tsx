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

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const Achievement = styled.li`
  background: ${colors.black};
  padding: 1rem;
  border-left: 3px solid ${colors.red};
  color: ${colors.white};
  font-weight: 500;
`;

export default function SeanRubchinuk() {
  return (
    <PageContainer>
      <Navigation />
      <Content>
        <InstructorSection>
          <Container>
            <Title>Sean Rubchinuk</Title>
            <Subtitle>Head Coach & Owner</Subtitle>
            <Description>
              Sean Rubchinuk is a prodigious talent in the martial arts world, achieving the pinnacle of success as the 2021 IBJJF World Champion 
              at just 19 years old. As the head coach and owner of Blood Sweat and Tears Jiu-Jitsu, Sean has established himself 
              as one of the most accomplished young martial artists in the sport.
            </Description>
            
            <InstructorCard>
              <InstructorInfo>
                <InfoSection>
                  <h3>World-Class Achievements</h3>
                  <ul>
                    <li>2021 IBJJF World Champion</li>
                  
                    <li>Amateur MMA Record: 1-0</li>
                    <li>Countless tournament Gold Medals</li>
                  </ul>
                </InfoSection>
                
                <InfoSection>
                  <h3>Leadership & Business</h3>
                  <ul>
                    <li>Head Coach & Owner of BST Jiu-Jitsu</li>
                    <li>Founded successful martial arts academy at 18 years old</li>
                    <li>Established premier training facility</li>
                    <li>Mentor to countless students</li>
                  </ul>
                </InfoSection>
              </InstructorInfo>
              
              <InstructorInfo>
                <InfoSection>
                  <h3>Background</h3>
                  <p>
                    Sean Rubchinuk is a prodigious talent who has achieved what most martial artists only dream of - 
                    becoming an IBJJF World Champion at the young age of 15. His remarkable journey from 
                    dedicated practitioner to world champion and successful business owner demonstrates his exceptional 
                    talent, work ethic, and leadership abilities. As the founder and owner of BST Jiu-Jitsu, 
                    Sean has created a world-class training environment that emphasizes technique, discipline, and personal growth.
                  </p>
                </InfoSection>
                
                <InfoSection>
                  <h3>Teaching Philosophy</h3>
                  <p>
                    Sean believes in creating a supportive and challenging environment where students can push their limits 
                    while building confidence and character. His world-class experience allows him to provide unparalleled 
                    instruction in technical precision, mental toughness, and competitive strategy. Sean's teaching emphasizes 
                    fundamentals, sportsmanship, continuous improvement, and building a strong martial arts community.
                  </p>
                </InfoSection>
              </InstructorInfo>
            </InstructorCard>
          </Container>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <img 
              src="/sean 1.jpg" 
              alt="Sean Rubchinuk 1" 
              style={{ maxWidth: '350px', width: '100%', height: 'auto', borderRadius: '12px', border: `3px solid ${colors.red}` }}
            />
            <img 
              src="/sean2.jpeg" 
              alt="Sean Rubchinuk 2" 
              style={{ maxWidth: '350px', width: '100%', height: 'auto', borderRadius: '12px', border: `3px solid ${colors.red}` }}
            />
            <img 
              src="/sean3.jpeg" 
              alt="Sean Rubchinuk 3" 
              style={{ maxWidth: '350px', width: '100%', height: 'auto', borderRadius: '12px', border: `3px solid ${colors.red}` }}
            />
          </div>
        </InstructorSection>
      </Content>
    </PageContainer>
  );
} 