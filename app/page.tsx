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
      <div style={{ 
        padding: '4rem 0', 
        background: '#1a1a1a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Container>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Team Image on Left */}
            <div style={{ textAlign: 'center' }}>
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
                  border: '3px solid #dc143c' 
                }}
                priority
              />
            </div>
            
            {/* Story Text on Right */}
            <div>
              <h2 style={{ 
                color: '#dc143c', 
                fontSize: '2.5rem', 
                marginBottom: '2rem',
                fontFamily: 'Orbitron, sans-serif',
                textTransform: 'uppercase'
              }}>
                OUR STORY
              </h2>
              <div style={{ color: '#ffffff', lineHeight: '1.8' }}>
                <p style={{ 
                  marginBottom: '1.5rem', 
                  fontSize: '1.1rem'
                }}>
                  At Blood Sweat and Tears Jiu Jitsu, our journey began with a shared passion for Jiu Jitsu and a vision to create a space where individuals could discover their true potential. Founded by a young group of kids chasing the upmost of glory!
                </p>
                <p style={{ 
                  fontSize: '1.1rem'
                }}>
                  Join us at Blood Sweat and Tears Jiu Jitsu, and become part of a story that's still being written. Together, we'll sweat, learn, and conquer challenges, celebrating each victory as a testament to our shared dedication and spirit. Welcome to our family!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Our Commitment Section with Team3 Image */}
      <div style={{ 
        padding: '4rem 0', 
        background: '#1a1a1a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Container>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Commitment Text on Left */}
            <div>
              <h2 style={{ 
                color: '#dc143c', 
                fontSize: '2.5rem', 
                marginBottom: '2rem',
                fontFamily: 'Orbitron, sans-serif',
                textTransform: 'uppercase'
              }}>
                OUR COMMITMENT
              </h2>
              <div style={{ color: '#ffffff', lineHeight: '1.8' }}>
                <p style={{ 
                  marginBottom: '1.5rem', 
                  fontSize: '1.1rem'
                }}>
                  Welcome to Blood Sweat and Tears Jiu Jitsu, where passion, dedication, and community come together on the mats! Founded by a team of experienced martial artists, our academy is committed to providing high-quality Jiu Jitsu instruction for practitioners of all ages and skill levels.
                </p>
                <p style={{ 
                  fontSize: '1.1rem'
                }}>
                  We are dedicated to fostering a supportive environment where every student can grow, learn, and achieve their martial arts goals. Our commitment extends beyond the mats - we're building a community of disciplined, confident individuals who support each other's journey.
                </p>
              </div>
            </div>
            
            {/* Team3 Image on Right */}
            <div style={{ textAlign: 'center' }}>
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
                  border: '3px solid #dc143c'
                }}
                priority
              />
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
} 