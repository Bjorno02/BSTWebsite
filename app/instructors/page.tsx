"use client";

import styled from 'styled-components';
import { colors } from '../components/StyledComponents';
import Navigation from '../components/Navigation';
import Link from 'next/link';

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
  
  @media (max-width: 768px) {
    padding-top: 80px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  @media (max-width: 480px) {
    padding-top: 70px;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 4rem 0;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0;
  }
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
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-family: 'Orbitron', monospace;
  font-size: 1.2rem;
  color: ${colors.white};
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CategorySection = styled.div`
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

const InstructorSection = styled.div`
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
  
  @media (max-width: 768px) {
    margin: 2rem 0;
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    margin: 1.5rem 0;
    padding: 1.5rem;
  }
`;

const CategoryTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 2px 2px 0px ${colors.black};
  border-bottom: 2px solid ${colors.red};
  padding-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const InstructorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
    margin-top: 1rem;
  }
`;

const InstructorCard = styled(Link)`
  background: ${colors.black}80;
  border: 2px solid ${colors.red};
  padding: 2rem;
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease;
  
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
    box-shadow: 0 10px 20px rgba(204, 0, 0, 0.3);
    border-color: ${colors.red};
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin-bottom: 0;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    margin-bottom: 0;
  }
`;

const InstructorName = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 2.2rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const InstructorTitle = styled.div`
  font-family: 'Orbitron', monospace;
  font-size: 1.3rem;
  color: ${colors.dustyRed};
  margin-bottom: 2rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const InstructorDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${colors.white};
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export default function Instructors() {
  return (
    <PageContainer>
      <Navigation />
      <Content>
        <HeroSection>
          <Title>INSTRUCTORS</Title>
          <Subtitle>Meet the BST Team</Subtitle>
        </HeroSection>

        <InstructorSection>
          <InstructorName>Sean Rubchinuk</InstructorName>
          <InstructorTitle>Head Coach & World Champion</InstructorTitle>
          <InstructorDescription>
            World-class Jiu-Jitsu competitor and head coach of BST. 
            Sean brings championship-level expertise and leadership to our gym.
          </InstructorDescription>
        </InstructorSection>

        <InstructorSection>
          <InstructorName>Diego Martin</InstructorName>
          <InstructorTitle>Muay Thai Instructor</InstructorTitle>
          <InstructorDescription>
            Traditional Muay Thai instructor with extensive experience in 
            the art of eight limbs. Teaches authentic Thai boxing techniques.
          </InstructorDescription>
        </InstructorSection>

        <InstructorSection>
          <InstructorName>Dundi Vedantam</InstructorName>
          <InstructorTitle>Jiu-Jitsu Fundamentals Instructor</InstructorTitle>
          <InstructorDescription>
            Teaches Tuesday and Thursday Jiu-Jitsu fundamentals classes. 
            Focuses on building strong foundations for all skill levels.
          </InstructorDescription>
        </InstructorSection>

        <InstructorSection>
          <InstructorName>Cole Patrick</InstructorName>
          <InstructorTitle>Jiu-Jitsu Fundamentals Instructor</InstructorTitle>
          <InstructorDescription>
            Teaches Monday Jiu-Jitsu fundamentals classes. 
            Dedicated to helping students develop solid grappling foundations.
          </InstructorDescription>
        </InstructorSection>

        <InstructorSection>
          <InstructorName>Mario Hoxha</InstructorName>
          <InstructorTitle>Wrestling Instructor</InstructorTitle>
          <InstructorDescription>
            Wrestling specialist who brings high-level grappling expertise 
            to our adult programs. Focuses on takedowns and wrestling fundamentals.
          </InstructorDescription>
        </InstructorSection>

        <InstructorSection>
          <InstructorName>Bjorn Shurdha</InstructorName>
          <InstructorTitle>Kids Jiu-Jitsu Instructor</InstructorTitle>
          <InstructorDescription>
            Specializes in teaching Jiu-Jitsu to children. Creates a fun, 
            safe environment where kids can learn martial arts fundamentals.
          </InstructorDescription>
        </InstructorSection>

        <InstructorSection>
          <InstructorName>Luke Loureiro</InstructorName>
          <InstructorTitle>Kids Wrestling Instructor</InstructorTitle>
          <InstructorDescription>
            Kids wrestling specialist who teaches age-appropriate grappling 
            techniques. Focuses on building confidence and athletic skills.
          </InstructorDescription>
        </InstructorSection>

        <InstructorSection>
          <InstructorName>Nico Mangano</InstructorName>
          <InstructorTitle>Kids Muay Thai Instructor</InstructorTitle>
          <InstructorDescription>
            Dedicated to teaching Muay Thai to children. Emphasizes technique, 
            fitness, and character development in a supportive environment.
          </InstructorDescription>
        </InstructorSection>
      </Content>
    </PageContainer>
  );
} 