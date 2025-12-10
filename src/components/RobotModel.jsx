import React, { useLayoutEffect, useRef } from 'react';
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

// Helper to center the rotation pivot
const PivotControls = ({ children, rotationRef, offset = [0, 0, 0] }) => {
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

    // We render the children once to measure them (in the group),
    // then we wrap them in the pivot logic using the calculated center.
    // Actually, simpler: Wrap the content in a group shifted by -center, 
    // and put that inside a group shifted by +center (which we rotate).

    // However, since we can't unmount/remount easily without flickering,
    // let's try a stable approach.
    // The "children" is the primitive. It's already loaded.

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
    const bodyGroupRef = useRef();
    const partsRefs = useRef([]);
    const headInnerRef = useRef();
    const { scene } = useThree();

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

    // Load Body
    const { scene: bodyScene } = useGLTF('/models/body.glb');

    // Load Parts
    const parts = partsList.map((part) => {
        const { scene } = useGLTF(part.file);
        return { ...part, scene: scene.clone() };
    });

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                },
            });

            // --- PHASE 1: FALL DOWN ---

            // Body Group Falls
            if (bodyGroupRef.current) {
                tl.fromTo(bodyGroupRef.current.position,
                    { x: 0, y: 0, z: 0 },
                    { x: 0, y: -10, z: 0, duration: 1.5, ease: "power2.in" },
                    0.5
                );
                tl.fromTo(bodyGroupRef.current.rotation,
                    { x: 0, y: 0, z: 0 },
                    { x: Math.PI / 4, y: 0, z: 0.2, duration: 1.5, ease: "power2.in" },
                    0.5
                );
            }

            // Parts Fall
            partsRefs.current.forEach((part, index) => {
                if (!part) return;

                const randomX = (Math.random() - 0.5) * 8;
                const randomZ = (Math.random() - 0.5) * 5;
                const randomRot = Math.random() * Math.PI;

                tl.fromTo(part.position,
                    { x: 0, y: 0, z: 0 },
                    { x: randomX, y: -10, z: randomZ, duration: 1.5, ease: "power2.in" },
                    0.5
                );

                tl.fromTo(part.rotation,
                    { x: 0, y: 0, z: 0 },
                    { x: randomRot, y: randomRot, z: randomRot, duration: 1.5, ease: "power1.in" },
                    0.5
                );
            });

            // --- PHASE 2: REASSEMBLY ---

            // Body Rises
            if (bodyGroupRef.current) {
                tl.to(bodyGroupRef.current.position, { x: 0, y: 0, z: 0, duration: 1.5, ease: "back.out(1.2)" }, 2.5);
                tl.to(bodyGroupRef.current.rotation, { x: 0, y: 0, z: 0, duration: 1.5, ease: "power2.out" }, 2.5);
            }

            // Parts Rise
            partsRefs.current.forEach((part, index) => {
                if (!part) return;
                const isHead = index === 0;
                if (isHead) return;

                const staggerTime = 4.0 + (index * 0.3);
                tl.to(part.position, { x: 0, y: 0, z: 0, duration: 1.5, ease: "back.out(1.7)" }, staggerTime);
                tl.to(part.rotation, { x: 0, y: 0, z: 0, duration: 1.5, ease: "power2.out" }, staggerTime);
            });

            // Head Rises Last
            const headGroup = partsRefs.current[0];
            if (headGroup) {
                tl.to(headGroup.position, { x: 0, y: 0, z: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }, 8.0);
                tl.to(headGroup.rotation, { x: 0, y: 0, z: 0, duration: 1.5, ease: "power2.out" }, 8.0);
            }

        }, scene);

        return () => ctx.revert();
    }, [scene]);

    return (
        <group ref={group} dispose={null} position={[4, -2.5, 0]} rotation={[0, -0.5, 0]} scale={0.5}>
            <group ref={bodyGroupRef}>
                <primitive
                    object={bodyScene}
                />
            </group>

            {parts.map((part, i) => {

                // HEAD
                if (part.name === 'Head') {
                    return (
                        <group key={part.name} ref={(el) => (partsRefs.current[i] = el)}>
                            <PivotControls rotationRef={headInnerRef} offset={[0, -1, 0]}>
                                <primitive object={part.scene} position={[-0.05, 0, 0]} />
                            </PivotControls>
                        </group>
                    );
                }

                // DEFAULT PART
                return (
                    <primitive
                        key={part.name}
                        ref={(el) => (partsRefs.current[i] = el)}
                        object={part.scene}
                    />
                );
            })}
        </group>
    );
}

// Preload to avoid pop-in
useGLTF.preload('/models/body.glb');
partsList.forEach(p => useGLTF.preload(p.file));
