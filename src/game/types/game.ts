// Game type definitions

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface Location {
  id: string;
  name: string;
  position: [number, number, number];
  color: string;
  icon: string;
  component: React.ComponentType;
}

export interface CarState {
  position: [number, number, number];
  rotation: [number, number, number];
  velocity: number;
  steering: number;
}

export interface GameState {
  isPlaying: boolean;
  isOverlayOpen: boolean;
  currentLocation: string | null;
  car: CarState;
}

export interface ControlsState {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  brake: boolean;
}
