// Voxel Car component with physics

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { ControlsState } from '../types/game';
import { GAME_CONFIG } from '../utils/constants';

interface VoxelCarProps {
  controls: ControlsState;
  onPositionUpdate: (position: [number, number, number]) => void;
  onRotationUpdate: (rotation: [number, number, number]) => void;
  onVelocityUpdate: (velocity: number) => void;
  initialPosition: [number, number, number];
}

export const VoxelCar = ({
  controls,
  onPositionUpdate,
  onRotationUpdate,
  onVelocityUpdate,
  initialPosition,
}: VoxelCarProps) => {
  const carRef = useRef<Group>(null);

  // Car physics state
  const velocityRef = useRef(0);
  const rotationRef = useRef(0);
  const steeringRef = useRef(0);

  useEffect(() => {
    if (carRef.current) {
      carRef.current.position.set(...initialPosition);
    }
  }, [initialPosition]);

  useFrame((state, delta) => {
    if (!carRef.current) return;

    const { CAR } = GAME_CONFIG;

    // Handle acceleration
    if (controls.forward) {
      velocityRef.current += CAR.ACCELERATION * delta;
    } else if (controls.backward) {
      velocityRef.current -= CAR.ACCELERATION * delta;
    }

    // Handle braking
    if (controls.brake) {
      velocityRef.current *= 0.9;
    }

    // Apply friction
    velocityRef.current *= CAR.FRICTION;

    // Clamp velocity
    velocityRef.current = Math.max(
      -CAR.REVERSE_SPEED,
      Math.min(CAR.MAX_SPEED, velocityRef.current)
    );

    // Handle steering (only when moving)
    if (Math.abs(velocityRef.current) > 0.1) {
      const turnDirection = velocityRef.current > 0 ? 1 : -1;
      if (controls.left) {
        steeringRef.current += CAR.TURN_SPEED * delta * turnDirection;
      } else if (controls.right) {
        steeringRef.current -= CAR.TURN_SPEED * delta * turnDirection;
      } else {
        // Return steering to center
        steeringRef.current *= 0.9;
      }
    }

    // Clamp steering
    steeringRef.current = Math.max(-0.5, Math.min(0.5, steeringRef.current));

    // Update rotation
    rotationRef.current += steeringRef.current * velocityRef.current * delta * 0.1;

    // Update position based on velocity and rotation
    const moveX = Math.sin(rotationRef.current) * velocityRef.current * delta;
    const moveZ = Math.cos(rotationRef.current) * velocityRef.current * delta;

    carRef.current.position.x += moveX;
    carRef.current.position.z += moveZ;
    carRef.current.rotation.y = rotationRef.current;

    // Update parent state
    onPositionUpdate([
      carRef.current.position.x,
      carRef.current.position.y,
      carRef.current.position.z,
    ]);
    onRotationUpdate([0, rotationRef.current, 0]);
    onVelocityUpdate(velocityRef.current);
  });

  return (
    <group ref={carRef}>
      {/* Car Body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 0.8, 3.5]} />
        <meshStandardMaterial color={GAME_CONFIG.COLORS.CAR_BODY} />
      </mesh>

      {/* Car Roof */}
      <mesh position={[0, 1.1, -0.3]}>
        <boxGeometry args={[1.6, 0.6, 1.8]} />
        <meshStandardMaterial color={GAME_CONFIG.COLORS.CAR_BODY} />
      </mesh>

      {/* Windows */}
      <mesh position={[0, 1.1, -0.3]}>
        <boxGeometry args={[1.5, 0.5, 1.7]} />
        <meshStandardMaterial color={GAME_CONFIG.COLORS.CAR_WINDOWS} transparent opacity={0.7} />
      </mesh>

      {/* Front Wheels */}
      <mesh position={[-0.9, 0.3, 1.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color={GAME_CONFIG.COLORS.CAR_WHEELS} />
      </mesh>
      <mesh position={[0.9, 0.3, 1.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color={GAME_CONFIG.COLORS.CAR_WHEELS} />
      </mesh>

      {/* Rear Wheels */}
      <mesh position={[-0.9, 0.3, -1.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color={GAME_CONFIG.COLORS.CAR_WHEELS} />
      </mesh>
      <mesh position={[0.9, 0.3, -1.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color={GAME_CONFIG.COLORS.CAR_WHEELS} />
      </mesh>

      {/* Headlights */}
      <mesh position={[-0.6, 0.5, 1.76]}>
        <boxGeometry args={[0.3, 0.2, 0.05]} />
        <meshStandardMaterial color={0xffffcc} emissive={0xffffcc} emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.6, 0.5, 1.76]}>
        <boxGeometry args={[0.3, 0.2, 0.05]} />
        <meshStandardMaterial color={0xffffcc} emissive={0xffffcc} emissiveIntensity={0.5} />
      </mesh>

      {/* Taillights */}
      <mesh position={[-0.6, 0.5, -1.76]}>
        <boxGeometry args={[0.3, 0.2, 0.05]} />
        <meshStandardMaterial color={0xff0000} emissive={0xff0000} emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0.6, 0.5, -1.76]}>
        <boxGeometry args={[0.3, 0.2, 0.05]} />
        <meshStandardMaterial color={0xff0000} emissive={0xff0000} emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
};
