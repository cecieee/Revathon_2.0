import React, { useRef, useEffect, useState, useLayoutEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
    const group = useRef();
    const cubeRobotHeadRef = useRef();
    const cubesRef = useRef([]);
    const robotCubesRef = useRef([]);
    const bodyGroupRef = useRef();
    const partsRefs = useRef([]);
    const headInnerRef = useRef();

    // Load cubes model
    const { scene: cubesScene } = useGLTF('/models/robot_cubes.glb');

    // Load body
    const { scene: bodyScene } = useGLTF('/models/body.glb');

    // Load all parts - each useGLTF call is at the top level (not in a callback)
    const headGLTF = useGLTF('/models/Head.glb');
    const lFootGLTF = useGLTF('/models/l_foot.001.glb');
    const lHandGLTF = useGLTF('/models/l_hand.glb');
    const lLegGLTF = useGLTF('/models/l_leg.glb');
    const lPalmGLTF = useGLTF('/models/l_palm.glb');
    const lShoulderGLTF = useGLTF('/models/l_shoulder.glb');
    const lThighGLTF = useGLTF('/models/l_thigh.glb');
    const rFootGLTF = useGLTF('/models/r_foot.001.glb');
    const rHandGLTF = useGLTF('/models/r_hand.glb');
    const rLegGLTF = useGLTF('/models/r_leg.glb');
    const rPalmGLTF = useGLTF('/models/r_palm.glb');
    const rShoulderGLTF = useGLTF('/models/r_shoulder.glb');
    const rThighGLTF = useGLTF('/models/r_thigh.glb');

    // Memoize parts to avoid recreating clones on every render
    const parts = useMemo(() => [
        { name: 'Head', scene: headGLTF.scene.clone() },
        { name: 'L_Foot', scene: lFootGLTF.scene.clone() },
        { name: 'L_Hand', scene: lHandGLTF.scene.clone() },
        { name: 'L_Leg', scene: lLegGLTF.scene.clone() },
        { name: 'L_Palm', scene: lPalmGLTF.scene.clone() },
        { name: 'L_Shoulder', scene: lShoulderGLTF.scene.clone() },
        { name: 'L_Thigh', scene: lThighGLTF.scene.clone() },
        { name: 'R_Foot', scene: rFootGLTF.scene.clone() },
        { name: 'R_Hand', scene: rHandGLTF.scene.clone() },
        { name: 'R_Leg', scene: rLegGLTF.scene.clone() },
        { name: 'R_Palm', scene: rPalmGLTF.scene.clone() },
        { name: 'R_Shoulder', scene: rShoulderGLTF.scene.clone() },
        { name: 'R_Thigh', scene: rThighGLTF.scene.clone() },
    ], [headGLTF, lFootGLTF, lHandGLTF, lLegGLTF, lPalmGLTF, lShoulderGLTF, lThighGLTF, rFootGLTF, rHandGLTF, rLegGLTF, rPalmGLTF, rShoulderGLTF, rThighGLTF]);

    // Identify cubes and robot parts
    useLayoutEffect(() => {
        if (cubesScene) {
            const foundCubes = [];
            const foundRobot = [];

            cubesScene.children.forEach((child) => {
                if (child.name.toLowerCase().includes('cube')) {
                    foundCubes.push(child);
                } else {
                    foundRobot.push(child);
                    if (child.name.toLowerCase().includes('head')) {
                        cubeRobotHeadRef.current = child;
                    }
                }
            });

            cubesRef.current = foundCubes;
            robotCubesRef.current = foundRobot;
        }
    }, [cubesScene]);

    // Head rotation animation
    useEffect(() => {
        if (cubeRobotHeadRef.current) {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

            tl.to(cubeRobotHeadRef.current.rotation, {
                y: "-=0.5",
                duration: 1,
                ease: "power2.inOut"
            })
                .to(cubeRobotHeadRef.current.rotation, {
                    y: "+=0.5",
                    duration: 1,
                    ease: "power2.inOut"
                }, "+=0.5");

            return () => tl.kill();
        }
    }, [cubesScene]);

    // Head tracking - follows mouse cursor
    useFrame((state) => {
        if (headInnerRef.current) {
            const mouseX = state.pointer.x;
            const mouseY = state.pointer.y;
            const targetRotationY = mouseX * 0.8;
            const targetRotationX = -mouseY * 0.5;
            headInnerRef.current.rotation.y = THREE.MathUtils.lerp(headInnerRef.current.rotation.y, targetRotationY, 0.1);
            headInnerRef.current.rotation.x = THREE.MathUtils.lerp(headInnerRef.current.rotation.x, targetRotationX, 0.1);
        }
    });

    // ScrollTrigger animations - with proper cleanup
    useLayoutEffect(() => {
        // Store the ScrollTrigger instance to clean up properly
        let scrollTriggerInstance = null;
        let timeline = null;

        // Initial positions for reassembling parts
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

        // Create ScrollTrigger timeline
        timeline = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                onInit: (self) => {
                    scrollTriggerInstance = self;
                }
            },
        });

        // PHASE 1: Cubes fall
        if (cubesRef.current.length > 0) {
            cubesRef.current.forEach((cube) => {
                timeline.to(cube.position, { y: -20, duration: 2, ease: "power2.in" }, 0);
            });
        }

        // Robot from cubes falls
        if (robotCubesRef.current && robotCubesRef.current.length > 0) {
            robotCubesRef.current.forEach((obj) => {
                timeline.to(obj.position, { y: -20, duration: 2, ease: "power2.in" }, 0.2);
            });
        }

        // PHASE 2: Reassembly
        if (bodyGroupRef.current) {
            timeline.to(bodyGroupRef.current.position, { x: 0, y: 0, z: 0, duration: 2, ease: "back.out(1.2)" }, 3);
            timeline.to(bodyGroupRef.current.rotation, { x: 0, y: 0, z: 0, duration: 2, ease: "power2.out" }, 3);
        }

        // Limbs arrive
        const limbs = partsList.map((p, i) => ({ ...p, index: i })).filter(p => p.name !== 'Head');
        limbs.forEach((limb, i) => {
            const partRef = partsRefs.current[limb.index];
            if (!partRef) return;

            const startTime = 5 + (i * 0.5);
            timeline.to(partRef.position, { x: 0, y: 0, z: 0, duration: 2, ease: "back.out(1.5)" }, startTime);
            timeline.to(partRef.rotation, { x: 0, y: 0, z: 0, duration: 2, ease: "power2.out" }, startTime);
        });

        // Head arrives
        const headIndex = partsList.findIndex(p => p.name === 'Head');
        const headRef = partsRefs.current[headIndex];
        if (headRef) {
            timeline.to(headRef.position, { x: 0, y: 0, z: 0, duration: 2, ease: "elastic.out(1, 0.5)" }, 12);
            timeline.to(headRef.rotation, { x: 0, y: 0, z: 0, duration: 2, ease: "power2.out" }, 12);
        }

        // CRITICAL: Proper cleanup on unmount
        return () => {
            if (timeline) {
                timeline.kill();
            }
            if (scrollTriggerInstance) {
                scrollTriggerInstance.kill();
            }
            // Kill all ScrollTriggers created by this component
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, [cubesScene]);

    // Responsive positioning
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const position = isMobile ? [0.75, -3.0, 0] : [4, -2.5, 0];
    const scale = isMobile ? 0.35 : 0.5;

    return (
        <group ref={group} dispose={null} position={position} rotation={[0, -0.2, 0]} scale={scale}>
            <primitive object={cubesScene} />

            <group ref={bodyGroupRef}>
                <primitive object={bodyScene} />
            </group>

            {parts.map((part, i) => {
                if (part.name === 'Head') {
                    return (
                        <group key={part.name} ref={el => partsRefs.current[i] = el}>
                            <PivotControls rotationRef={headInnerRef} offset={HEAD_OFFSET}>
                                <primitive object={part.scene} position={[-0.05, 0.0, 0.2]} />
                            </PivotControls>
                        </group>
                    );
                }
                return (
                    <primitive
                        key={part.name}
                        ref={el => partsRefs.current[i] = el}
                        object={part.scene}
                    />
                );
            })}
        </group>
    );
}

// Preload all models
useGLTF.preload('/models/robot_cubes.glb');
useGLTF.preload('/models/body.glb');
partsList.forEach(p => useGLTF.preload(p.file));
