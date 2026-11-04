/**
 * Sistema de Motion Tokens & Presets — NEO-MANGA / FUTURE POP ARCADE
 * Combina a precisão cinematográfica da Apple com a explosão dinâmica de videogames
 * japoneses e editoriais K-pop contemporâneos.
 */

export type MotionPresetName =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale-up'
  | 'fade'
  | 'mask-up'
  | 'arcade-slam'
  | 'hud-scan';

export type MotionDurationToken = 'fast' | 'base' | 'slow' | 'editorial';
export type MotionEasingToken = 'outExpo' | 'outQuart' | 'inOut' | 'linear';

export interface MotionPresetConfig {
  translateX: number;
  translateY: number;
  scale: number;
  opacity: number;
  duration: number;
  easing: string;
  clipReveal?: boolean;
}

export const MOTION_TOKENS = {
  duration: {
    /** Microinterações de arcade, cliques táteis e seleções: 160 ms */
    fast: 160,
    /** Transições de superfícies, reveals e cards: 320 ms */
    base: 320,
    /** Sequências cinematográficas, parênteses de cena e máscaras monumentais: 700 ms */
    slow: 700,
    /** Transições editoriais contínuas: 680 ms */
    editorial: 680,
  },
  stagger: {
    tight: 50,
    base: 75,
    relaxed: 110,
  },
  distance: {
    subtle: 14,
    base: 24,
    feature: 38,
  },
  scale: {
    subtle: 0.985,
    base: 0.96,
    impact: 0.92,
  },
  easing: {
    /** Desaceleração explosiva de anime/arcade: out-expo */
    outExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
    /** Transição suave e equilibrada: out-quart */
    outQuart: 'cubic-bezier(0.25, 1, 0.5, 1)',
    /** Movimento cinético simétrico para loop e alternância: in-out */
    inOut: 'cubic-bezier(0.76, 0, 0.24, 1)',
    /** Linear para animações coordenadas de scroll */
    linear: 'linear',
  },
  parallax: {
    subtle: 0.08,
    medium: 0.18,
    strong: 0.32,
  },
  tilt: {
    max: 8,
    perspective: 1000,
  },
  viewport: {
    defaultThreshold: 0.12,
    defaultRootMargin: '0px 0px -8% 0px',
  },
} as const;

export const MOTION_PRESETS: Record<MotionPresetName, MotionPresetConfig> = {
  'fade-up': {
    translateX: 0,
    translateY: MOTION_TOKENS.distance.base,
    scale: 1,
    opacity: 0,
    duration: MOTION_TOKENS.duration.base,
    easing: MOTION_TOKENS.easing.outExpo,
  },
  'fade-down': {
    translateX: 0,
    translateY: -MOTION_TOKENS.distance.subtle,
    scale: 1,
    opacity: 0,
    duration: MOTION_TOKENS.duration.base,
    easing: MOTION_TOKENS.easing.outExpo,
  },
  'fade-left': {
    translateX: MOTION_TOKENS.distance.base,
    translateY: 0,
    scale: 1,
    opacity: 0,
    duration: MOTION_TOKENS.duration.base,
    easing: MOTION_TOKENS.easing.outExpo,
  },
  'fade-right': {
    translateX: -MOTION_TOKENS.distance.base,
    translateY: 0,
    scale: 1,
    opacity: 0,
    duration: MOTION_TOKENS.duration.base,
    easing: MOTION_TOKENS.easing.outExpo,
  },
  'scale-up': {
    translateX: 0,
    translateY: MOTION_TOKENS.distance.subtle,
    scale: MOTION_TOKENS.scale.base,
    opacity: 0,
    duration: MOTION_TOKENS.duration.base,
    easing: MOTION_TOKENS.easing.outExpo,
  },
  fade: {
    translateX: 0,
    translateY: 0,
    scale: 1,
    opacity: 0,
    duration: MOTION_TOKENS.duration.base,
    easing: MOTION_TOKENS.easing.outQuart,
  },
  'mask-up': {
    translateX: 0,
    translateY: MOTION_TOKENS.distance.feature,
    scale: MOTION_TOKENS.scale.subtle,
    opacity: 0,
    duration: MOTION_TOKENS.duration.slow,
    easing: MOTION_TOKENS.easing.outExpo,
    clipReveal: true,
  },
  'arcade-slam': {
    translateX: 0,
    translateY: -MOTION_TOKENS.distance.feature,
    scale: MOTION_TOKENS.scale.impact,
    opacity: 0,
    duration: MOTION_TOKENS.duration.base,
    easing: MOTION_TOKENS.easing.outExpo,
  },
  'hud-scan': {
    translateX: -MOTION_TOKENS.distance.feature,
    translateY: 0,
    scale: 1,
    opacity: 0,
    duration: MOTION_TOKENS.duration.base,
    easing: MOTION_TOKENS.easing.outExpo,
  },
};
