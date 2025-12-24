// Custom hook for detecting proximity to locations

import { useEffect, useRef } from 'react';
import { Location } from '../types/game';

interface UseProximityProps {
  carPosition: [number, number, number];
  locations: Location[];
  triggerDistance: number;
  onLocationEnter: (locationId: string) => void;
  onLocationExit: () => void;
  isOverlayOpen: boolean;
}

export const useProximity = ({
  carPosition,
  locations,
  triggerDistance,
  onLocationEnter,
  onLocationExit,
  isOverlayOpen,
}: UseProximityProps) => {
  const currentLocationRef = useRef<string | null>(null);

  useEffect(() => {
    if (isOverlayOpen) return;

    const [carX, carY, carZ] = carPosition;
    let nearestLocation: Location | null = null;
    let nearestDistance = Infinity;

    for (const location of locations) {
      const [locX, locY, locZ] = location.position;
      const distance = Math.sqrt(
        Math.pow(carX - locX, 2) +
        Math.pow(carY - locY, 2) +
        Math.pow(carZ - locZ, 2)
      );

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestLocation = location;
      }
    }

    if (nearestLocation && nearestDistance <= triggerDistance) {
      if (currentLocationRef.current !== nearestLocation.id) {
        currentLocationRef.current = nearestLocation.id;
        onLocationEnter(nearestLocation.id);
      }
    } else if (currentLocationRef.current !== null) {
      currentLocationRef.current = null;
      onLocationExit();
    }
  }, [carPosition, locations, triggerDistance, onLocationEnter, onLocationExit, isOverlayOpen]);

  return currentLocationRef.current;
};
