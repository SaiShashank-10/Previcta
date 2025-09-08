import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera, Float } from "@react-three/drei";
import { Suspense } from "react";
import { FloatingCard } from "./FloatingCard";

export const AnimatedScene = () => {
  return (
    <div className="h-64 w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9333ea" />
          
          {/* Floating elements */}
          <Float speed={3} rotationIntensity={0.3} floatIntensity={0.8}>
            <mesh position={[-3, 2, 0]} castShadow>
              <dodecahedronGeometry args={[0.5]} />
              <meshStandardMaterial color="#9333ea" transparent opacity={0.8} />
            </mesh>
          </Float>
          
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.6}>
            <mesh position={[3, -1, 0]} castShadow>
              <octahedronGeometry args={[0.4]} />
              <meshStandardMaterial color="#f97316" transparent opacity={0.8} />
            </mesh>
          </Float>
          
          <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4}>
            <mesh position={[0, 1, -2]} castShadow>
              <torusGeometry args={[0.6, 0.2, 8, 16]} />
              <meshStandardMaterial color="#06b6d4" transparent opacity={0.7} />
            </mesh>
          </Float>
          
          {/* Animated particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <Float key={i} speed={Math.random() * 2 + 1} rotationIntensity={0.1} floatIntensity={0.3}>
              <mesh position={[
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 4
              ]}>
                <sphereGeometry args={[0.05]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.6} />
              </mesh>
            </Float>
          ))}
          
          <Environment preset="sunset" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};