import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import "./style.css";
import gsap from 'gsap';

const Model = () => {
  const gltf = useGLTF("../scene.gltf", true);
  return (
    <>
      <primitive object={gltf.scene} dispose={null} />
    </>
  );
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <spotLight intensity={1} position={[1000, 0, 0]} />
    </>
  );
};

const HTMLContent = () => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y -= 0.01));
  return (
    <group>
      <mesh ref={ref} position={[0, -0.1, 0]}>
        <Model />
      </mesh>
      <Html fullscreen>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="neon"> FILM IS NOT DEAD </h1>
        </div>
      </Html>
    </group>
  );
};

const SectionCamera = () => {
  let app = useRef(null)

  useEffect(() => {
    gsap.to(".background", {duration: 0, css: {visibility: 'visible'} });
  })
  return (
    <div
      className="background"
      ref={el => app = el}
      style={{
        visibility: 'hidden',
        background: `url("../images/Lugano.jpg") center no-repeat`,
        backgroundSize: "99%",
      }}
    >
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 3], fov: 10 }}
        style={{ height: "100vh" }}
      >
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SectionCamera;
