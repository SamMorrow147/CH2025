/**
 * Unified SwipeDeck Configuration
 * Single source of truth for all interaction thresholds and animation parameters
 */

export const SWIPE_CONFIG = {
  // Gesture Thresholds
  DRAG_THRESHOLD: 140, // Distance (px) to commit navigation
  VELOCITY_THRESHOLD: 1000, // Velocity (px/s) to commit navigation
  CARD_STYLE_THRESHOLD: 10, // Distance (px) before card styling appears
  
  // Arc Motion
  EXIT_ARC_X: 120, // Horizontal drift during exit (px)
  EXIT_ARC_ROTATION: 8, // Rotation during exit (degrees)
  DRAG_ARC_FACTOR: 0.4, // Multiplier for arc during drag (subtle)
  
  // Animation Timing
  COMMIT_DURATION: 0.35, // Exit animation duration (seconds)
  SNAPBACK_DURATION: 0.25, // Snap-back animation duration (seconds)
  ELASTIC_DURATION: 0.2, // Boundary elastic feedback duration (seconds)
  
  // Scroll Wheel
  SCROLL_END_DELAY: 150, // Time (ms) after last scroll to trigger commit
  SCROLL_VELOCITY_SAMPLES: 5, // Number of recent scroll events to track for velocity
  ELASTIC_FACTOR: 0.15, // Resistance at boundaries
  MAX_ELASTIC: 40, // Maximum elastic stretch (px)
  
  // Visual
  OVERSHOOT: 100, // Extra distance beyond viewport for smooth exit (px)
  BORDER_RADIUS: 24, // Card border radius when dragging (px)
  SCALE_MIN: 0.985, // Minimum scale during drag
  SHADOW_BLUR: 40, // Shadow blur radius (px)
  
  // Performance
  DRAG_ELASTIC: 0.2, // Drag elastic resistance
};

/**
 * Phase-based state machine for SwipeDeck
 */
export const SwipeDeckPhase = {
  IDLE: 'idle',
  DRAGGING: 'dragging',
  SETTLING: 'settling',
  COMMITTING: 'committing'
};

/**
 * Animation easing for different phases
 */
export const ANIMATION_EASING = {
  commit: 'easeOut',
  snapback: 'easeOut',
  elastic: 'easeOut',
};
