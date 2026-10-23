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
  
  @media (max-width: 1279px) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  
  @media (max-width: 768px) {
    padding-top: 80px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  @media (max-width: 480px) {
    padding-top: 70px;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
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
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Description = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 1rem auto 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${colors.white};
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1rem auto 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin: 0.75rem auto 1.5rem;
  }
`;

const NewClassTag = styled.p`
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto 1.25rem;
  padding: 0.85rem 1.25rem;
  background: ${colors.red};
  color: ${colors.white};
  font-family: 'Orbitron', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.45;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.15);

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.75rem 1rem;
  }
`;

const TableWrapper = styled.div`
  background: #000000;
  padding: 20px;
  border-radius: 8px;
  margin: 2rem 0;
  
  @media (max-width: 1279px) {
    padding: 8px;
  }
  
  @media (max-width: 768px) {
    padding: 15px;
    margin: 1.5rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 10px;
    margin: 1rem 0;
  }
`;

const ScheduleTable = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 0;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  background: #404040;
  padding: 1px;
  
  @media (max-width: 1024px) {
    overflow-x: visible;
    background: transparent;
    box-shadow: none;
    padding: 0;
  }
`;

const Table = styled.table`
  width: 100%;
  min-width: 960px;
  table-layout: fixed;
  border-collapse: collapse;
  background: #404040;
  
  @media (max-width: 1279px) {
    min-width: 900px;
  }
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Th = styled.th`
  background: #CC0000 !important;
  color: #FFFFFF !important;
  padding: 1rem 0.5rem;
  text-align: center;
  font-weight: bold;
  font-size: 0.9rem;
  border: 1px solid #000000;
  font-family: 'Orbitron', sans-serif;
  position: relative;
  z-index: 10;
  
  @media (max-width: 1279px) {
    padding: 0.85rem 0.35rem;
    font-size: 0.8rem;
  }
`;

const TimeHeader = styled(Th)`
  width: 80px;
  
  @media (max-width: 1279px) {
    width: 68px;
  }
`;

const Td = styled.td<{ $hasClass: boolean }>`
  padding: 1rem 0.4rem;
  font-size: 0.9rem;
  line-height: 1.3;
  text-align: center;
  vertical-align: middle;
  overflow-wrap: anywhere;
  border: 1px solid #000000;
  background: #404040;
  color: #FFFFFF;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${props => props.$hasClass ? '#330000' : '#1a1a1a'};
  }
  
  @media (max-width: 1279px) {
    padding: 0.85rem 0.3rem;
    font-size: 0.8rem;
  }
`;

const TimeColumn = styled.td`
  background: #CC0000 !important;
  color: #FFFFFF !important;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 1rem 0.5rem;
  text-align: center;
  border: 1px solid #000000;
  font-family: 'Orbitron', sans-serif;
  position: relative;
  z-index: 10;
  
  @media (max-width: 1279px) {
    padding: 0.85rem 0.35rem;
    font-size: 0.8rem;
  }
`;

const MobileSchedule = styled.div`
  display: none;
  
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
    align-items: start;
  }
  
  /* Tablet pairs: MON/TUE, WED/THU, FRI/SAT, then SUN alone and centered */
  @media (min-width: 641px) and (max-width: 1024px) {
    & > [data-day='SUN'] {
      order: 1;
      grid-column: 1 / -1;
      width: calc(50% - 0.625rem);
      justify-self: center;
    }
  }
  
  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
  }
`;

const MobileDay = styled.div`
  min-width: 0;
  background: #404040;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;

const MobileDayHeader = styled.div`
  background: #CC0000;
  color: #FFFFFF;
  padding: 1rem;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
`;

const MobileTimeSlot = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid #000000;
  background: #404040;
  color: #FFFFFF;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: #330000;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
    gap: 0.6rem;
  }
`;

const MobileTime = styled.div`
  flex: 0 0 auto;
  background: #CC0000;
  color: #FFFFFF;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
  font-size: 0.85rem;
  min-width: 72px;
  text-align: center;
  white-space: nowrap;
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    min-width: 64px;
    padding: 0.45rem 0.5rem;
  }
`;

const MobileClass = styled.div`
  flex: 1 1 0;
  min-width: 0;
  font-size: 0.95rem;
  line-height: 1.3;
  overflow-wrap: anywhere;
  
  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const MobileEmpty = styled.div`
  padding: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-style: italic;
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

const TIMES = ['10AM', '11AM', '12PM', '4PM', '5PM', '6PM', '7PM', '8PM'] as const;
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
      '10AM': {
        SUN: '',
        MON: 'BOXING FUNDAMENTALS',
        TUE: '',
        WED: 'BOXING FUNDAMENTALS',
        THU: '',
        FRI: 'BOXING FUNDAMENTALS',
        SAT: 'BOXING ALL LEVELS'
      },
      '11AM': {
        SUN: '',
        MON: '',
        TUE: '',
        WED: '',
        THU: '',
        FRI: '',
        SAT: 'MUAY THAI ALL LEVELS'
      },
      '12PM': {
        SUN: '',
        MON: 'NO-GI JIU JITSU BASICS',
        TUE: 'NO-GI JIU JITSU BASICS',
        WED: 'NO-GI JIU JITSU BASICS',
        THU: 'NO-GI JIU JITSU BASICS',
        FRI: '',
        SAT: ''
      },
      '4PM': {
        SUN: '',
        MON: 'BOXING',
        TUE: 'MUAY THAI FUNDAMENTALS',
        WED: 'BOXING',
        THU: 'MUAY THAI ALL LEVELS',
        FRI: 'BOXING',
        SAT: ''
      },
      '5PM': {
        SUN: '',
        MON: 'NO-GI JIU JITSU BASICS',
        TUE: 'NO-GI JIU JITSU BASICS',
        WED: 'NO-GI JIU JITSU BASICS',
        THU: 'NO-GI JIU JITSU BASICS',
        FRI: 'NO-GI JIU JITSU BASICS',
        SAT: ''
      },
      '6PM': {
        SUN: '',
        MON: 'NO-GI JIU JITSU ALL LEVELS',
        TUE: 'WRESTLING',
        WED: 'NO-GI JIU JITSU ALL LEVELS',
        THU: 'NO-GI JIU JITSU ALL LEVELS',
        FRI: 'OPEN MAT',
        SAT: ''
      },
      '7PM': {
        SUN: '',
        MON: 'LIVE TRAINING',
        TUE: 'LIVE TRAINING',
        WED: 'LIVE TRAINING',
        THU: 'LIVE TRAINING',
        FRI: 'OPEN MAT',
        SAT: ''
      },
      '8PM': {
        SUN: '',
        MON: 'MUAY THAI',
        TUE: '',
        WED: 'MUAY THAI',
        THU: '',
        FRI: 'MUAY THAI',
        SAT: ''
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
              <NewClassTag>
                New Beginner Jiu-Jitsu class (Perfect for Hobbyists) — check it out today!
              </NewClassTag>
              <ScheduleTable>
                <Table>
                  <thead>
                    <tr>
                      <TimeHeader>Time</TimeHeader>
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
              
              <MobileSchedule>
                {schedule.days.map(day => (
                  <MobileDay key={day} data-day={day}>
                    <MobileDayHeader>{day}</MobileDayHeader>
                    {schedule.times.every(time => schedule.classes[time][day] === '') && (
                      <MobileEmpty>No scheduled classes</MobileEmpty>
                    )}
                    {schedule.times.map(time => {
                      const className = schedule.classes[time][day];
                      if (className === '') return null;
                      return (
                        <MobileTimeSlot key={`${day}-${time}`}>
                          <MobileTime>{time}</MobileTime>
                          <MobileClass>{className}</MobileClass>
                        </MobileTimeSlot>
                      );
                    })}
                  </MobileDay>
                ))}
              </MobileSchedule>
            </TableWrapper>
          </Container>

          <ContactInfo>
            <h3>Contact Information</h3>
            <p>58 Pulaski Street, Building A, 2nd Floor</p>
            <p>Peabody, MA</p>
            <p>Call or Text: 978-810-2471</p>
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