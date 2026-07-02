"use client";

import styled from 'styled-components';
import Image from 'next/image';
import { Container, Section, colors } from '../../components/StyledComponents';
import Navigation from '../../components/Navigation';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${colors.black};
  position: relative;
  overflow-x: hidden;
`;

const PricingSection = styled(Section)`
  padding: 6rem 0 4rem;
  background: ${colors.black};
  color: ${colors.white};
`;

const Eyebrow = styled.p`
  text-align: center;
  margin: 0 0 0.5rem;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${colors.dustyRed};
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${colors.white};
  text-align: center;
  margin: 0;
  font-weight: 800;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  line-height: 1.05;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);

  span {
    color: ${colors.red};
  }

  @media (max-width: 600px) {
    font-size: 2.1rem;
  }
`;

const Tagline = styled.h2`
  font-size: 1.3rem;
  color: ${colors.dustyRed};
  text-align: center;
  margin: 0.75rem 0 2.5rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
`;

const PosterFrame = styled.div`
  max-width: 560px;
  margin: 0 auto 3rem;
  border-radius: 14px;
  overflow: hidden;
  border: 3px solid ${colors.red};
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.55);
  line-height: 0;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const CtaButton = styled.a`
  display: block;
  background: ${colors.red};
  color: ${colors.white};
  padding: 1.4rem 3rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 8px;
  margin: 0 auto 1rem;
  font-family: 'Orbitron', sans-serif;
  transition: all 0.3s ease;
  border: 2px solid ${colors.red};
  text-align: center;
  max-width: 360px;

  &:hover {
    background: ${colors.dustyRed};
    border-color: ${colors.dustyRed};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);
  }
`;

const SecondaryCta = styled.a`
  display: block;
  text-align: center;
  color: ${colors.dustyRed};
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 auto 3rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.white};
    text-decoration: underline;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  margin: 3rem auto 0;
  padding: 2rem;
  max-width: 620px;
  background: ${colors.black};
  border-radius: 8px;
  border: 1px solid ${colors.red};

  h3 {
    color: ${colors.red};
    margin-bottom: 1rem;
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
  }

  p {
    margin: 0.5rem 0;
    color: ${colors.white};
  }

  a {
    color: ${colors.red};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.dustyRed};
      text-decoration: underline;
    }
  }
`;

const PROMO_MAILTO =
  'mailto:bloodsweatandtearsjj@gmail.com?subject=' +
  encodeURIComponent('30 Days of Jiu-Jitsu — I want in!') +
  '&body=' +
  encodeURIComponent(
    "Hi BST team,\n\nI'd love to start the 30 Days of Jiu-Jitsu offer. When can I begin?\n\nThanks!"
  );

export default function ThirtyDays() {
  return (
    <PageContainer>
      <Navigation />
      <PricingSection>
        <Container>
          <Eyebrow>Discipline · Community · Growth</Eyebrow>
          <Title>
            30 Days of <span>Jiu-Jitsu</span>
          </Title>
          <Tagline>Only $49.99 · 30 Days. Lifetime Impact.</Tagline>

          <PosterFrame>
            <Image
              src="/30-days-jiu-jitsu.png"
              alt="30 Days of Jiu-Jitsu — only $49.99. Includes access to our 5 PM beginner class, Monday through Friday. Warm, welcoming community, expert coaching, all levels welcome, and referral bonuses. Start your journey today — spots are limited."
              width={1054}
              height={1405}
              sizes="(max-width: 600px) 92vw, 560px"
              priority
            />
          </PosterFrame>

          <CtaButton href="/contact">Start Your Journey</CtaButton>
          <SecondaryCta href={PROMO_MAILTO}>Or email us your questions →</SecondaryCta>

          <ContactInfo>
            <h3>Ready to Start Your First 30 Days?</h3>
            <p>
              Call or text us to claim your spot: <strong>978-810-2471</strong>
            </p>
            <p>
              Email: <a href={PROMO_MAILTO}>bloodsweatandtearsjj@gmail.com</a>
            </p>
            <p>58 Pulaski Street, Building A, 2nd Floor, Peabody, MA</p>
            <p>
              <strong>Spots are limited — start your journey today!</strong>
            </p>
          </ContactInfo>
        </Container>
      </PricingSection>
    </PageContainer>
  );
}
