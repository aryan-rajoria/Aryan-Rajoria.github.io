// Custom hook for handling car controls

import { useState, useEffect, useCallback } from 'react';
import { ControlsState } from '../types/game';

export const useCarControls = () => {
  const [controls, setControls] = useState<ControlsState>({
    forward: false,
    backward: false,
    left: false,
    right: false,
    brake: false,
  });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key.toLowerCase()) {
      case 'w':
      case 'arrowup':
        setControls(prev => ({ ...prev, forward: true }));
        break;
      case 's':
      case 'arrowdown':
        setControls(prev => ({ ...prev, backward: true }));
        break;
      case 'a':
      case 'arrowleft':
        setControls(prev => ({ ...prev, left: true }));
        break;
      case 'd':
      case 'arrowright':
        setControls(prev => ({ ...prev, right: true }));
        break;
      case ' ':
        setControls(prev => ({ ...prev, brake: true }));
        break;
    }
  }, []);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    switch (e.key.toLowerCase()) {
      case 'w':
      case 'arrowup':
        setControls(prev => ({ ...prev, forward: false }));
        break;
      case 's':
      case 'arrowdown':
        setControls(prev => ({ ...prev, backward: false }));
        break;
      case 'a':
      case 'arrowleft':
        setControls(prev => ({ ...prev, left: false }));
        break;
      case 'd':
      case 'arrowright':
        setControls(prev => ({ ...prev, right: false }));
        break;
      case ' ':
        setControls(prev => ({ ...prev, brake: false }));
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return controls;
};
