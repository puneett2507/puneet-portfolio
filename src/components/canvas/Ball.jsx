import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          roughness={0.3}
          metalness={0.005}
          flatShading={true} // Restores sharp edges
          polygonOffset
          polygonOffsetFactor={-1}
        />

        {/* Decal */}
        <Decal
          position={[0, 0, 1]}
          rotation={[Math.PI * 2, 0, 6.25]}
          scale={1}
          map={decal}
          depthTest={true}
          depthWrite={true}
          transparent={true}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
