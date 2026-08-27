import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Icosahedron, MeshDistortMaterial, Float } from '@react-three/drei';
// @ts-ignore — maath ships without types
import * as random from 'maath/random/dist/maath-random.esm';
import type { Group, Points as ThreePoints } from 'three';

// Shared, throttled pointer position (-1..1) so the canvas can stay pointer-events:none.
const pointer = { x: 0, y: 0 };

function useGlobalPointer() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
}

/* A drifting field of nodes — the ambient "signal" layer. */
function StarField({ reduced }: { reduced: boolean }) {
  const ref = useRef<ThreePoints>(null);
  const positions = useMemo(
    () => random.inSphere(new Float32Array(1600 * 3), { radius: 6.5 }) as Float32Array,
    [],
  );

  useFrame((_, delta) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.y -= delta / 24;
    ref.current.rotation.x -= delta / 42;
  });

  return (
    <group rotation={[0, 0, Math.PI / 5]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#5b74a8" size={0.014} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

/* The latent form — a slowly morphing wireframe icosahedron with a soft inner core. */
function LatentForm({ reduced }: { reduced: boolean }) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reduced) group.current.rotation.y += delta * 0.12;
    // Subtle mouse parallax
    const tx = pointer.x * 0.35;
    const ty = -pointer.y * 0.28;
    group.current.position.x += (1.7 + tx - group.current.position.x) * 0.04;
    group.current.position.y += (0.15 + ty - group.current.position.y) * 0.04;
    group.current.rotation.x += (-pointer.y * 0.2 - group.current.rotation.x) * 0.04;
    void state;
  });

  return (
    <Float speed={reduced ? 0 : 1.4} rotationIntensity={reduced ? 0 : 0.4} floatIntensity={reduced ? 0 : 0.7}>
      <group ref={group} position={[1.7, 0.15, 0]}>
        {/* Wireframe shell */}
        <Icosahedron args={[1.45, 6]}>
          <MeshDistortMaterial
            color="#38bdf8"
            wireframe
            transparent
            opacity={0.55}
            distort={reduced ? 0 : 0.34}
            speed={reduced ? 0 : 1.6}
            roughness={0.4}
          />
        </Icosahedron>
        {/* Glowing inner core */}
        <Icosahedron args={[0.95, 4]}>
          <MeshDistortMaterial
            color="#7c7bf7"
            transparent
            opacity={0.14}
            distort={reduced ? 0 : 0.5}
            speed={reduced ? 0 : 2.2}
            roughness={0.1}
          />
        </Icosahedron>
      </group>
    </Float>
  );
}

export default function HeroBackground() {
  const [reduced, setReduced] = useState(false);
  useGlobalPointer();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={['#070b14', 6, 12]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 3, 5]} intensity={1.3} color="#38bdf8" />
        <pointLight position={[-4, -2, 2]} intensity={0.9} color="#7c7bf7" />
        <StarField reduced={reduced} />
        <LatentForm reduced={reduced} />
      </Canvas>
    </div>
  );
}
