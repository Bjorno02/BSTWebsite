import {
  HeroSection,
  HeroContent,
  Subtitle,
  HeroDescription,
  Button,
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
            src="/bst-logo.png" 
            alt="BST Jiu-Jitsu Logo" 
            width={350} 
            height={350}
            priority
          />
          <HeroDescription style={{ marginTop: '2rem' }}>
            Premier martial arts training in Peabody, MA. 
            <strong> No contracts, no commitment.</strong>
          </HeroDescription>
          
          <ButtonGroup>
            <Button>START TRAINING</Button>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      {/* Our Story Section */}
      <StorySection>
        <Container>
          <SectionTitle>OUR STORY</SectionTitle>
          <StoryContent>
            <StoryText>
              At Blood Sweat and Tears Jiu Jitsu, our journey began with a shared passion for Jiu Jitsu and a vision to create a space where individuals could discover their true potential. Founded by a young group of kids chasing the upmost of glory!
            </StoryText>
            <StoryText>
              Join us at Blood Sweat and Tears Jiu Jitsu, and become part of a story that's still being written. Together, we'll sweat, learn, and conquer challenges, celebrating each victory as a testament to our shared dedication and spirit. Welcome to our family!
            </StoryText>
          </StoryContent>
        </Container>
      </StorySection>

      {/* Our Commitment Section */}
      <CommitmentSection>
        <Container>
          <SectionTitle>OUR COMMITMENT</SectionTitle>
          <CommitmentContent>
            <CommitmentText>
              Welcome to Blood Sweat and Tears Jiu Jitsu, where passion, dedication, and community come together on the mats! Founded by a team of experienced martial artists, our academy is committed to providing high-quality Jiu Jitsu instruction for practitioners of all ages and skill levels.
            </CommitmentText>
          </CommitmentContent>
        </Container>
      </CommitmentSection>
    </main>
  );
} 