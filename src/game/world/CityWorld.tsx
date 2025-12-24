// City World component with voxel buildings

import { useMemo } from 'react';
import { GAME_CONFIG } from '../utils/constants';
import { Location } from '../types/game';

interface CityWorldProps {
  locations: Location[];
}

export const CityWorld = ({ locations }: CityWorldProps) => {
  const { WORLD, COLORS } = GAME_CONFIG;

  // Generate decorative buildings
  const decorativeBuildings = useMemo(() => {
    const buildings: JSX.Element[] = [];
    const count = WORLD.BUILDING_COUNT;

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * WORLD.SIZE * 1.5;
      const z = (Math.random() - 0.5) * WORLD.SIZE * 1.5;

      // Skip if too close to a location
      const tooClose = locations.some(loc => {
        const [lx, , lz] = loc.position;
        return Math.sqrt(Math.pow(x - lx, 2) + Math.pow(z - lz, 2)) < 15;
      });

      if (tooClose) continue;

      const width = 3 + Math.random() * 4;
      const height = 5 + Math.random() * 15;
      const depth = 3 + Math.random() * 4;
      const color = COLORS.BUILDING_DEFAULT;

      buildings.push(
        <mesh key={`building-${i}`} position={[x, height / 2, z]}>
          <boxGeometry args={[width, height, depth]} />
          <meshStandardMaterial color={color} />
        </mesh>
      );
    }

    return buildings;
  }, [locations, WORLD, COLORS]);

  return (
    <group>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <planeGeometry args={[WORLD.GROUND_SIZE, WORLD.GROUND_SIZE]} />
        <meshStandardMaterial color={COLORS.GROUND} />
      </mesh>

      {/* Roads - Cross pattern */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[WORLD.ROAD_WIDTH, WORLD.GROUND_SIZE]} />
        <meshStandardMaterial color={COLORS.ROAD} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[WORLD.GROUND_SIZE, WORLD.ROAD_WIDTH]} />
        <meshStandardMaterial color={COLORS.ROAD} />
      </mesh>

      {/* Road markings */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={`marking-${i}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.02, -WORLD.GROUND_SIZE / 2 + i * (WORLD.GROUND_SIZE / 20)]}
        >
          <planeGeometry args={[0.5, 3]} />
          <meshStandardMaterial color={0xffff00} />
        </mesh>
      ))}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={`marking-v-${i}`}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          position={[-WORLD.GROUND_SIZE / 2 + i * (WORLD.GROUND_SIZE / 20), 0.02, 0]}
        >
          <planeGeometry args={[0.5, 3]} />
          <meshStandardMaterial color={0xffff00} />
        </mesh>
      ))}

      {/* Decorative buildings */}
      {decorativeBuildings}

      {/* Location buildings */}
      {locations.map((location) => (
        <group key={location.id} position={location.position}>
          {/* Building base */}
          <mesh position={[0, 5, 0]}>
            <boxGeometry args={[8, 10, 8]} />
            <meshStandardMaterial color={location.color} />
          </mesh>

          {/* Building roof */}
          <mesh position={[0, 10.5, 0]}>
            <boxGeometry args={[9, 1, 9]} />
            <meshStandardMaterial color={location.color} />
          </mesh>

          {/* Building entrance */}
          <mesh position={[0, 2, 4.1]}>
            <boxGeometry args={[2, 4, 0.2]} />
            <meshStandardMaterial color={0x1a1a2e} />
          </mesh>

          {/* Windows */}
          {Array.from({ length: 3 }).map((_, floor) =>
            Array.from({ length: 4 }).map((_, window) => (
              <mesh
                key={`window-${floor}-${window}`}
                position={[
                  -2.5 + window * 1.7,
                  3 + floor * 2.5,
                  4.1,
                ]}
              >
                <boxGeometry args={[0.8, 1.2, 0.1]} />
                <meshStandardMaterial color={0x87ceeb} emissive={0x87ceeb} emissiveIntensity={0.3} />
              </mesh>
            ))
          )}

          {/* Sign */}
          <mesh position={[0, 12, 4.1]}>
            <boxGeometry args={[6, 1.5, 0.2]} />
            <meshStandardMaterial color={0xffffff} />
          </mesh>
        </group>
      ))}
    </group>
  );
};
