import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text3D } from "@react-three/drei";
import { Mesh } from "three";

interface FloatingCardProps {
  position: [number, number, number];
  title: string;
  value: string;
  color: string;
}

export const FloatingCard = ({ position, title, value, color }: FloatingCardProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        {/* Card background */}
        <mesh ref={meshRef} castShadow>
          <boxGeometry args={[2.5, 1.5, 0.1]} />
          <meshStandardMaterial color={color} transparent opacity={0.9} />
        </mesh>
        
        {/* Title text */}
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.1}
          height={0.02}
          position={[-1, 0.3, 0.06]}
        >
          {title}
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
        
        {/* Value text */}
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={0.2}
          height={0.03}
          position={[-1, -0.1, 0.06]}
        >
          {value}
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
      </group>
    </Float>
  );
};