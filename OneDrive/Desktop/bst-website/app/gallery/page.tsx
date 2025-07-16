'use client';

import styled from 'styled-components';
import { colors } from '../components/StyledComponents';
import Navigation from '../components/Navigation';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #0A0A0A;
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
  position: relative;
  padding: 120px 20px 80px;
  text-align: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  overflow: hidden;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 2;
  position: relative;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #cccccc;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  z-index: 2;
  position: relative;
`;

const GallerySection = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #ffffff;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const GalleryPlaceholder = styled.div`
  background: linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%);
  border: 2px solid #444;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #666;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

const PlaceholderText = styled.p`
  color: #999;
  font-size: 1.1rem;
  margin: 0;
`;

const ComingSoon = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border-radius: 12px;
  margin: 2rem 0;
`;

const ComingSoonTitle = styled.h3`
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const ComingSoonText = styled.p`
  color: #cccccc;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactSection = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  text-align: center;
`;

const ContactText = styled.p`
  color: #cccccc;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const ContactButton = styled.a`
  display: inline-block;
  background: #333;
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

export default function Gallery() {
  return (
    <PageContainer>
      <Navigation />
      <Content>
        <HeroSection>
          <HeroTitle>GALLERY</HeroTitle>
          <HeroSubtitle>
            Experience the intensity, passion, and dedication of our training sessions through our photo gallery
          </HeroSubtitle>
        </HeroSection>

        <GallerySection>
          <SectionTitle>Training Moments</SectionTitle>
          
          <ComingSoon>
            <ComingSoonTitle>Gallery Coming Soon</ComingSoonTitle>
            <ComingSoonText>
              We're working on capturing the best moments from our training sessions, competitions, and events. 
              Check back soon to see our fighters in action!
            </ComingSoonText>
          </ComingSoon>

          <GalleryGrid>
            <GalleryPlaceholder>
              <PlaceholderText>Training Sessions</PlaceholderText>
            </GalleryPlaceholder>
            
            <GalleryPlaceholder>
              <PlaceholderText>Technique Highlights</PlaceholderText>
            </GalleryPlaceholder>
            
            <GalleryPlaceholder>
              <PlaceholderText>Competitions</PlaceholderText>
            </GalleryPlaceholder>
            
            <GalleryPlaceholder>
              <PlaceholderText>Team Events</PlaceholderText>
            </GalleryPlaceholder>
          </GalleryGrid>
        </GallerySection>

        <ContactSection>
          <ContactText>
            Want to see more? Contact us to learn about upcoming events and training sessions.
          </ContactText>
          <ContactButton href="/contact">Contact Us</ContactButton>
        </ContactSection>
      </Content>
    </PageContainer>
  );
} 