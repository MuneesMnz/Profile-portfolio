import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Planet } from "./Planet";
// import CanvasLoader from "../Loader";

const Earth = () => {

  const earth= useGLTF("/planet.gltf")

  return<primitive object={earth.scene} />
  
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{}}
    >
      <Suspense >
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planet />
      </Suspense>
    </Canvas>
  );
};

export default Earth;
