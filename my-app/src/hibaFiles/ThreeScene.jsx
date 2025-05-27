import { GradientTexture } from '@react-three/drei';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

// Enhanced floating planet component with hover effects
function FloatingPlanet({ position, color, size = 1.5, onClick, path }) {
  const meshRef = useRef();
  const navigate = useNavigate();
  const [hovered, setHovered] = React.useState(false);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.3;
      meshRef.current.rotation.y += 0.005;
    }
  });

  const handleClick = () => {
    if (path) {
      navigate(path);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={hovered ? 0.8 : 0.5}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}

// Simple gradient background
function GradientBackground() {
  return (
    <mesh position={[0, 0, -10]}>
      <planeGeometry args={[50, 50]} />
      <meshBasicMaterial>
  <GradientTexture
    attach="map"
    stops={[0, 1]}
    colors={['#050b2e', '#0d1442']}
  />
</meshBasicMaterial>

    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 10], fov: 60 }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color('#050b2e'));
      }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -3, 0]} color={new THREE.Color(0x0055ff)} intensity={0.8} />
      <pointLight position={[5, -3, 0]} color={new THREE.Color(0xff5500)} intensity={0.8} />
      
      {/* Simple gradient background */}
      <GradientBackground />
      
      {/* Main planets */}
      <FloatingPlanet
        position={[-4, 0, 0]}
        color={new THREE.Color(0x00aaff)}
        size={2}
        path="/HiveExperience"
      />
      
      <FloatingPlanet
        position={[4, 0, 0]}
        color={new THREE.Color(0xff00aa)}
        size={2}
        path="/NoveExperience"
      />
      
      {/* Decorative planets */}
      <FloatingPlanet
        position={[-7, 2, -3]}
        color={new THREE.Color(0x88ddff)}
        size={0.8}
      />
      
      <FloatingPlanet
        position={[7, -2, -3]}
        color={new THREE.Color(0xffaa88)}
        size={0.8}
      />
      
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
    </Canvas>
  );
}