"use client";

import styled from 'styled-components';
import { colors } from '../../components/StyledComponents';
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

const Section = styled.section`
  margin: 4rem 0;
  padding: 2rem;
  background: ${colors.darkGrey}80;
  border: 2px solid ${colors.red};
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

const SectionTitle = styled.h2`
  font-family: 'Orbitron', monospace;
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 2px 2px 0px ${colors.black};
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${colors.white};
  margin-bottom: 1rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled.div`
  background: ${colors.black}80;
  border: 1px solid ${colors.red}50;
  padding: 1.5rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${colors.red};
  }
`;

const FeatureTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${colors.white};
`;

export default function JiuJitsu() {
  return (
    <PageContainer>
      <Navigation />
      <Content>
        <HeroSection>
          <Title>JIU-JITSU</Title>
          <Subtitle>No-Gi Brazilian Jiu-Jitsu</Subtitle>
        </HeroSection>

        <Section>
          <SectionTitle>About Our No-Gi Jiu-Jitsu Program</SectionTitle>
          <Text>
            Our No-Gi Jiu-Jitsu program focuses on modern grappling techniques without 
            the traditional kimono. This approach makes the training more applicable 
            to real-world self-defense situations and MMA competition.
          </Text>
          <Text>
            <strong>Classes are available every single day of the week.</strong> Whether 
            you're a complete beginner or an experienced grappler, our program offers 
            the training you need to develop your ground fighting skills in a supportive, 
            competitive environment.
          </Text>
        </Section>

        <FeatureGrid>
          <FeatureCard>
            <FeatureTitle>Beginner Classes</FeatureTitle>
            <FeatureText>
              Perfect for newcomers to Jiu-Jitsu. Learn fundamental techniques, basic 
              positions, and essential self-defense skills. Build a strong foundation 
              in No-Gi grappling. Available every single day.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Advanced Classes</FeatureTitle>
            <FeatureText>
              For experienced practitioners looking to refine their skills and learn 
              advanced techniques. Focus on complex submissions, transitions, and 
              competition strategies. Available every single day.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Open Mat Sessions</FeatureTitle>
            <FeatureText>
              Unstructured training time for practice, drilling, and sparring. Perfect 
              for refining techniques and building relationships with training partners. 
              Available every single day.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Modern Approach</FeatureTitle>
            <FeatureText>
              No-Gi training focuses on modern grappling techniques without the 
              traditional kimono, making it more applicable to real-world situations 
              and MMA competition.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Athletic Development</FeatureTitle>
            <FeatureText>
              Build strength, flexibility, and cardiovascular endurance through 
              dynamic No-Gi training. Improve your overall athletic performance 
              and conditioning.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Self-Defense</FeatureTitle>
            <FeatureText>
              Learn practical self-defense techniques that work in real situations. 
              No-Gi training prepares you for scenarios where traditional clothing 
              grips aren't available.
            </FeatureText>
          </FeatureCard>
        </FeatureGrid>

        <Section>
          <SectionTitle>Why Choose BST No-Gi Jiu-Jitsu?</SectionTitle>
          <Text>
            BST No-Gi Jiu-Jitsu stands out for its modern approach to grappling training. 
            Our program focuses on techniques that work in real-world situations and 
            MMA competition, while maintaining the technical depth and strategic thinking 
            that makes Jiu-Jitsu such an effective martial art.
          </Text>
          <Text>
            With classes available every single day and instruction from experienced 
            coaches, our No-Gi program provides the training environment you need to 
            develop your grappling skills and achieve your goals, whether that's 
            self-defense, competition, or simply improving your overall fitness and 
            martial arts knowledge.
          </Text>
        </Section>
      </Content>
    </PageContainer>
  );
} 