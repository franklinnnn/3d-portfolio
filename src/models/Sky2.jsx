import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import skyScene from "../assets/3d/sky2.glb";
import { useFrame } from "@react-three/fiber";

const Sky2 = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.1 * delta;
    } else skyRef.current.rotation.y += 0.00015;
  });

  return (
    <mesh ref={skyRef} scale={0.02}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky2;
