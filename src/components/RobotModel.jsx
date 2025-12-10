import React, { useLayoutEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useThree } from '@react-three/fiber';

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

export default function RobotModel() {
    const group = useRef();
    const bodyRef = useRef();
    const partsRefs = useRef([]);
    const { scene } = useThree();

    // Load Body
    const { scene: bodyScene } = useGLTF('/models/body.glb');

    // Load Parts
    // We use useGLTF inside the component for simplicity, 
    // though preloading in parent is better for perf, this is fine for now.
    const parts = partsList.map((part) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { scene } = useGLTF(part.file);
        return { ...part, scene: scene.clone() }; // Clone to avoid mutation issues if reused
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

            // --- PHASE 1: FALL DOWN (0.5 to 2.0) ---
            // Everything falls to y: -8, with random x spread

            // 1a. Body Falls
            tl.fromTo(bodyRef.current.position,
                { x: 0, y: 0, z: 0 },
                { x: 0, y: -10, z: 0, duration: 1.5, ease: "power2.in" },
                0.5
            );
            tl.fromTo(bodyRef.current.rotation,
                { x: 0, y: 0, z: 0 },
                { x: Math.PI / 4, y: 0, z: 0.2, duration: 1.5, ease: "power2.in" },
                0.5
            );

            // 1b. Parts Fall
            partsRefs.current.forEach((part, index) => {
                if (!part) return;

                // Random scatter floor positions
                const randomX = (Math.random() - 0.5) * 8; // Spread on floor
                const randomZ = (Math.random() - 0.5) * 5;
                const randomRot = Math.random() * Math.PI;

                tl.fromTo(part.position,
                    { x: 0, y: 0, z: 0 },
                    {
                        x: randomX,
                        y: -10, // Floor
                        z: randomZ,
                        duration: 1.5,
                        ease: "power2.in"
                    },
                    0.5
                );

                tl.fromTo(part.rotation,
                    { x: 0, y: 0, z: 0 },
                    { x: randomRot, y: randomRot, z: randomRot, duration: 1.5, ease: "power1.in" },
                    0.5
                );
            });


            // --- PHASE 2: REASSEMBLY (2.5 onwards) ---

            // 2a. Body Rises First (2.5 -> 4.0)
            tl.to(bodyRef.current.position, { x: 0, y: 0, z: 0, duration: 1.5, ease: "back.out(1.2)" }, 2.5);
            tl.to(bodyRef.current.rotation, { x: 0, y: 0, z: 0, duration: 1.5, ease: "power2.out" }, 2.5);

            // 2b. Limbs Rise (4.0 -> 8.0)
            // Filter out Head (index 0 in partsList is Head)
            // Or strictly check name if possible, but we know index 0 is Head from partsList definition

            partsRefs.current.forEach((part, index) => {
                if (!part) return;

                // Check if this is the Head (index 0 based on partsList)
                // partsList[0] is Head.
                const isHead = index === 0;

                if (isHead) return; // Skip head for now

                const staggerTime = 4.0 + (index * 0.3); // Start after body

                tl.to(part.position, { x: 0, y: 0, z: 0, duration: 1.5, ease: "back.out(1.7)" }, staggerTime);
                tl.to(part.rotation, { x: 0, y: 0, z: 0, duration: 1.5, ease: "power2.out" }, staggerTime);
            });

            // 2c. Head Rises Last (8.0 -> 9.5)
            const headRef = partsRefs.current[0];
            if (headRef) {
                tl.to(headRef.position, { x: 0, y: 0, z: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }, 8.0);
                tl.to(headRef.rotation, { x: 0, y: 0, z: 0, duration: 1.5, ease: "power2.out" }, 8.0);
            }

        }, scene);

        return () => ctx.revert();
    }, [scene]);

    return (
        <group ref={group} dispose={null} position={[4, -2.5, 0]} rotation={[0, -0.5, 0]} scale={0.5}>
            {/* Body - Always visible */}
            <primitive
                ref={bodyRef}
                object={bodyScene}
            />

            {/* Parts - Animated */}
            {parts.map((part, i) => (
                <primitive
                    key={part.name}
                    ref={(el) => (partsRefs.current[i] = el)}
                    object={part.scene}
                />
            ))}
        </group>
    );
}

// Preload to avoid pop-in
useGLTF.preload('/models/body.glb');
partsList.forEach(p => useGLTF.preload(p.file));
