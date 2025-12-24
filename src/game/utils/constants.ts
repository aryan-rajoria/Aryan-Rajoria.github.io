// Game configuration constants

export const GAME_CONFIG = {
  // Car physics
  CAR: {
    MAX_SPEED: 50,
    ACCELERATION: 20,
    BRAKING: 30,
    TURN_SPEED: 2,
    FRICTION: 0.98,
    REVERSE_SPEED: 15,
  },
  // World settings
  WORLD: {
    SIZE: 200,
    BUILDING_COUNT: 20,
    ROAD_WIDTH: 10,
    GROUND_SIZE: 300,
  },
  // Camera
  CAMERA: {
    DISTANCE: 15,
    HEIGHT: 8,
    SMOOTHING: 0.1,
    LOOK_AHEAD: 5,
  },
  // Interaction
  INTERACTION: {
    TRIGGER_DISTANCE: 8,
    INDICATOR_DISTANCE: 20,
  },
  // Colors
  COLORS: {
    GROUND: 0x3a3a3a,
    ROAD: 0x2a2a2a,
    BUILDING_DEFAULT: 0x4a4a6a,
    BUILDING_ABOUT: 0x6366f1,
    BUILDING_EXPERIENCE: 0x10b981,
    BUILDING_EDUCATION: 0xf59e0b,
    BUILDING_PROJECTS: 0xec4899,
    BUILDING_CONTACT: 0x8b5cf6,
    CAR_BODY: 0xef4444,
    CAR_WHEELS: 0x1f2937,
    CAR_WINDOWS: 0x93c5fd,
  },
} as const;

// Location positions in the city
export const LOCATIONS = {
  ABOUT: { position: [-40, 0, -40] as [number, number, number], color: '#6366f1' },
  EXPERIENCE: { position: [40, 0, -40] as [number, number, number], color: '#10b981' },
  EDUCATION: { position: [-40, 0, 40] as [number, number, number], color: '#f59e0b' },
  PROJECTS: { position: [40, 0, 40] as [number, number, number], color: '#ec4899' },
  CONTACT: { position: [0, 0, 60] as [number, number, number], color: '#8b5cf6' },
} as const;
