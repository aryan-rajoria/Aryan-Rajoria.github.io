// Main Game Engine component

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Stars } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { VoxelCar } from './vehicles/VoxelCar';
import { CityWorld } from './world/CityWorld';
import { LocationMarker } from './world/LocationMarker';
import { HUDOverlay } from './ui/HUDOverlay';
import { ResumeOverlay } from './ui/ResumeOverlay';
import { LoadingScreen } from './ui/LoadingScreen';
import { useCarControls } from './hooks/useCarControls';
import { useGameState } from './hooks/useGameState';
import { useProximity } from './hooks/useProximity';
import { RESUME_LOCATIONS, getLocationById } from '../data/resumeData';
import { GAME_CONFIG } from './utils/constants';
import { Location } from './types/game';

export const GameEngine = () => {
  const controls = useCarControls();
  const {
    gameState,
    updateCarPosition,
    updateCarRotation,
    updateCarVelocity,
    openOverlay,
    closeOverlay,
  } = useGameState();

  const [nearbyLocation, setNearbyLocation] = useState<Location | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const currentLocation = gameState.currentLocation
    ? getLocationById(gameState.currentLocation)
    : null;

  // Handle proximity detection
  useProximity({
    carPosition: gameState.car.position,
    locations: RESUME_LOCATIONS,
    triggerDistance: GAME_CONFIG.INTERACTION.TRIGGER_DISTANCE,
    onLocationEnter: (locationId) => {
      const location = getLocationById(locationId);
      if (location) {
        setNearbyLocation(location);
        openOverlay(locationId);
      }
    },
    onLocationExit: () => {
      setNearbyLocation(null);
    },
    isOverlayOpen: gameState.isOverlayOpen,
  });

  // Handle ESC key to close overlay
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && gameState.isOverlayOpen) {
        closeOverlay();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [gameState.isOverlayOpen, closeOverlay]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="w-full h-screen relative">
      {/* 3D Canvas */}
      <Canvas shadows>
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[50, 50, 25]}
          intensity={1}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <pointLight position={[0, 20, 0]} intensity={0.5} />

        {/* Environment */}
        <Environment preset="city" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* Camera */}
        <PerspectiveCamera makeDefault position={[0, 20, 30]} fov={60} />

        {/* Camera Controls (for debugging) */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.5}
          minDistance={10}
          maxDistance={50}
        />

        {/* Game World */}
        <CityWorld locations={RESUME_LOCATIONS} />

        {/* Location Markers */}
        {RESUME_LOCATIONS.map((location) => (
          <LocationMarker
            key={location.id}
            location={location}
            isActive={nearbyLocation?.id === location.id}
          />
        ))}

        {/* Player Car */}
        <VoxelCar
          controls={controls}
          onPositionUpdate={updateCarPosition}
          onRotationUpdate={updateCarRotation}
          onVelocityUpdate={updateCarVelocity}
          initialPosition={gameState.car.position}
        />
      </Canvas>

      {/* HUD Overlay */}
      <HUDOverlay
        velocity={gameState.car.velocity}
        carPosition={gameState.car.position}
        locations={RESUME_LOCATIONS}
        nearbyLocation={nearbyLocation}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      {/* Resume Content Overlay */}
      <ResumeOverlay
        isOpen={gameState.isOverlayOpen}
        location={currentLocation ?? null}
        onClose={closeOverlay}
      />
    </div>
  );
};
