"use client";

import { useEffect, useState } from 'react';
import styled from 'styled-components';
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
  colors,
} from './components/StyledComponents';
import Navigation from './components/Navigation';
import Image from 'next/image';

const BASICS_POPUP_STORAGE_KEY = 'bst_home_basics_class_popup_seen';

const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2500;
  background: rgba(0, 0, 0, 0.78);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  animation: fadeIn 0.25s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const PopupPanel = styled.div`
  background: linear-gradient(165deg, #222 0%, #141414 100%);
  border: 2px solid ${colors.red};
  border-radius: 14px;
  max-width: 520px;
  width: 100%;
  padding: 1.75rem 1.5rem 1.5rem;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.06),
    0 24px 64px rgba(0, 0, 0, 0.55);
  position: relative;
`;

const PopupBadge = styled.span`
  display: inline-block;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.white};
  background: ${colors.red};
  padding: 0.35rem 0.65rem;
  border-radius: 6px;
  margin-bottom: 1rem;
`;

const PopupTitle = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.35rem;
  font-weight: 800;
  color: ${colors.white};
  margin: 0 0 0.85rem;
  line-height: 1.25;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const PopupBody = styled.p`
  margin: 0 0 1rem;
  font-size: 1.05rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.92);
`;

const PopupCasual = styled.p`
  margin: 0 0 1.35rem;
  font-size: 0.98rem;
  line-height: 1.55;
  color: ${colors.red};
  font-weight: 600;
`;

const PopupActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  align-items: center;
`;

const PopupButtonPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.white};
  background: ${colors.red};
  border: 2px solid ${colors.red};
  padding: 0.65rem 1.1rem;
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background: transparent;
    color: ${colors.red};
  }
`;

const PopupButtonSecondary = styled.button`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 0.6rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    color: ${colors.white};
    border-color: rgba(255, 255, 255, 0.45);
  }
`;

export default function Home() {
  const [showBasicsPopup, setShowBasicsPopup] = useState(false);

  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      const seen = window.localStorage.getItem(BASICS_POPUP_STORAGE_KEY);
      if (!seen) {
        setShowBasicsPopup(true);
        document.body.style.overflow = 'hidden';
      }
    } catch {
      setShowBasicsPopup(true);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!showBasicsPopup) {
      document.body.style.overflow = '';
    }
  }, [showBasicsPopup]);

  const dismissBasicsPopup = () => {
    try {
      window.localStorage.setItem(BASICS_POPUP_STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
    setShowBasicsPopup(false);
  };

  return (
    <main>
      {showBasicsPopup && (
        <PopupOverlay
          role="presentation"
          onClick={dismissBasicsPopup}
        >
          <PopupPanel
            role="dialog"
            aria-modal="true"
            aria-labelledby="basics-popup-title"
            onClick={e => e.stopPropagation()}
          >
            <PopupBadge>New</PopupBadge>
            <PopupTitle id="basics-popup-title">
              New basics class — 5 PM weekdays
            </PopupTitle>
            <PopupBody>
              We added a <strong>Beginner Jiu-Jitsu</strong> slot at <strong>5 PM Monday through Friday</strong>,
              a more casual class for hobbyists, curious first-timers, and anyone who wants a solid
              foundation without the pressure.
            </PopupBody>
            <PopupCasual>
              It&apos;s a relaxed, learning pace: show up as you are, grasp the fundamentals, and ease into the mats
              on your terms.
            </PopupCasual>
            <PopupActions>
              <PopupButtonPrimary href="/schedule" onClick={dismissBasicsPopup}>
                View schedule
              </PopupButtonPrimary>
              <PopupButtonSecondary type="button" onClick={dismissBasicsPopup}>
                Got it
              </PopupButtonSecondary>
            </PopupActions>
          </PopupPanel>
        </PopupOverlay>
      )}
      <Navigation />
      

      
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
      <div className="hero-divider" />

      {/* Scroll Reveal Feature Image */}
      <div className="feature-image-section">
        <Container>
          <div className="feature-grid">
            <div className="feature-copy">
              <h2 className="feature-title">Check out our Kids Program!</h2>
              <p className="feature-text">
                A fun, structured program that builds confidence, discipline, and real skills.
              </p>
              <a className="feature-cta" href="/programs/kids">Learn More</a>
            </div>
            <div className="feature-image-frame">
              <Image
                src="/IMG_7421.PNG"
                alt="BST Kids Program"
                width={600}
                height={420}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
                priority={false}
              />
            </div>
          </div>
        </Container>
      </div>

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
        .hero-divider {
          height: 4px;
          width: 100%;
          background: #CC0000;
          box-shadow: 0 0 18px rgba(204, 0, 0, 0.35);
        }

        .feature-image-section {
          padding: 2.25rem 0 1.25rem;
          background: #1a1a1a;
        }

        .feature-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 600px;
          gap: 2rem;
          align-items: center;
        }

        .feature-image-frame {
          border-radius: 14px;
          overflow: hidden;
          border: 3px solid #CC0000;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.55);
          background: #000;
          width: 100%;
          max-width: 600px;
        }

        .feature-copy {
          padding: 0.35rem 0;
        }

        .feature-title {
          color: #CC0000;
          font-size: 2.25rem;
          margin: 0 0 0.75rem;
          font-family: 'Orbitron', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1.1;
        }

        .feature-text {
          color: #ffffff;
          opacity: 0.92;
          margin: 0 0 1.15rem;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .feature-cta {
          display: inline-block;
          background: #CC0000;
          color: #ffffff;
          border: 2px solid #CC0000;
          padding: 0.7rem 1rem;
          border-radius: 10px;
          text-decoration: none;
          font-family: 'Orbitron', sans-serif;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transition: all 0.25s ease;
        }

        .feature-cta:hover {
          background: transparent;
          color: #CC0000;
          box-shadow: 0 0 12px rgba(204, 0, 0, 0.35);
        }

        @media (max-width: 768px) {
          .feature-image-section {
            padding: 1.75rem 0 0.85rem;
          }

          .feature-image-frame {
            border-radius: 12px;
          }

          .feature-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .feature-image-frame {
            order: -1;
          }

          .feature-image-frame {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
          }

          .feature-copy {
            text-align: center;
          }

          .feature-title {
            font-size: 1.85rem;
          }

          .feature-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .feature-image-section {
            padding: 1.35rem 0 0.6rem;
          }

          .feature-image-frame {
            border-radius: 10px;
          }

          .feature-image-frame {
            width: 100%;
            max-width: 600px;
          }

          .feature-title {
            font-size: 1.55rem;
          }
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
          letter-spacing: 0.05em;
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
          
          .team-section {
            padding: 2rem 0;
          }
          
          .team-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 1rem;
          }
          
          .section-title {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 1.5rem;
          }
          
          .text-paragraph {
            font-size: 1rem;
            text-align: center;
            padding: 0 0.5rem;
          }
          
          .team-image-container {
            order: -1;
          }
          
          .team-image-container img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 1.75rem;
          }
          
          .text-paragraph {
            font-size: 0.95rem;
          }
          
          .team-section {
            padding: 1.5rem 0;
          }
          
          .team-grid {
            gap: 1.5rem;
            padding: 0 0.75rem;
          }
        }
      `}</style>
    </main>
  );
} 