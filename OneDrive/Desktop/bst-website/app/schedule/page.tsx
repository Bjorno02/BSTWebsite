"use client";

import styled from 'styled-components';
import { Container, Section, colors } from '../components/StyledComponents';
import Navigation from '../components/Navigation';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${colors.black};
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

const ScheduleSection = styled(Section)`
  padding: 6rem 0 4rem;
  background: ${colors.black};
  color: ${colors.white};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${colors.red};
  text-align: center;
  margin: 0;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Description = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 1rem auto 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${colors.white};
  opacity: 0.9;
`;

const TableWrapper = styled.div`
  background: #000000;
  padding: 20px;
  border-radius: 8px;
  margin: 2rem 0;
`;

const ScheduleTable = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 0;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  background: #404040;
  padding: 1px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #404040;
`;

const Th = styled.th`
  background: #CC0000 !important;
  color: #FFFFFF !important;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  border: 1px solid #000000;
  font-family: 'Orbitron', sans-serif;
  position: relative;
  z-index: 10;
`;

const Td = styled.td<{ $hasClass: boolean }>`
  padding: 1rem;
  text-align: center;
  border: 1px solid #000000;
  background: #404040;
  color: #FFFFFF;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${props => props.$hasClass ? '#330000' : '#1a1a1a'};
  }
`;

const TimeColumn = styled.td`
  background: #CC0000 !important;
  color: #FFFFFF !important;
  font-weight: bold;
  padding: 1rem;
  border: 1px solid #000000;
  font-family: 'Orbitron', sans-serif;
  position: relative;
  z-index: 10;
`;

const PricingSection = styled(Section)`
  background: ${colors.darkGrey};
  color: ${colors.white};
  padding: 4rem 0;
`;

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  margin: 2rem auto;
`;

const PricingOption = styled.div`
  background: ${colors.black};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-left: 4px solid ${colors.red};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  h3 {
    color: ${colors.red};
    margin: 0 0 1rem 0;
    font-family: 'Orbitron', sans-serif;
  }

  p {
    margin: 0;
    font-size: 1.2rem;
    color: ${colors.white};
  }
`;

const NoContract = styled.div`
  background: ${colors.red};
  color: ${colors.white};
  padding: 1.5rem;
  text-align: center;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  h3 {
    margin: 0 0 0.5rem 0;
    color: ${colors.white};
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    font-weight: bold;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  margin: 2rem 0;
  padding: 2rem;
  background: ${colors.black};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  h3 {
    color: ${colors.red};
    margin-bottom: 1rem;
    font-family: 'Orbitron', sans-serif;
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

const TIMES = ['12PM', '1PM', '5PM', '6PM', '7PM', '8PM'] as const;
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'] as const;

type ScheduleTime = typeof TIMES[number];
type ScheduleDay = typeof DAYS[number];

type ScheduleClasses = {
  [K in ScheduleTime]: {
    [D in ScheduleDay]: string;
  };
};

interface ScheduleData {
  times: typeof TIMES;
  days: typeof DAYS;
  classes: ScheduleClasses;
}

export default function Schedule() {
  const schedule: ScheduleData = {
    times: TIMES,
    days: DAYS,
    classes: {
      '12PM': {
        SUN: '',
        MON: 'Jiu-Jitsu Fundamentals',
        TUE: 'Jiu-Jitsu Fundamentals',
        WED: '',
        THU: 'Jiu-Jitsu Fundamentals',
        FRI: '',
        SAT: ''
      },
      '1PM': {
        SUN: 'Kids Muay Thai',
        MON: '',
        TUE: '',
        WED: '',
        THU: '',
        FRI: '',
        SAT: 'Kids Muay Thai'
      },
      '5PM': {
        SUN: '',
        MON: 'Kids Jiu-Jitsu',
        TUE: 'Kids Wrestling',
        WED: 'Kids Jiu-Jitsu',
        THU: 'Kids Wrestling',
        FRI: 'Kids Jiu-Jitsu',
        SAT: ''
      },
      '6PM': {
        SUN: 'Beginner Jiu-Jitsu',
        MON: 'Beginner Jiu-Jitsu',
        TUE: 'Wrestling',
        WED: 'Beginner Jiu-Jitsu',
        THU: 'Wrestling',
        FRI: 'Beginner Jiu-Jitsu',
        SAT: 'Beginner Jiu-Jitsu'
      },
      '7PM': {
        SUN: 'Advanced Jiu-Jitsu',
        MON: 'Advanced Jiu-Jitsu',
        TUE: 'Open Mat (Team Training)',
        WED: 'Advanced Jiu-Jitsu',
        THU: 'Open Mat (Team Training)',
        FRI: 'Advanced Jiu-Jitsu',
        SAT: 'Advanced Jiu-Jitsu'
      },
      '8PM': {
        SUN: 'Open Mat',
        MON: 'MUAY THAI',
        TUE: '',
        WED: 'MUAY THAI',
        THU: '',
        FRI: 'MUAY THAI',
        SAT: 'Open Mat'
      }
    }
  };

  return (
    <PageContainer>
      <Navigation />
      <Content>
        <ScheduleSection>
          <Container>
            <Title>Class Schedule 2025</Title>
            <Description>
              Join us for a variety of classes throughout the week. From beginner-friendly sessions 
              to advanced training, we offer programs for all skill levels and age groups.
            </Description>
            
            <TableWrapper>
              <ScheduleTable>
                <Table>
                  <thead>
                    <tr>
                      <Th>Time</Th>
                      {schedule.days.map(day => (
                        <Th key={day}>{day}</Th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.times.map(time => (
                      <tr key={time}>
                        <TimeColumn>{time}</TimeColumn>
                        {schedule.days.map(day => (
                          <Td 
                            key={`${day}-${time}`} 
                            $hasClass={schedule.classes[time][day] !== ''}
                          >
                            {schedule.classes[time][day]}
                          </Td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </ScheduleTable>
            </TableWrapper>
          </Container>

          <PricingSection>
            <Container>
              <PricingContainer>
                <NoContract>
                  <h3>NO CONTRACT - NO COMMITMENT</h3>
                  <p>SPACE LIMITED</p>
                </NoContract>
                <PricingOption>
                  <h3>ADULT DROP-IN'S WELCOMED!</h3>
                </PricingOption>
              </PricingContainer>
            </Container>
          </PricingSection>

          <ContactInfo>
            <h3>Contact Information</h3>
            <p>58 Pulaski Street, Building A, 2nd Floor</p>
            <p>Peabody, MA</p>
            <p>Call or Text: 978-810-247</p>
            <p>
              <a href="https://www.bloodsweattearsjjujitsu.com/book-online" target="_blank" rel="noopener noreferrer">
                Book Online
              </a>
            </p>
          </ContactInfo>
        </ScheduleSection>
      </Content>
    </PageContainer>
  );
} 