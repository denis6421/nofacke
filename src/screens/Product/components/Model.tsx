import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import testObj from "../../../assets/models/shoes/test.obj";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

function Model() {
  function Box(props: JSX.IntrinsicElements["mesh"]) {
    const mesh = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          attachObject={["../../../assets/models/shoes/test.obj", "lalal"]}
          color={hovered ? "hotpink" : "orange"}
        />
      </mesh>
    );
  }

  const materials = useLoader(
    MTLLoader,
    "../../../assets/models/shoes/test.mtl"
  );
  const object = useLoader(
    OBJLoader,
    "../../../assets/models/shoes/test.obj",
    (loader: any) => {
      materials.preload();
      loader.setMaterials(materials);
    }
  );

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <primitive object={object} />
    </Canvas>
  );
}

export default Model;
