import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const partsList = [
    { name: 'Head', file: '/models/Head.glb' },
    { name: 'L_Foot', file: '/models/l_foot.001.glb' },
    { name: 'L_Hand', file: '/models/l_hand.glb' },
    { name: 'L_Leg', file: '/models/l_leg.glb' },
    { name: 'L_Palm', file: '/models/l_palm.glb' },
    { name: 'L_Shoulder', file: '/models/l_shoulder.glb' },
    { name: 'L_Thigh', file: '/models/l_thigh.glb' },
    { name: 'R_Foot', file: '/models/r_foot.001.glb' },
    { name: 'R_Hand', file: '/models/r_hand.glb' },
    { name: 'R_Leg', file: '/models/r_leg.glb' },
    { name: 'R_Palm', file: '/models/r_palm.glb' },
    { name: 'R_Shoulder', file: '/models/r_shoulder.glb' },
    { name: 'R_Thigh', file: '/models/r_thigh.glb' },
];

const HEAD_OFFSET = [0, -1, 0];

const PivotControls = ({ children, rotationRef, offset = HEAD_OFFSET }) => {
    const group = useRef();
    const [position, setPosition] = React.useState([0, 0, 0]);

    useLayoutEffect(() => {
        if (group.current) {
            const box = new THREE.Box3().setFromObject(group.current);
            const center = new THREE.Vector3();
            box.getCenter(center);
            setPosition([
                center.x + offset[0],
                center.y + offset[1],
                center.z + offset[2]
            ]);
        }
    }, [offset]);

    return (
        <group position={position} ref={rotationRef}>
            <group position={[-position[0], -position[1], -position[2]]}>
                <group ref={group}>
                    {children}
                </group>
            </group>
        </group>
    );
};

export default function RobotModel() {
    // Load Cubes Model
    const { scene: cubesScene } = useGLTF('/models/robot_cubes.glb');

    // Refs for animation
    const cubesRef = useRef([]);
    const robotCubesRef = useRef([]); // Array of top-level objects
    const group = useRef();
    const bodyGroupRef = useRef();
    const partsRefs = useRef([]);
    const headInnerRef = useRef();
    const { scene } = useThree();


    useLayoutEffect(() => {
        if (cubesScene) {
            // Traverse and identify parts
            const foundCubes = [];
            const foundRobot = [];

            // Iterate only top-level children to avoid double-transforms on hierarchies
            cubesScene.children.forEach((child) => {
                if (child.name.toLowerCase().includes('cube')) {
                    foundCubes.push(child);
                } else {
                    // Treat all non-cube top-level nodes as part of the robot group
                    foundRobot.push(child);
                }
            });

            cubesRef.current = foundCubes;
            robotCubesRef.current = foundRobot;
        }
    }, [cubesScene]);

    // Load Body
    const { scene: bodyScene } = useGLTF('/models/body.glb');

    // Load Parts
    const parts = partsList.map((part) => {
        const { scene } = useGLTF(part.file);
        return { ...part, scene: scene.clone() };
    });

    useFrame((state, delta) => {
        // 1. Head Tracking
        if (headInnerRef.current) {
            const mouseX = state.pointer.x;
            const mouseY = state.pointer.y;
            const targetRotationY = mouseX * 0.8;
            const targetRotationX = -mouseY * 0.5;
            headInnerRef.current.rotation.y = THREE.MathUtils.lerp(headInnerRef.current.rotation.y, targetRotationY, 0.1);
            headInnerRef.current.rotation.x = THREE.MathUtils.lerp(headInnerRef.current.rotation.x, targetRotationX, 0.1);
        }
    });

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Initial Setups for Parts (Hide them in void)
            if (bodyGroupRef.current) {
                gsap.set(bodyGroupRef.current.position, { y: -20 });
                gsap.set(bodyGroupRef.current.rotation, { y: Math.PI * 2 });
            }
            partsRefs.current.forEach(part => {
                if (part) {
                    gsap.set(part.position, { y: -20, x: (Math.random() - 0.5) * 10, z: (Math.random() - 0.5) * 10 });
                    gsap.set(part.rotation, { x: Math.random() * Math.PI, z: Math.random() * Math.PI });
                }
            });


            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                },
            });

            // PHASE 1: CUBES & LEANING SCENE FALL

            // Cubes Fall
            if (cubesRef.current.length > 0) {
                cubesRef.current.forEach((cube) => {
                    tl.to(cube.position, { y: -20, duration: 2, ease: "power2.in" }, 0);
                });
            }

            // Robot (from Cubes model) Falls
            if (robotCubesRef.current && robotCubesRef.current.length > 0) {
                robotCubesRef.current.forEach((obj) => {
                    // Animate top-level objects ONLY
                    tl.to(obj.position, { y: -20, duration: 2, ease: "power2.in" }, 0.2);
                });
            }


            // --- PHASE 2: REASSEMBLY (Come from Void) ---
            // 15% - 100%

            // 1. Body Center Arrives (15% - 30%)
            if (bodyGroupRef.current) {
                tl.to(bodyGroupRef.current.position, { x: 0, y: 0, z: 0, duration: 2, ease: "back.out(1.2)" }, 3);
                tl.to(bodyGroupRef.current.rotation, { x: 0, y: 0, z: 0, duration: 2, ease: "power2.out" }, 3);
            }

            // 2. Limbs Arrive (30% - 85%)
            // Filter Head out
            const limbs = partsList.map((p, i) => ({ ...p, index: i })).filter(p => p.name !== 'Head');

            limbs.forEach((limb, i) => {
                const partRef = partsRefs.current[limb.index];
                if (!partRef) return;

                // Stagger them
                const startTime = 5 + (i * 0.5);

                tl.to(partRef.position, { x: 0, y: 0, z: 0, duration: 2, ease: "back.out(1.5)" }, startTime);
                tl.to(partRef.rotation, { x: 0, y: 0, z: 0, duration: 2, ease: "power2.out" }, startTime);
            });

            // 3. Head Arrives (85% - 95%)
            const headIndex = partsList.findIndex(p => p.name === 'Head');
            const headRef = partsRefs.current[headIndex];
            if (headRef) {
                tl.to(headRef.position, { x: 0, y: 0, z: 0, duration: 2, ease: "elastic.out(1, 0.5)" }, 12);
                tl.to(headRef.rotation, { x: 0, y: 0, z: 0, duration: 2, ease: "power2.out" }, 12);
            }

        });

        return () => ctx.revert();
    }, [scene, cubesScene]);

    // Safe Responsive Logic
    const isMobile = window.innerWidth < 768;
    const position = isMobile ? [0.75, -3.0, 0] : [4, -2.5, 0];
    const scale = isMobile ? 0.35 : 0.5;

    return (
        <group ref={group} dispose={null} position={position} rotation={[0, -0.2, 0]} scale={scale}>

            {/* MODEL 1: Cubes Leaning Robot (Always rendered, falls down) */}
            <primitive object={cubesScene} />

            {/* MODEL 2: Assembling Robot (Always rendered, starts in void) */}
            <group>
                <group ref={bodyGroupRef}>
                    <primitive object={bodyScene} />
                </group>
                {parts.map((part, i) => {
                    if (part.name === 'Head') {
                        return <group key={part.name} ref={el => partsRefs.current[i] = el}>
                            <PivotControls rotationRef={headInnerRef} offset={HEAD_OFFSET}>
                                <primitive object={part.scene} position={[-0.05, 0, 0]} />
                            </PivotControls>
                        </group>
                    }
                    return <primitive key={part.name} ref={el => partsRefs.current[i] = el} object={part.scene} />
                })}
            </group>
        </group>
    );
}

// Preload to avoid pop-in
useGLTF.preload('/models/body.glb');
partsList.forEach(p => useGLTF.preload(p.file));
