"use client";

import {
  HeroSection,
  HeroContent,
  Subtitle,
  HeroDescription,
  LinkButton,
  ButtonGroup,
  Container,
  SectionTitle,
  StorySection,
  StoryContent,
  StoryText,
  CommitmentSection,
  CommitmentContent,
  CommitmentText,
} from './components/StyledComponents';
import Navigation from './components/Navigation';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Navigation />
      
      {/* Mobile test banner */}
      <div className="mobile-test">
        MOBILE VERSION IS WORKING! 🎉
      </div>
      
      <HeroSection>
        <HeroContent>
          <Image 
            src="/bst-logo.PNG" 
            alt="BST Jiu-Jitsu Logo" 
            width={350} 
            height={350}
            priority
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <HeroDescription style={{ 
            marginTop: '2rem',
            textAlign: 'center',
            padding: '0 1rem'
          }}>
            Premier martial arts training in Peabody, MA. 
            <strong> No contracts, no commitment.</strong>
          </HeroDescription>
          
          <ButtonGroup>
            <LinkButton href="/contact">START TRAINING</LinkButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      {/* Team Image and Story Section */}
      <div className="team-section">
        <Container>
          <div className="team-grid">
            {/* Team Image on Left */}
            <div className="team-image-container">
              <Image 
                src="/Team1.JPG" 
                alt="BST Team" 
                width={600}
                height={400}
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  objectFit: 'cover', 
                  borderRadius: '12px', 
                  border: '3px solid #CC0000' 
                }}
                priority
              />
            </div>
            
            {/* Story Text on Right */}
            <div>
              <h2 className="section-title">
                OUR STORY
              </h2>
              <div className="text-container">
                <p className="text-paragraph">
                  At Blood Sweat and Tears Jiu Jitsu, our journey began with a shared passion for Jiu Jitsu and a vision to create a space where individuals could discover their true potential. Founded by a young group of kids chasing the upmost of glory!
                </p>
                <p className="text-paragraph">
                  Join us at Blood Sweat and Tears Jiu Jitsu, and become part of a story that's still being written. Together, we'll sweat, learn, and conquer challenges, celebrating each victory as a testament to our shared dedication and spirit. Welcome to our family!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Our Commitment Section with Team3 Image */}
      <div className="team-section">
        <Container>
          <div className="team-grid">
            {/* Commitment Text on Left */}
            <div>
              <h2 className="section-title">
                OUR COMMITMENT
              </h2>
              <div className="text-container">
                <p className="text-paragraph">
                  Welcome to Blood Sweat and Tears Jiu Jitsu, where passion, dedication, and community come together on the mats! Founded by a team of experienced martial artists, our academy is committed to providing high-quality Jiu Jitsu instruction for practitioners of all ages and skill levels.
                </p>
                <p className="text-paragraph">
                  We are dedicated to fostering a supportive environment where every student can grow, learn, and achieve their martial arts goals. Our commitment extends beyond the mats - we're building a community of disciplined, confident individuals who support each other's journey.
                </p>
              </div>
            </div>
            
            {/* Team3 Image on Right */}
            <div className="team-image-container">
              <Image 
                src="/Team3.JPG" 
                alt="BST Team Commitment" 
                width={600}
                height={500}
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  objectFit: 'cover', 
                  borderRadius: '12px', 
                  border: '3px solid #CC0000'
                }}
                priority
              />
            </div>
          </div>
        </Container>
      </div>

      <style jsx>{`
        .mobile-test {
          display: none;
          background: green;
          color: white;
          padding: 20px;
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          margin: 20px 0;
        }
        
        .team-section {
          padding: 4rem 0;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .team-image-container {
          text-align: center;
        }
        
        .section-title {
          color: #CC0000;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          font-family: 'Orbitron', sans-serif;
          text-transform: uppercase;
        }
        
        .text-container {
          color: #ffffff;
          line-height: 1.8;
        }
        
        .text-paragraph {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        
        .text-paragraph:last-child {
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .mobile-test {
            display: block;
          }
          
          .team-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            background: red !important;
            padding: 20px;
          }
          
          .section-title {
            font-size: 2rem;
            background: yellow !important;
            color: black !important;
          }
          
          .text-paragraph {
            background: blue !important;
            color: white !important;
            padding: 10px;
          }
        }
      `}</style>
    </main>
  );
} 