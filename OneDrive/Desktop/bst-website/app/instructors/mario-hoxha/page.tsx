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

export default function MarioHoxha() {
  return (
    <PageContainer>
      <Navigation />
      <Content>
        <InstructorSection>
          <Container>
            <Title>Mario Hoxha</Title>
            <Subtitle>Wrestling Instructor</Subtitle>
            <Description>
              Mario Hoxha is a dedicated wrestling instructor with over 8 years of experience coaching and competing at a high level. 
              A former team captain and MVP, Mario placed in both the CAL/NEC and sectional championships, was a state qualifier, 
              and was recognized as a Salem News All-Star.
            </Description>
            
            <InstructorCard>
              <InstructorInfo>
                <InfoSection>
                  <h3>Wrestling Achievements</h3>
                  <ul>
                    <li>Former team captain and MVP</li>
                    <li>CAL/NEC and sectional championships placement</li>
                    <li>State qualifier</li>
                    <li>Salem News All-Star</li>
                  </ul>
                </InfoSection>
                
                <InfoSection>
                  <h3>Jiu-Jitsu Success</h3>
                  <ul>
                    <li>Gold medal at Grappling Industries</li>
                    <li>3 Time Enigma Superfight Champion</li>
                    <li>Strong grappling foundation from wrestling background</li>
                  </ul>
                </InfoSection>
              </InstructorInfo>
              
              <InstructorInfo>
                <InfoSection>
                  <h3>Background</h3>
                  <p>
                    After transitioning to Brazilian Jiu-Jitsu, his strong grappling foundation quickly led to success—earning him 
                    a gold medal at Grappling Industries and championship victories in super fights for Enigma. Known for his deep 
                    technical knowledge, leadership, and passion for combat sports, he's committed to helping athletes of all levels 
                    build strong fundamentals, discipline, and confidence both on and off the mat.
                  </p>
                </InfoSection>
                
                <InfoSection>
                  <h3>Teaching Philosophy</h3>
                  <p>
                    Mario believes in building a strong foundation in wrestling fundamentals while developing physical strength and coordination. 
                    His classes provide structured training that benefits both beginners and advanced practitioners, with an emphasis on 
                    proper technique, discipline, and building confidence both on and off the mat.
                  </p>
                </InfoSection>
              </InstructorInfo>
            </InstructorCard>
          </Container>
        </InstructorSection>
      </Content>
    </PageContainer>
  );
} 