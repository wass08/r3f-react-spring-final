import { ContactShadows, OrbitControls } from "@react-three/drei";

import { Carousel } from "./Carousel";

import { useFrame } from "@react-three/fiber";
import { Depth, LayerMaterial, Noise } from "lamina";
import { useRef } from "react";
import * as THREE from "three";

const BG_SPEED = 0.3;

const Background = () => {
  const ref = useRef();

  useFrame((_state, delta) => {
    ref.current.rotation.x =
      ref.current.rotation.y =
      ref.current.rotation.z +=
        delta * BG_SPEED;
  });

  return (
    <mesh scale={100} ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorA="#f21a62"
          colorB="#0081fc"
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
        <Noise
          mapping="local"
          type="white"
          scale={100}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.42}
        />
      </LayerMaterial>
    </mesh>
  );
};

export const Experience = () => {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 20, 20]} intensity={1} />

      <Carousel />
      <ContactShadows scale={30} opacity={0.32} />

      <Background />
    </>
  );
};
