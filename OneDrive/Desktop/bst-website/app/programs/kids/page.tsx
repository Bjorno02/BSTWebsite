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

const AgeGroup = styled.div`
  background: ${colors.red}10;
  border: 2px solid ${colors.red};
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
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

const AgeTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 1rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 0px ${colors.black};
`;

const CTAButton = styled.button`
  background: ${colors.red};
  color: ${colors.white};
  border: 2px solid ${colors.red};
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 2rem;
  
  &:hover {
    background: transparent;
    color: ${colors.red};
    box-shadow: 0 0 20px ${colors.red}50;
  }
`;

export default function KidsPage() {
  return (
    <PageContainer>
      <Navigation />
      <Content>
        <HeroSection>
          <Title>Kids Grappling</Title>
          <Subtitle>Building Champions for Life</Subtitle>
        </HeroSection>

        <Section>
          <SectionTitle>About Our Kids Program</SectionTitle>
          <Text>
            Our Kids Grappling program is designed for children, focusing on 
            character development and the fundamentals of Brazilian Jiu-Jitsu. We believe 
            that martial arts training provides the perfect foundation for building 
            confident, respectful, and resilient young people.
          </Text>
          <Text>
            Under the guidance of experienced instructors who specialize in youth development, 
            your child will learn self-defense, discipline, and the values that will serve 
            them throughout their lives.
          </Text>
        </Section>

        <AgeGroup>
          <AgeTitle>Kids Classes</AgeTitle>
          <Text>
            Age-appropriate training that focuses on fun, safety, and skill development. 
            Classes are structured to keep kids engaged while building the foundation 
            for lifelong martial arts practice.
          </Text>
        </AgeGroup>

        <FeatureGrid>
          <FeatureCard>
            <FeatureTitle>Character Development</FeatureTitle>
            <FeatureText>
              Build confidence, respect, discipline, and perseverance through structured 
              martial arts training. Kids learn to set goals and work hard to achieve them.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Self-Defense</FeatureTitle>
            <FeatureText>
              Learn practical self-defense skills while developing confidence and awareness. 
              Kids learn to use their voice and body language effectively.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Physical Fitness</FeatureTitle>
            <FeatureText>
              Develop coordination, strength, flexibility, and cardiovascular fitness 
              through fun, engaging activities that kids love.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Social Skills</FeatureTitle>
            <FeatureText>
              Build friendships and learn to work with others in a supportive environment. 
              Kids develop communication skills and emotional intelligence.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Mental Focus</FeatureTitle>
            <FeatureText>
              Improve concentration, memory, and problem-solving skills through 
              technical training and strategic thinking exercises.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Goal Setting</FeatureTitle>
            <FeatureText>
              Learn to set and achieve goals through the belt promotion system. 
              Kids develop a growth mindset and understand the value of hard work.
            </FeatureText>
          </FeatureCard>
        </FeatureGrid>

        <Section>
          <SectionTitle>Program Benefits</SectionTitle>
          <Text>
            Our Kids Grappling program offers numerous benefits that extend far beyond 
            the mat. Children develop physical skills, mental toughness, and character 
            traits that will serve them in school, sports, and life.
          </Text>
          <Text>
            Parents consistently report improvements in their children's confidence, 
            behavior, academic performance, and social interactions after joining our program.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Safety First</SectionTitle>
          <Text>
            Safety is our top priority in all kids' classes. We use age-appropriate 
            techniques, proper supervision, and a structured curriculum that ensures 
            children learn effectively while staying safe.
          </Text>
          <Text>
            Our instructors are trained in youth development and create a positive, 
            supportive environment where every child can thrive and grow.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Why Choose BST Kids?</SectionTitle>
          <Text>
            BST Kids Grappling provides a unique combination of martial arts training 
            and character development. Our program is designed specifically for children, 
            with experienced instructors who understand how to make learning fun and effective.
          </Text>
          <Text>
            Join our family and give your child the tools they need to become confident, 
            respectful, and capable young people who are prepared for life's challenges.
          </Text>
        </Section>

        <div style={{ textAlign: 'center', margin: '3rem 0' }}>
          <CTAButton>Enroll Your Child Today</CTAButton>
        </div>
      </Content>
    </PageContainer>
  );
} 