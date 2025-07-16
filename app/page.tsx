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
import styled from 'styled-components';
import { colors } from './components/StyledComponents';

const LogoImage = styled(Image)`
  max-width: 100%;
  height: auto;
`;

const HeroDescriptionStyled = styled(HeroDescription)`
  margin-top: 2rem;
  text-align: center;
  padding: 0 1rem;
`;

const TeamSection = styled.div`
  padding: 4rem 0;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TeamImageContainer = styled.div`
  text-align: center;
`;

const TeamImage = styled(Image)`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  border: 3px solid ${colors.red};
`;

const SectionTitleStyled = styled.h2`
  color: ${colors.red};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TextContainer = styled.div`
  color: #ffffff;
  line-height: 1.8;
`;

const TextParagraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export default function Home() {
  return (
    <main>
      <Navigation />
      
      <HeroSection>
        <HeroContent>
          <LogoImage 
            src="/bst-logo.PNG" 
            alt="BST Jiu-Jitsu Logo" 
            width={350} 
            height={350}
            priority
          />
          <HeroDescriptionStyled>
            Premier martial arts training in Peabody, MA. 
            <strong> No contracts, no commitment.</strong>
          </HeroDescriptionStyled>
          
          <ButtonGroup>
            <LinkButton href="/contact">START TRAINING</LinkButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      {/* Team Image and Story Section */}
      <TeamSection>
        <Container>
          <TeamGrid>
            {/* Team Image on Left */}
            <TeamImageContainer>
              <TeamImage 
                src="/Team1.JPG" 
                alt="BST Team" 
                width={600}
                height={400}
                priority
              />
            </TeamImageContainer>
            
            {/* Story Text on Right */}
            <div>
              <SectionTitleStyled>
                OUR STORY
              </SectionTitleStyled>
              <TextContainer>
                <TextParagraph>
                  At Blood Sweat and Tears Jiu Jitsu, our journey began with a shared passion for Jiu Jitsu and a vision to create a space where individuals could discover their true potential. Founded by a young group of kids chasing the upmost of glory!
                </TextParagraph>
                <TextParagraph>
                  Join us at Blood Sweat and Tears Jiu Jitsu, and become part of a story that's still being written. Together, we'll sweat, learn, and conquer challenges, celebrating each victory as a testament to our shared dedication and spirit. Welcome to our family!
                </TextParagraph>
              </TextContainer>
            </div>
          </TeamGrid>
        </Container>
      </TeamSection>

      {/* Our Commitment Section with Team3 Image */}
      <TeamSection>
        <Container>
          <TeamGrid>
            {/* Commitment Text on Left */}
            <div>
              <SectionTitleStyled>
                OUR COMMITMENT
              </SectionTitleStyled>
              <TextContainer>
                <TextParagraph>
                  Welcome to Blood Sweat and Tears Jiu Jitsu, where passion, dedication, and community come together on the mats! Founded by a team of experienced martial artists, our academy is committed to providing high-quality Jiu Jitsu instruction for practitioners of all ages and skill levels.
                </TextParagraph>
                <TextParagraph>
                  We are dedicated to fostering a supportive environment where every student can grow, learn, and achieve their martial arts goals. Our commitment extends beyond the mats - we're building a community of disciplined, confident individuals who support each other's journey.
                </TextParagraph>
              </TextContainer>
            </div>
            
            {/* Team3 Image on Right */}
            <TeamImageContainer>
              <TeamImage 
                src="/Team3.JPG" 
                alt="BST Team Commitment" 
                width={600}
                height={500}
                priority
              />
            </TeamImageContainer>
          </TeamGrid>
        </Container>
      </TeamSection>
    </main>
  );
} 