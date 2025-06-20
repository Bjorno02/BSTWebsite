"use client";

import styled, { keyframes } from 'styled-components';

// Color constants - darker, more grungy reds
export const colors = {
  red: '#CC0000', // Darker red
  black: '#0A0A0A', // Much darker black
  grey: '#404040',
  white: '#FFFFFF',
  darkGrey: '#2A2A2A',
  dustyRed: '#990000', // Much darker dusty red
  bloodRed: '#800000', // Even darker for depth
};

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

const glitch = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-1px, 1px);
  }
  40% {
    transform: translate(-1px, -1px);
  }
  60% {
    transform: translate(1px, 1px);
  }
  80% {
    transform: translate(1px, -1px);
  }
  100% {
    transform: translate(0);
  }
`;

// Layout Components
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Section = styled.section`
  padding: 4rem 0;
  
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

// Hero Section
export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-color: ${colors.black};
  padding-top: 80px; /* Account for fixed navigation */
  
  &::before {
    content: '';
    position: absolute;
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
    opacity: 0.3;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      /* Vignette overlay */
      radial-gradient(ellipse at center, transparent 40%, ${colors.black} 100%);
    z-index: 2;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 3;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const GrungeTitle = styled.h1`
  font-family: 'Orbitron', monospace;
  font-size: clamp(4rem, 15vw, 9rem);
  font-weight: 900;
  color: ${colors.red};
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 0px ${colors.black};
  letter-spacing: 0.1em;
`;

export const Subtitle = styled.p`
  font-family: 'Orbitron', monospace;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: ${colors.red};
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-shadow: 1px 1px 0px ${colors.black};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -8px;
    right: -8px;
    bottom: -3px;
    border: 1px solid ${colors.red}40;
    transform: rotate(-0.5deg);
    pointer-events: none;
  }
`;

export const HeroDescription = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: ${colors.white};
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  
  strong {
    color: ${colors.red};
    font-weight: 600;
    text-shadow: 1px 1px 0px ${colors.black};
  }
`;

// Button Components
export const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  font-family: 'Orbitron', monospace;
  font-size: 1.125rem;
  font-weight: 700;
  padding: 1rem 2rem;
  border: 2px solid ${colors.red};
  background: ${props => props.$variant === 'secondary' ? 'transparent' : colors.red};
  color: ${props => props.$variant === 'secondary' ? colors.red : colors.white};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 3px,
        ${colors.red}10 3px,
        ${colors.red}10 6px
      );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    background: ${props => props.$variant === 'secondary' ? colors.red : 'transparent'};
    color: ${props => props.$variant === 'secondary' ? colors.white : colors.red};
    transform: translateY(-1px);
    box-shadow: 
      0 0 0 1px ${colors.black},
      0 0 0 3px ${colors.red},
      0 0 15px ${colors.red}40;
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

// Programs Section
export const ProgramsSection = styled.section`
  padding: 6rem 0;
  background: 
    linear-gradient(180deg, transparent 0%, ${colors.black} 20%, ${colors.black} 80%, transparent 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 25% 25%, ${colors.red}05, transparent 50%),
      radial-gradient(circle at 75% 75%, ${colors.dustyRed}03, transparent 50%);
    pointer-events: none;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  color: ${colors.red};
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 0px ${colors.black};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: ${colors.red};
    box-shadow: 0 0 10px ${colors.red}50;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: ${colors.white};
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

export const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const ProgramCard = styled.div`
  background: ${colors.darkGrey};
  border: 2px solid ${colors.red};
  padding: 2rem;
  position: relative;
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
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(45deg, transparent 30%, ${colors.red}05, transparent 70%);
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 0 0 2px ${colors.black},
      0 0 0 4px ${colors.red},
      0 0 20px ${colors.red}30;
  }
`;

export const ProgramTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 1rem;
  text-shadow: 1px 1px 0px ${colors.black};
`;

export const ProgramDescription = styled.p`
  color: ${colors.white};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const ProgramFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ProgramFeature = styled.li`
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
`;

// Schedule Section
export const ScheduleSection = styled.section`
  padding: 6rem 0;
  background: ${colors.black};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 30px,
        ${colors.red}01 30px,
        ${colors.red}01 32px
      );
    pointer-events: none;
  }
`;

export const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const ScheduleCard = styled.div`
  background: ${colors.darkGrey};
  border: 2px solid ${colors.red};
  padding: 1.5rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid ${colors.dustyRed};
    transform: rotate(-0.5deg);
    pointer-events: none;
  }
`;

export const ScheduleDay = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 1rem;
  text-shadow: 1px 1px 0px ${colors.black};
`;

export const ScheduleTime = styled.div`
  color: ${colors.white};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const ScheduleClass = styled.div`
  color: ${colors.white};
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  border-left: 2px solid ${colors.red};
`;

// Pricing Section
export const PricingSection = styled.section`
  padding: 6rem 0;
  background: 
    linear-gradient(180deg, ${colors.black} 0%, ${colors.darkGrey} 50%, ${colors.black} 100%);
  position: relative;
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const PricingCard = styled.div<{ $featured?: boolean }>`
  background: ${props => props.$featured ? colors.red : colors.darkGrey};
  border: 3px solid ${props => props.$featured ? colors.white : colors.red};
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 1px solid ${props => props.$featured ? colors.white : colors.dustyRed};
    transform: rotate(${props => props.$featured ? 2 : 1}deg);
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 0 0 2px ${colors.black},
      0 0 0 4px ${colors.red},
      0 0 20px ${colors.red}40;
  }
`;

export const PricingTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.color || colors.white};
  margin-bottom: 1rem;
  text-shadow: 1px 1px 0px ${colors.black};
`;

export const PricingPrice = styled.div`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  font-weight: 900;
  color: ${props => props.color || colors.red};
  margin-bottom: 1rem;
  text-shadow: 2px 2px 0px ${colors.black};
`;

export const PricingDescription = styled.p`
  color: ${colors.white};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

// Instructors Section
export const InstructorsSection = styled.section`
  padding: 6rem 0;
  background: ${colors.black};
  position: relative;
`;

export const InstructorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

export const InstructorCard = styled.div`
  background: ${colors.darkGrey};
  border: 2px solid ${colors.red};
  padding: 2rem;
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

export const InstructorName = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 0px ${colors.black};
`;

export const InstructorTitle = styled.p`
  font-family: 'Orbitron', monospace;
  font-size: 1rem;
  color: ${colors.red};
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const InstructorBio = styled.p`
  color: ${colors.white};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const InstructorCredits = styled.div`
  color: ${colors.white};
  font-size: 0.9rem;
  line-height: 1.5;
`;

// Contact Section
export const ContactSection = styled.section`
  padding: 6rem 0;
  background: 
    linear-gradient(180deg, ${colors.black} 0%, ${colors.darkGrey} 100%);
  position: relative;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

export const ContactInfo = styled.div`
  background: ${colors.darkGrey};
  border: 2px solid ${colors.red};
  padding: 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid ${colors.dustyRed};
    transform: rotate(-0.5deg);
    pointer-events: none;
  }
`;

export const ContactTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 1rem;
  text-shadow: 1px 1px 0px ${colors.black};
`;

export const ContactDetail = styled.div`
  color: ${colors.white};
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const ContactLink = styled.a`
  color: ${colors.red};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${colors.white};
  }
`;

// Our Story Section
export const StorySection = styled.section`
  padding: 6rem 0;
  background: ${colors.black};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
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
    opacity: 0.2;
    z-index: 1;
  }
`;

export const StoryContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const StoryText = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: ${colors.white};
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: left;
  
  strong {
    color: ${colors.red};
    font-weight: 600;
  }
`;

// Our Commitment Section
export const CommitmentSection = styled.section`
  padding: 6rem 0;
  background: ${colors.black};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
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
    opacity: 0.2;
    z-index: 1;
  }
`;

export const CommitmentContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const CommitmentText = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: ${colors.white};
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: left;
  
  strong {
    color: ${colors.red};
    font-weight: 600;
  }
`;

// Muay Thai Section
export const MuayThaiSection = styled.section`
  padding: 6rem 0;
  background: 
    linear-gradient(180deg, ${colors.darkGrey} 0%, ${colors.black} 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 70%, ${colors.red}06, transparent 50%),
      radial-gradient(circle at 70% 30%, ${colors.dustyRed}04, transparent 50%);
    pointer-events: none;
  }
`;

export const MuayThaiContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const MuayThaiText = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: ${colors.white};
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: left;
  
  strong {
    color: ${colors.red};
    font-weight: 600;
  }
`;

// Drop-Ins Section
export const DropInsSection = styled.section`
  padding: 6rem 0;
  background: ${colors.black};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 25px,
        ${colors.red}01 25px,
        ${colors.red}01 27px
      );
    pointer-events: none;
  }
`;

export const DropInsContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const DropInsPrice = styled.div`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: ${colors.red};
  margin-bottom: 1rem;
  text-shadow: 2px 2px 0px ${colors.black};
`;

export const DropInsText = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: ${colors.white};
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: left;
  
  strong {
    color: ${colors.red};
    font-weight: 600;
  }
`;

// Enhanced Instructor Card for detailed bios
export const InstructorCardDetailed = styled.div`
  background: ${colors.darkGrey};
  border: 2px solid ${colors.red};
  padding: 2.5rem;
  text-align: left;
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

export const InstructorNameLarge = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 0px ${colors.black};
`;

export const InstructorTitleLarge = styled.p`
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem;
  color: ${colors.red};
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

export const InstructorBioLarge = styled.p`
  color: ${colors.white};
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

export const InstructorCreditsLarge = styled.div`
  color: ${colors.white};
  font-size: 0.95rem;
  line-height: 1.6;
  background: ${colors.black}40;
  padding: 1rem;
  border-left: 3px solid ${colors.red};
`; 