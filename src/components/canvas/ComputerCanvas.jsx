import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";
import { Model } from "../canvas/Pc";
import "../../App.css";

const ComputerCanvas = () => {

  const [isMobile,setIsMobile]=useState(false)
  useEffect(()=>{
    const mediaQuery=window.matchMedia('max-width:500px')
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange)
    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])
  return (
    <div className="w-full h-[450px] absolute top-[35%] max-md:top-[40%] max-md:h-[300px] max-sm:h-[200px]">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Model isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputerCanvas;
