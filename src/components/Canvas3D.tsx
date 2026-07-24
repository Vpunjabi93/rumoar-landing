import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const AbstractShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.8}>
        {/* A sophisticated torus knot to represent "accessories" and "completion" */}
        <torusKnotGeometry args={[1, 0.3, 256, 64]} />
        <MeshDistortMaterial 
          color="#0a0a0a" 
          envMapIntensity={2.5} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={1} 
          roughness={0.1} 
          distort={0.2} 
          speed={1}
        />
      </mesh>
    </Float>
  );
};

const Canvas3D: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={3} color="#D4AF37" />
        <pointLight position={[0, 10, -10]} intensity={2} color="#ffffff" />
        
        <AbstractShape />
        
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};

export default Canvas3D;
