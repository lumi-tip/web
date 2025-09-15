// Analytics utilities for LearnPack
export interface AnalyticsEvent {
  eventName: string;
  payload: Record<string, any>;
}

declare global {
  interface Window {
    lpTrack?: (eventName: string, payload?: Record<string, any>) => void;
  }
}

export function trackEvent(eventName: string, payload?: Record<string, any>) {
  // Call the global tracking function if available
  if (typeof window !== 'undefined' && window.lpTrack) {
    window.lpTrack(eventName, payload);
  } else {
    // Fallback no-op with console logging for development
    console.log('Analytics Event:', { eventName, payload });
  }
}

// Specific tracking functions for LearnPack events
export const analytics = {
  heroInputFocus: () => trackEvent('hero_input_focus'),
  purposeChange: (purpose: string) => trackEvent('purpose_change', { purpose }),
  heroSubmit: (topic: string, purpose: string) => trackEvent('hero_submit', { topic, purpose }),
  createSuccess: (topic: string, purpose: string) => trackEvent('create_success', { topic, purpose }),
  ctaClick: (cta: string, location: string) => trackEvent('cta_click', { cta, location }),
};