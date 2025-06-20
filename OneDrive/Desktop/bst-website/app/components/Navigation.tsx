"use client";

import styled from 'styled-components';
import { colors } from './StyledComponents';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${colors.black}95;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid ${colors.red};
  z-index: 1000;
  padding: 1rem 0;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  a {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavItem = styled.div`
  position: relative;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: ${colors.white};
  font-family: 'Orbitron', monospace;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    color: ${colors.red};
    text-shadow: 0 0 10px ${colors.red}50;
  }
`;

const Dropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${colors.darkGrey};
  border: 2px solid ${colors.red};
  min-width: 250px;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'});
  transition: all 0.3s ease;
  z-index: 1001;
  
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

const DropdownLink = styled(Link)`
  display: block;
  padding: 1rem;
  color: ${colors.white};
  text-decoration: none;
  transition: all 0.3s ease;
  border-bottom: 1px solid ${colors.red}30;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: ${colors.red}20;
    color: ${colors.red};
  }
`;

const DropdownTitle = styled.div`
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  color: ${colors.red};
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 0px ${colors.black};
`;

const DropdownDescription = styled.div`
  font-size: 0.9rem;
  line-height: 1.4;
  opacity: 0.9;
`;

const ContactButton = styled(Link)`
  background: ${colors.red};
  color: ${colors.white};
  border: 2px solid ${colors.red};
  font-family: 'Orbitron', monospace;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background: transparent;
    color: ${colors.red};
    box-shadow: 0 0 10px ${colors.red}50;
  }
`;

const NavLink = styled(Link)`
  color: ${colors.white};
  font-family: 'Orbitron', monospace;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  
  &:hover {
    color: ${colors.red};
    text-shadow: 0 0 10px ${colors.red}50;
  }
`;

function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <NavContainer>
      <NavContent>
        <LogoContainer>
          <Link href="/">
            <Image src="/bst-logo.png" alt="BST Jiu-Jitsu Logo" width={60} height={60} />
          </Link>
        </LogoContainer>
        
        <NavMenu onMouseLeave={handleMouseLeave}>
          <NavItem>
            <NavButton
              onMouseEnter={() => handleDropdownToggle('programs')}
            >
              Programs
            </NavButton>
            <Dropdown $isOpen={openDropdown === 'programs'}>
              <DropdownLink href="/programs/jiu-jitsu">
                <DropdownTitle>Jiu-Jitsu</DropdownTitle>
                <DropdownDescription>No-Gi training, self-defense, competition prep</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/programs/mma">
                <DropdownTitle>MMA</DropdownTitle>
                <DropdownDescription>Complete mixed martial arts training</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/programs/muay-thai">
                <DropdownTitle>Muay Thai</DropdownTitle>
                <DropdownDescription>Traditional striking with Diego Martin</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/programs/kids">
                <DropdownTitle>Kids Grappling</DropdownTitle>
                <DropdownDescription>Character development</DropdownDescription>
              </DropdownLink>
            </Dropdown>
          </NavItem>

          <NavItem>
            <NavLink href="/schedule">Schedule</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/gallery">Gallery</NavLink>
          </NavItem>

          <NavItem>
            <NavButton
              onMouseEnter={() => handleDropdownToggle('instructors')}
            >
              Instructors
            </NavButton>
            <Dropdown $isOpen={openDropdown === 'instructors'}>
              <DropdownLink href="/instructors/sean-rubchinuk">
                <DropdownTitle>Sean Rubchinuk</DropdownTitle>
                <DropdownDescription>Head Coach & World Champion</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/instructors/diego-martin">
                <DropdownTitle>Diego Martin</DropdownTitle>
                <DropdownDescription>Muay Thai Instructor</DropdownDescription>
              </DropdownLink>
            </Dropdown>
          </NavItem>

          <NavItem>
            <NavButton
              onMouseEnter={() => handleDropdownToggle('pricing')}
            >
              Pricing
            </NavButton>
            <Dropdown $isOpen={openDropdown === 'pricing'}>
              <DropdownLink href="/pricing/drop-in">
                <DropdownTitle>Drop-In Classes</DropdownTitle>
                <DropdownDescription>Single class and day pass options</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/pricing/complete-mma">
                <DropdownTitle>Complete MMA</DropdownTitle>
                <DropdownDescription>Access to all programs and classes</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/pricing/jiu-jitsu">
                <DropdownTitle>Jiu-Jitsu Only</DropdownTitle>
                <DropdownDescription>Unlimited Jiu-Jitsu classes</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/pricing/kids">
                <DropdownTitle>Kids Program</DropdownTitle>
                <DropdownDescription>Kids Jiu-Jitsu and Wrestling</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/pricing/special-offer">
                <DropdownTitle>Special Offer</DropdownTitle>
                <DropdownDescription>Limited-time: $220 for gear + 1 month unlimited</DropdownDescription>
              </DropdownLink>
            </Dropdown>
          </NavItem>

          <ContactButton href="/contact">Contact Us</ContactButton>
        </NavMenu>
      </NavContent>
    </NavContainer>
  );
}

export default Navigation; 