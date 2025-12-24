// Location Marker component for visual indicators

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { Location } from '../types/game';

interface LocationMarkerProps {
  location: Location;
  isActive: boolean;
}

export const LocationMarker = ({ location, isActive }: LocationMarkerProps) => {
  const markerRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (markerRef.current) {
      // Floating animation
      markerRef.current.position.y = 13 + Math.sin(state.clock.elapsedTime * 2) * 0.5;
      // Always face the camera
      markerRef.current.rotation.y = state.camera.rotation.y;
    }
  });

  return (
    <group ref={markerRef} position={location.position}>
      {/* Floating icon */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color={location.color}
          emissive={location.color}
          emissiveIntensity={isActive ? 1 : 0.3}
        />
      </mesh>

      {/* Ring around icon */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.4, 32]} />
        <meshStandardMaterial
          color={location.color}
          emissive={location.color}
          emissiveIntensity={isActive ? 0.8 : 0.2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Location name text */}
      <Text
        position={[0, 2, 0]}
        fontSize={0.8}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {location.name}
      </Text>

      {/* Arrow pointing down */}
      <mesh position={[0, -1.5, 0]}>
        <coneGeometry args={[0.3, 0.8, 4]} />
        <meshStandardMaterial
          color={location.color}
          emissive={location.color}
          emissiveIntensity={isActive ? 0.8 : 0.2}
        />
      </mesh>
    </group>
  );
};
