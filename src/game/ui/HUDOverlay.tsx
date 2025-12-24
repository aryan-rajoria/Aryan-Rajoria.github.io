// HUD Overlay component for game controls and minimap

import { useState, useEffect } from 'react';
import { Gauge, MapPin, Menu, X } from 'lucide-react';
import { Location } from '../types/game';
import { GAME_CONFIG } from '../utils/constants';

interface HUDOverlayProps {
  velocity: number;
  carPosition: [number, number, number];
  locations: Location[];
  nearbyLocation: Location | null;
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

export const HUDOverlay = ({
  velocity,
  carPosition,
  locations,
  nearbyLocation,
  onMenuToggle,
  isMenuOpen,
}: HUDOverlayProps) => {
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowControls(false), 5000);
    return () => clearTimeout(timer);
  }, [velocity]);

  const speed = Math.abs(velocity).toFixed(0);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start">
        {/* Speed indicator */}
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 text-white pointer-events-auto">
          <div className="flex items-center gap-2">
            <Gauge className="w-5 h-5 text-blue-400" />
            <div>
              <div className="text-2xl font-bold">{speed}</div>
              <div className="text-xs text-gray-400">km/h</div>
            </div>
          </div>
        </div>

        {/* Menu button */}
        <button
          onClick={onMenuToggle}
          className="bg-black/60 backdrop-blur-sm rounded-lg p-3 text-white pointer-events-auto hover:bg-black/80 transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Nearby location indicator */}
      {nearbyLocation && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-lg p-3 text-white pointer-events-auto">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" style={{ color: nearbyLocation.color }} />
            <span className="font-semibold">{nearbyLocation.name}</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">Press ESC to close</div>
        </div>
      )}

      {/* Controls help */}
      {showControls && (
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white pointer-events-auto">
          <div className="text-sm font-semibold mb-2">Controls</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-300">
            <div>W / ↑ - Accelerate</div>
            <div>S / ↓ - Brake</div>
            <div>A / ← - Turn Left</div>
            <div>D / → - Turn Right</div>
            <div>Space - Handbrake</div>
            <div>ESC - Close Overlay</div>
          </div>
        </div>
      )}

      {/* Minimap */}
      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-2 pointer-events-auto">
        <Minimap
          carPosition={carPosition}
          locations={locations}
          size={150}
        />
      </div>
    </div>
  );
};

interface MinimapProps {
  carPosition: [number, number, number];
  locations: Location[];
  size: number;
}

const Minimap = ({ carPosition, locations, size }: MinimapProps) => {
  const scale = size / 200; // Scale factor for minimap
  const offset = size / 2;

  return (
    <div
      className="relative bg-gray-800 rounded overflow-hidden"
      style={{ width: size, height: size }}
    >
      {/* Roads */}
      <div
        className="absolute bg-gray-700"
        style={{
          left: offset - (10 * scale) / 2,
          top: 0,
          width: 10 * scale,
          height: size,
        }}
      />
      <div
        className="absolute bg-gray-700"
        style={{
          left: 0,
          top: offset - (10 * scale) / 2,
          width: size,
          height: 10 * scale,
        }}
      />

      {/* Location markers */}
      {locations.map((location) => {
        const [x, , z] = location.position;
        const screenX = offset + x * scale;
        const screenY = offset + z * scale;

        return (
          <div
            key={location.id}
            className="absolute w-3 h-3 rounded-full border-2 border-white"
            style={{
              left: screenX - 6,
              top: screenY - 6,
              backgroundColor: location.color,
            }}
            title={location.name}
          />
        );
      })}

      {/* Player marker */}
      <div
        className="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"
        style={{
          left: offset + carPosition[0] * scale - 8,
          top: offset + carPosition[2] * scale - 8,
        }}
      />

      {/* Player direction indicator */}
      <div
        className="absolute w-1 h-3 bg-blue-300"
        style={{
          left: offset + carPosition[0] * scale - 2,
          top: offset + carPosition[2] * scale - 12,
        }}
      />
    </div>
  );
};
