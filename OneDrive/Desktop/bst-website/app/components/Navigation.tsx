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
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const LogoContainer = styled.div`
  a {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 1rem;
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
            <Image src="/bst-logo.PNG" alt="BST Jiu-Jitsu Logo" width={60} height={60} />
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
              <DropdownLink href="/programs/muay-thai">
                <DropdownTitle>Muay Thai</DropdownTitle>
                <DropdownDescription>Traditional striking with Diego Martin</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/programs/kids">
                <DropdownTitle>Kids</DropdownTitle>
                <DropdownDescription>Age-appropriate martial arts for children</DropdownDescription>
              </DropdownLink>
            </Dropdown>
          </NavItem>

          <NavItem>
            <NavLink href="/schedule">Schedule</NavLink>
          </NavItem>

          <NavItem>
            <NavButton
              onMouseEnter={() => handleDropdownToggle('adultInstructors')}
            >
              Adult Instructors
            </NavButton>
            <Dropdown $isOpen={openDropdown === 'adultInstructors'}>
              <DropdownLink href="/instructors/sean-rubchinuk">
                <DropdownTitle>Sean Rubchinuk</DropdownTitle>
                <DropdownDescription>Head Coach & World Champion</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/instructors/diego-martin">
                <DropdownTitle>Diego Martin</DropdownTitle>
                <DropdownDescription>Muay Thai Instructor</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/instructors/dundi-vedantam">
                <DropdownTitle>Dundi Vedantam</DropdownTitle>
                <DropdownDescription>Jiu-Jitsu Fundamentals Instructor</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/instructors/cole-patrick">
                <DropdownTitle>Cole Patrick</DropdownTitle>
                <DropdownDescription>Jiu-Jitsu Fundamentals Instructor</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/instructors/mario-hoxha">
                <DropdownTitle>Mario Hoxha</DropdownTitle>
                <DropdownDescription>Wrestling Instructor</DropdownDescription>
              </DropdownLink>
            </Dropdown>
          </NavItem>

          <NavItem>
            <NavButton
              onMouseEnter={() => handleDropdownToggle('kidsInstructors')}
            >
              Kids Instructors
            </NavButton>
            <Dropdown $isOpen={openDropdown === 'kidsInstructors'}>
              <DropdownLink href="/instructors/bjorn-shurdha">
                <DropdownTitle>Bjorn Shurdha</DropdownTitle>
                <DropdownDescription>Kids Jiu-Jitsu Instructor</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/instructors/luke-loureiro">
                <DropdownTitle>Luke Loureiro</DropdownTitle>
                <DropdownDescription>Kids Wrestling Instructor</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/instructors/nico-mangano">
                <DropdownTitle>Nico Mangano</DropdownTitle>
                <DropdownDescription>Kids Muay Thai Instructor</DropdownDescription>
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
              <DropdownLink href="/pricing/jiu-jitsu-muay-thai">
                <DropdownTitle>Complete BST Package</DropdownTitle>
                <DropdownDescription>Access to Jiu-Jitsu and Muay Thai classes</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/pricing/muay-thai">
                <DropdownTitle>Muay Thai Only</DropdownTitle>
                <DropdownDescription>Unlimited Muay Thai classes</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/pricing/kids">
                <DropdownTitle>Kids Program</DropdownTitle>
                <DropdownDescription>Kids Jiu-Jitsu and Wrestling</DropdownDescription>
              </DropdownLink>
              <DropdownLink href="/pricing/special-offer">
                <DropdownTitle>Special Offer</DropdownTitle>
                <DropdownDescription>Limited-time: $250 for gear + 1 month unlimited</DropdownDescription>
              </DropdownLink>
            </Dropdown>
          </NavItem>

          <NavItem>
            <NavLink href="/achievements">Achievements</NavLink>
          </NavItem>

          <ContactButton href="/contact">Contact Us</ContactButton>
        </NavMenu>
      </NavContent>
    </NavContainer>
  );
}

export default Navigation; 