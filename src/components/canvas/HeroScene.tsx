import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function FloatingFilm() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, Math.cos(t / 10) / 4, 0.1);
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, Math.sin(t / 10) / 4, 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh}>
        <boxGeometry args={[4, 2.2, 0.05]} />
        <MeshDistortMaterial
          color="#00E0FF"
          speed={2}
          distort={0.2}
          radius={1}
          emissive="#00E0FF"
          emissiveIntensity={0.5}
          roughness={0}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

function FloatingReel() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.z += 0.005;
    mesh.current.position.y = Math.sin(t / 3) * 0.3;
  });

  return (
    <mesh ref={mesh} position={[-3, 1, -2]}>
      <torusGeometry args={[0.8, 0.15, 16, 32]} />
      <MeshDistortMaterial
        color="#7000FF"
        speed={1.5}
        distort={0.1}
        emissive="#7000FF"
        emissiveIntensity={0.3}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.15} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00E0FF" />
        <pointLight position={[-10, -5, 5]} intensity={0.5} color="#7000FF" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <FloatingFilm />
        <FloatingReel />
      </Canvas>
    </div>
  );
}
