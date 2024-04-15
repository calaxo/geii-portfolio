/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 server.glb --transform 
Files: server.glb [685.86KB] > C:\Users\axelc\Desktop\portfolio\geii\front\geii-portfolio\src\server-transformed.glb [59.42KB] (91%)
*/

// https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/server-transformed.glb

// /src/server-transformed.glb

import { useGLTF } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";

import React, { useRef, useState, useLayoutEffect } from "react";

export function Server(props) {
  const { nodes, materials } = useGLTF(
    "https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/server-transformed.glb",
  );

  const mesh = useRef();

  useFrame((state, dt) => {
    mesh.current.lookAt(state.pointer.x, state.pointer.y, 2);
  });

  return (
    <group ref={mesh} {...props} dispose={null}>
      <group position={[-2.333, 0.693, 3.718]} rotation={[Math.PI, 8, Math.PI]}>
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials.PaletteMaterial002}
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials.PaletteMaterial003}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={materials.PaletteMaterial005}
        />
        <mesh
          geometry={nodes.Cube002_3.geometry}
          material={materials.PaletteMaterial006}
        />
        <mesh
          geometry={nodes.Cube002_4.geometry}
          material={materials.PaletteMaterial007}
        />
        <mesh
          geometry={nodes.Cube002_5.geometry}
          material={materials.PaletteMaterial009}
        />
        <mesh
          geometry={nodes.Cube002_6.geometry}
          material={materials.PaletteMaterial010}
        />
        <mesh
          geometry={nodes.Cube002_7.geometry}
          material={materials.PaletteMaterial012}
        />
        <mesh
          geometry={nodes.Cube002_8.geometry}
          material={materials.PaletteMaterial013}
        />
        <mesh
          geometry={nodes.Cube002_9.geometry}
          material={materials.PaletteMaterial014}
        />
        <mesh
          geometry={nodes.Cube002_10.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.Cube002_11.geometry}
          material={materials.PaletteMaterial004}
        />
        <mesh
          geometry={nodes.Cube002_12.geometry}
          material={materials.PaletteMaterial008}
        />
        <mesh
          geometry={nodes.Cube002_13.geometry}
          material={materials.PaletteMaterial011}
        />
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/server-transformed.glb",
);
