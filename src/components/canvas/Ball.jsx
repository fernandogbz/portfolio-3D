import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  OrbitControls,
  Float,
  Preload,
  useTexture,
} from "@react-three/drei";

import { CanvasLoader } from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return <div>Ball</div>;
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
