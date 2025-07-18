"use client";

import styled from 'styled-components';
import { Container, colors } from '../components/StyledComponents';
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
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 4rem 0;
  position: relative;
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
`;

const Subtitle = styled.p`
  font-family: 'Orbitron', monospace;
  font-size: 1.2rem;
  color: ${colors.white};
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const AchievementSection = styled.div`
  margin: 4rem 0;
  padding: 3rem;
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
    transform: rotate(2deg);
    pointer-events: none;
  }
`;

const AchievementTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 2.2rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const AchievementDate = styled.div`
  font-family: 'Orbitron', monospace;
  font-size: 1.3rem;
  color: ${colors.dustyRed};
  margin-bottom: 2rem;
  font-weight: 600;
`;

const AchievementDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${colors.white};
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background: ${colors.darkGrey};
  border: 2px dashed ${colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  color: ${colors.dustyRed};
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem;
`;

export default function Achievements() {
  return (
    <PageContainer>
      <Navigation />
      <Content>
        <HeroSection>
          <Title>ACHIEVEMENTS</Title>
          <Subtitle>Blood Sweat and Tears Competition Team</Subtitle>
        </HeroSection>

        <AchievementSection>
          <AchievementTitle>Team Gold - Grappling Industries Boston</AchievementTitle>
          <AchievementDate>July 12, 2025</AchievementDate>
          <AchievementDescription>
            BST secured 1st Place Overall Team Performance at Grappling Industries Boston, dominating the competition with an impressive medal haul. Our team brought home 6 individual gold medals, 2 silver medals, and 2 bronze medals, showcasing the depth and skill of our entire roster.
            <br /><br />
            The victory was highlighted by Sean Rubchinuk's spectacular submission of a brown belt world champion, whose team ultimately finished in 2nd place. This triumph over multiple elite schools solidified BST's position as a powerhouse in the New England grappling scene.
          </AchievementDescription>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <img 
              src="/TeamGold717.JPG" 
              alt="Team Gold July 17" 
              style={{ maxWidth: '500px', width: '500px', height: '350px', objectFit: 'cover', borderRadius: '12px', border: `3px solid ${colors.red}` }}
            />
          </div>
        </AchievementSection>

        <AchievementSection>
          <AchievementTitle>Quintet Tournament Champions - Z Team Invitational 3</AchievementTitle>
          <AchievementDate>June 28, 2025</AchievementDate>
          <AchievementDescription>
            BST emerged victorious at the prestigious Quintet Tournament hosted by Z Team Jiu Jitsu, demonstrating exceptional team strategy and individual skill. Our championship team consisted of Mario Hoxha, Bjorn Shurdha, Sean Rubchinuk, Keanu Shurdha, and Anthony Gojani.
            <br /><br />
            The victory was secured through an excellent team plan and outstanding execution: Mario Hoxha and Bjorn Shurdha each eliminated two opponents, while Keanu Shurdha finished the tournament by taking out the final opponent. We defeated 10th Planet Springfield, with our extensive leg lock training leading up to the tournament producing incredible results.
            <br /><br />
            This victory showcased the comprehensive training methodology at BST, where each team member's individual excellence contributes to collective success.
          </AchievementDescription>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <img 
              src="/quintet1.JPG" 
              alt="Quintet Tournament 1" 
              style={{ maxWidth: '300px', width: '300px', height: '300px', objectFit: 'cover', borderRadius: '12px', border: `3px solid ${colors.red}` }}
            />
            <img 
              src="/quintet2.JPG" 
              alt="Quintet Tournament 2" 
              style={{ maxWidth: '300px', width: '300px', height: '300px', objectFit: 'cover', borderRadius: '12px', border: `3px solid ${colors.red}` }}
            />
          </div>
        </AchievementSection>

        <AchievementSection>
          <AchievementTitle>2nd Place Overall - Grappling Industries Boston</AchievementTitle>
          <AchievementDate>May 17, 2025</AchievementDate>
          <AchievementDescription>
            BST achieved an impressive 2nd Place Overall finish at Grappling Industries, marking a significant milestone in our team's competitive journey. This was our first tournament as a team, and we performed exceptionally well with 9 gold medals, 2 silver medals, and 3 bronze medals.
            <br /><br />
            The performance served as a foundation for our subsequent victories, showing the continuous improvement and dedication of our competition team. Each athlete contributed to the team's success, building momentum for future tournaments and establishing BST as a force to be reckoned with in the grappling community.
          </AchievementDescription>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <img 
              src="/teamsilver517.JPG" 
              alt="Team Silver May 17" 
              style={{ maxWidth: '500px', width: '500px', height: '350px', objectFit: 'cover', borderRadius: '12px', border: `3px solid ${colors.red}` }}
            />
          </div>
        </AchievementSection>
      </Content>
    </PageContainer>
  );
} 