import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { CanvasLoader } from "../Loader";

const Earth = () => {
  return <div>Earth</div>;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      // camera={{ position: [0, 0, 10], fov: 60 }}
      // style={{ height: "100vh", width: "100%" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        {/* <Preload all /> */}
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
