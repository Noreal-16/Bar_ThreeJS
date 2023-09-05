import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Bar } from "../Components/Bar";
import { OrbitControls, Sky } from "@react-three/drei";

export const HomeThree = () => {
  return (
    <>
      <h1>Hola Primer modelos 3D</h1>
      <div style={{ width: "70%", height: "50vh" }}>
        <Canvas camera={{ zoom: 15, position: [60, 50, 20] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[35, 35, 0]} intensity={0.4} />
          <pointLight position={[-35, 35, 0]} intensity={0.4} />
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />
          <Suspense fallback={null}>
            <Bar />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
};
