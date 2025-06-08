import * as THREE from 'three';
import React, { useRef, useState, useEffect, Suspense, useCallback, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

// Simple loading component
const Loader = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
    <div className="text-white text-xl animate-pulse">
      Loading 3D experience...
    </div>
  </div>
);

// Simple fallback component
const WebGLFallback = ({ onRetry }) => (
  <div className="h-[60vh] flex flex-col items-center justify-center text-white p-4">
    <h2 className="text-xl font-bold mb-4">3D Content Unavailable</h2>
    <p className="text-center mb-6">We couldn't load the 3D content. Your device or browser might not support WebGL or it might be disabled.</p>
    <button 
      onClick={onRetry}
      className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
    >
      Try Again
    </button>
  </div>
);

// Simple error boundary for WebGL content
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error in 3D component:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="h-[60vh] flex flex-col items-center justify-center text-white p-4">
          <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
          <p className="text-center mb-4">We couldn't load the 3D content.</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Memoize the sphere geometry to prevent recreation on each render
const sphereGeometry = new THREE.SphereGeometry(1.8, 32, 32);

// 3D Logo Ball component with colored spheres and text
const LogoBall = React.memo(({ position, label, color, onClick }) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  
  // Memoize the material to prevent recreation
  const materialRef = useRef(
    new THREE.MeshStandardMaterial({
      color: color,
      metalness: 0.2,
      roughness: 0.4
    })
  );

  // Update material color on hover or color change
  useEffect(() => {
    materialRef.current.color.set(hovered ? '#4f46e5' : color);
  }, [hovered, color]);

  // Animation frame loop
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  // Cleanup material on unmount
  useEffect(() => {
    return () => {
      materialRef.current.dispose();
    };
  }, []);

  const handlePointerOver = useCallback(() => {
    document.body.style.cursor = 'pointer';
    setHover(true);
  }, []);

  const handlePointerOut = useCallback(() => {
    document.body.style.cursor = 'default';
    setHover(false);
  }, []);

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        geometry={sphereGeometry}
        material={materialRef.current}
      />
      <Text
        position={[0, -2.5, 0]}
        color="white"
        anchorX="center"
        anchorY="middle"
        fontSize={0.3}
      >
        {label}
      </Text>
    </group>
  );
});

// Memoize the canvas props to prevent recreation
const canvasProps = {
  dpr: [1, 2],
  camera: { position: [0, 0, 12], fov: 60 },
  gl: {
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
    stencil: false,
    depth: true
  },
  shadows: true
};

// Horizontal connector between spheres
const HorizontalConnector = ({ position = [0, 0, 0], length = 6, radius = 0.5, color = '#94a3b8' }) => {
  return (
    <mesh position={position} rotation={[0, 0, Math.PI/2]}>
      <cylinderGeometry args={[radius, radius, length, 16]} />
      <meshStandardMaterial 
        color={color}
        metalness={0.2}
        roughness={0.4}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

// Vertical shaft component
const VerticalShaft = ({ position = [0, 0, 0], height = 5, radius = 0.1, color = '#ffffff' }) => {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[radius, radius, height, 16]} />
      <meshStandardMaterial 
        color={color}
        metalness={0.2}
        roughness={0.4}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

// Memoized light components
const Lights = memo(() => (
  <>
    <ambientLight intensity={0.7} />
    <pointLight position={[10, 10, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} intensity={0.5} />
  </>
));

// Main InteractiveLogos component
const InteractiveLogos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [webGLError, setWebGLError] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(false);

  // Handle component mount/unmount
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Check WebGL support
  useEffect(() => {
    if (!mounted) return;
    
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (gl && gl instanceof WebGLRenderingContext) {
          console.log('WebGL Renderer:', gl.getParameter(gl.RENDERER));
          console.log('WebGL supported, initializing...');
          setWebGLSupported(true);
          setIsLoading(false);
        } else {
          throw new Error('WebGL not supported');
        }
      } catch (e) {
        console.error('WebGL initialization error:', e);
        setWebGLError(e);
      }
    };

    // Add a small delay to ensure the component is fully mounted
    const timer = setTimeout(checkWebGL, 100);
    return () => clearTimeout(timer);
  }, [mounted]);

  const handleLogoClick = useCallback((logoName) => {
    console.log(`${logoName} logo clicked`);
    // Add your logo click handler here (e.g., navigate or show details)
  }, []);

  const handleError = useCallback((error) => {
    console.error('3D Error:', error);
    setWebGLError(error);
  }, []);

  const handleRetry = useCallback(() => {
    setWebGLError(null);
    setIsLoading(true);
    // Force re-check WebGL support
    setWebGLSupported(false);
    const timer = setTimeout(() => {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl && gl instanceof WebGLRenderingContext) {
        setWebGLSupported(true);
        setIsLoading(false);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (webGLError) {
    return <WebGLFallback onRetry={handleRetry} />;
  }

  if (!mounted) {
    return null;
  }

  return (
    <div style={{ width: '100%', height: '80vh', position: 'relative' }}>
      <ErrorBoundary onError={handleError}>
        {isLoading ? (
          <Loader />
        ) : (
          <Canvas
            {...canvasProps}
            onCreated={({ gl }) => {
              try {
                gl.xr.enabled = false;
                gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                console.log('WebGL context created successfully');
              } catch (e) {
                console.error('Error in WebGL setup:', e);
                handleError(e);
              }
            }}
          >
            <Lights />
            
            <Suspense fallback={null}>
              {/* Vertical Shaft in the middle - Aligned with sphere bases */}
              <VerticalShaft 
                position={[0, -1.8 + 4, 0]} // Positioned so base is at y=-1.8 (sphere bottom)
                height={8} 
                radius={0.3}
                color="#94a3b8" // Cool gray
              />
              
              {/* Hivexperience Logo - Left Side */}
              <LogoBall
                position={[-3, 0, 0]}
                label="Hivexperience"
                color="#3b82f6" // Blue
                onClick={() => handleLogoClick('Hivexperience')}
              />
              
              {/* Novexperience Logo - Right Side */}
              <LogoBall
                position={[3, 0, 0]}
                label="Novexperience"
                color="#10b981" // Green
                onClick={() => handleLogoClick('Novexperience')}
              />
              
              {/* Horizontal connector between spheres */}
              <HorizontalConnector 
                position={[0, 0, 0]}
                length={6.5} // Slightly longer than the distance between sphere centers
                radius={0.4} // Thicker radius
              />
            </Suspense>
            
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              autoRotate={false}
              minDistance={5}
              maxDistance={20}
            />
          </Canvas>
        )}
      </ErrorBoundary>
    </div>
  );
};

export default InteractiveLogos;
