"use client";

import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { colors } from './StyledComponents';

// Versioned key so returning visitors who dismissed the older popup
// still see this new promo exactly once.
const PROMO_POPUP_STORAGE_KEY = 'bst_home_promo_popup_v2';
const PROMO_EMAIL = 'bloodsweatandtearsjj@gmail.com';
const PROMO_MAILTO = `mailto:${PROMO_EMAIL}?subject=${encodeURIComponent(
  '30 Days of Jiu-Jitsu — I want in!'
)}&body=${encodeURIComponent(
  "Hi BST team,\n\nI'd love to learn more about the 30 Days of Jiu-Jitsu offer. When can I start?\n\nThanks!"
)}`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2500;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  /* Overlay is the scroll container + margin:auto on the panel — this keeps the
     top of a tall poster reachable instead of clipped on short screens. */
  overflow-y: auto;
  padding: 1.5rem 1.25rem;
  animation: promoFadeIn 0.28s ease-out;

  @keyframes promoFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Panel = styled.div`
  background: linear-gradient(165deg, #1c1c1c 0%, #0e0e0e 100%);
  border: 2px solid ${colors.red};
  border-radius: 16px;
  /* Clip children (poster + grey footer band) to the rounded corners so the
     square footer no longer pokes past the curve. */
  overflow: hidden;
  max-width: 400px;
  width: 100%;
  margin: auto;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.06),
    0 24px 64px rgba(0, 0, 0, 0.65);
  position: relative;
  animation: promoRise 0.32s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes promoRise {
    from {
      opacity: 0;
      transform: translateY(14px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  z-index: 5;
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

/* The poster is the star of the popup. Clicking it heads to the offer page. */
const PosterLink = styled.a`
  display: block;
  line-height: 0;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Poster = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

const Blurb = styled.div`
  padding: 1.35rem 1.35rem 1.5rem;
  text-align: center;
  /* Distinct grey footer band — clearly separate from the poster's black. */
  background: linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%);
  border-top: 3px solid ${colors.red};
  box-shadow: inset 0 6px 14px rgba(0, 0, 0, 0.3);

  p {
    margin: 0 0 1.05rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.45;
    color: #fff;
  }

  strong {
    color: ${colors.red};
    font-weight: 800;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
`;

const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.white};
  background: ${colors.red};
  border: 2px solid ${colors.red};
  padding: 0.65rem 1.15rem;
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background: transparent;
    color: ${colors.red};
  }
`;

const GhostLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.82);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.28);
  padding: 0.62rem 1.05rem;
  border-radius: 10px;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    color: ${colors.white};
    border-color: ${colors.red};
  }
`;

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let shouldShow = false;
    try {
      if (typeof window !== 'undefined') {
        shouldShow = !window.localStorage.getItem(PROMO_POPUP_STORAGE_KEY);
      }
    } catch {
      shouldShow = true;
    }
    if (shouldShow) {
      setOpen(true);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(PROMO_POPUP_STORAGE_KEY, '1');
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
        aria-label="30 Days of Jiu-Jitsu offer"
        onClick={e => e.stopPropagation()}
      >
        <CloseButton type="button" aria-label="Close" onClick={dismiss}>
          ×
        </CloseButton>

        <PosterLink href="/pricing/30-days" onClick={dismiss}>
          <Poster
            src="/30-days-jiu-jitsu.png"
            alt="30 Days of Jiu-Jitsu — only $49.99. Includes access to our 5 PM beginner class, Monday through Friday."
            width={1054}
            height={1405}
            sizes="(max-width: 480px) 90vw, 420px"
            priority
          />
        </PosterLink>

        <Blurb>
          <p>
            A full month on the mats for <strong>$49.99</strong> — no contracts, no pressure.
          </p>
          <Actions>
            <PrimaryLink href="/pricing/30-days" onClick={dismiss}>
              See the offer
            </PrimaryLink>
            <GhostLink href={PROMO_MAILTO} onClick={dismiss}>
              Email us
            </GhostLink>
          </Actions>
        </Blurb>
      </Panel>
    </Overlay>
  );
}
