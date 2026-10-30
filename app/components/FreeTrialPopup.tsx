"use client";

import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { colors } from './StyledComponents';

// Shown once per browser session (sessionStorage), so returning visitors get
// a fresh nudge but nobody sees it on every page they open.
const STORAGE_KEY = 'bst_free_trial_popup_v1';
const SHOW_DELAY_MS = 1200;
export const BOOKING_URL = 'https://www.vagaro.com/bloodsweatandtearsjiujitsu/classes';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2500;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  overflow-y: auto;
  padding: 1.5rem 1.25rem;
  animation: trialFadeIn 0.28s ease-out;

  @keyframes trialFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const Panel = styled.div`
  position: relative;
  width: 100%;
  max-width: 440px;
  margin: auto;
  padding: 2.75rem 2rem 2.25rem;
  text-align: center;
  background: linear-gradient(165deg, #1c1c1c 0%, #0e0e0e 100%);
  border: 2px solid ${colors.red};
  border-radius: 16px;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.06),
    0 0 40px rgba(204, 0, 0, 0.25),
    0 24px 64px rgba(0, 0, 0, 0.7);
  animation: trialRise 0.32s cubic-bezier(0.16, 1, 0.3, 1);

  /* Tilted inner frame — echoes the pricing cards' signature look. */
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border: 2px solid ${colors.dustyRed};
    border-radius: 16px;
    transform: rotate(1.5deg);
    pointer-events: none;
    z-index: -1;
  }

  @keyframes trialRise {
    from {
      opacity: 0;
      transform: translateY(14px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.4rem 1.9rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  line-height: 1;
  color: ${colors.white};
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: ${colors.red};
    background: rgba(204, 0, 0, 0.35);
  }
`;

const Logo = styled(Image)`
  width: 96px;
  height: 96px;
  display: block;
  margin: 0 auto 1.1rem;
  border-radius: 50%;
  border: 2px solid ${colors.red};
  box-shadow: 0 0 22px rgba(204, 0, 0, 0.45);
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${colors.red};
  margin-bottom: 0.6rem;
`;

const Heading = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.85rem;
  font-weight: 900;
  line-height: 1.15;
  text-transform: uppercase;
  color: ${colors.white};
  margin: 0 0 0.9rem;
  text-shadow: 0 0 18px rgba(204, 0, 0, 0.35);

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Copy = styled.p`
  margin: 0 0 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);

  strong {
    color: ${colors.white};
    font-weight: 700;
  }
`;

const PrimaryLink = styled.a`
  display: block;
  width: 100%;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.white};
  background: ${colors.red};
  border: 2px solid ${colors.red};
  padding: 0.95rem 1.25rem;
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.dustyRed};
    border-color: ${colors.dustyRed};
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(204, 0, 0, 0.35);
  }
`;

const DismissButton = styled.button`
  display: inline-block;
  margin-top: 1rem;
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.white};
  }
`;

const FinePrint = styled.p`
  margin: 1.1rem 0 0;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);
`;

export default function FreeTrialPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let shouldShow = false;
    try {
      shouldShow = !window.sessionStorage.getItem(STORAGE_KEY);
    } catch {
      shouldShow = true;
    }
    if (!shouldShow) return;

    const timer = window.setTimeout(() => {
      setOpen(true);
      document.body.style.overflow = 'hidden';
    }, SHOW_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const dismiss = useCallback(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
    document.body.style.overflow = '';
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <Overlay role="presentation" onClick={dismiss}>
      <Panel
        role="dialog"
        aria-modal="true"
        aria-labelledby="free-trial-popup-title"
        onClick={e => e.stopPropagation()}
      >
        <CloseButton type="button" aria-label="Close" onClick={dismiss}>
          ×
        </CloseButton>

        <Logo
          src="/bst-logo.PNG"
          alt="BST Jiu-Jitsu"
          width={96}
          height={96}
          priority
        />

        <Eyebrow>Free Trial</Eyebrow>
        <Heading id="free-trial-popup-title">Come Train With Us</Heading>
        <Copy>
          First class is on us. <strong>Jiu Jitsu, Muay Thai, Boxing or Wrestling</strong>,
          your pick. Grab a spot on the schedule and we&apos;ll see you on the mats.
        </Copy>

        <PrimaryLink
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismiss}
        >
          Book a Free Trial
        </PrimaryLink>

        <DismissButton type="button" onClick={dismiss}>
          No thanks
        </DismissButton>

        <FinePrint>Call or text 978-810-2471 if you have questions.</FinePrint>
      </Panel>
    </Overlay>
  );
}
