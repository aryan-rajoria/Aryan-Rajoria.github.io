// Custom hook for managing game state

import { useState, useCallback } from 'react';
import { GameState, CarState } from '../types/game';

const INITIAL_CAR_STATE: CarState = {
  position: [0, 0.5, 0],
  rotation: [0, 0, 0],
  velocity: 0,
  steering: 0,
};

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    isPlaying: true,
    isOverlayOpen: false,
    currentLocation: null,
    car: INITIAL_CAR_STATE,
  });

  const updateCarPosition = useCallback((position: [number, number, number]) => {
    setGameState(prev => ({
      ...prev,
      car: { ...prev.car, position },
    }));
  }, []);

  const updateCarRotation = useCallback((rotation: [number, number, number]) => {
    setGameState(prev => ({
      ...prev,
      car: { ...prev.car, rotation },
    }));
  }, []);

  const updateCarVelocity = useCallback((velocity: number) => {
    setGameState(prev => ({
      ...prev,
      car: { ...prev.car, velocity },
    }));
  }, []);

  const updateCarSteering = useCallback((steering: number) => {
    setGameState(prev => ({
      ...prev,
      car: { ...prev.car, steering },
    }));
  }, []);

  const openOverlay = useCallback((locationId: string) => {
    setGameState(prev => ({
      ...prev,
      isOverlayOpen: true,
      currentLocation: locationId,
    }));
  }, []);

  const closeOverlay = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      isOverlayOpen: false,
      currentLocation: null,
    }));
  }, []);

  const togglePause = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      isPlaying: !prev.isPlaying,
    }));
  }, []);

  return {
    gameState,
    updateCarPosition,
    updateCarRotation,
    updateCarVelocity,
    updateCarSteering,
    openOverlay,
    closeOverlay,
    togglePause,
  };
};
