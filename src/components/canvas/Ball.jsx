// import {
//   OrbitControls,
//   Decal,
//   Float,
//   Preload,
//   useTexture,
// } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
import React from "react";
// import CanvasLoader from "../Loader";

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);
//   return <Float speed={1.75} rotationIntensity={1}>
//     <ambientLight intensity={0.25}/>
//     <directionalLight position={[0,0,0.05]} />
//     <mesh castShadow receiveShadow scale={2.75}>
//       <icosahedronBufferGeometry args={[1,1]} />
//     </mesh>
//   </Float>;
// };

// const BallCancvas = ({icon}) => {
//   return (
//     <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[-2, 5, 2]} intensity={1} />
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

const Ball = (props) => {
  return (
    <div className="flex justify-center items-center shadow ">
      <img
        src={require(`../../assets/tech/${props.icon}`)}
        alt={props.icon}
        className="w-[75px] h-[75px] cursor-pointer transition-all hover:w-[100px] hover:h-[90px] "
      />
    </div>
  );
};

export default Ball;
