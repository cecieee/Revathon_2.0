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
            // Setup Timeline
            // Timings (arbitrary units, mapped to scroll distance):
            // 0.0 - 0.5: Stay Assembled (Hero "Safe Zone")
            // 0.5 - 2.0: Explode Out (Leaving Hero)
            // 2.0 - 10.0: Reassemble sequentially (Scrolling down)

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: 'body', // Whole page
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1, // Smooth scrubbing
                },
            });

            partsRefs.current.forEach((part, index) => {
                if (!part) return;

                // Random explode position
                const randomX = (Math.random() - 0.5) * 15;
                const randomY = (Math.random() - 0.5) * 15;
                const randomZ = (Math.random() - 0.5) * 10;

                // 1. Explode OUT (Delayed start at 0.5)
                // Use fromTo to FORCE start at 0,0,0 (Assembled)
                tl.fromTo(part.position,
                    { x: 0, y: 0, z: 0 },
                    {
                        x: randomX,
                        y: randomY,
                        z: randomZ,
                        duration: 1.5,
                        ease: "power2.inOut"
                    },
                    0.5
                );

                // Optional: slight random rotation on explode
                tl.fromTo(part.rotation,
                    { x: 0, y: 0, z: 0 },
                    {
                        x: (Math.random() - 0.5) * 1,
                        y: (Math.random() - 0.5) * 1,
                        z: (Math.random() - 0.5) * 1,
                        duration: 1.5,
                        ease: "power2.inOut"
                    },
                    0.5
                );

                // Hide briefly
                tl.to(part, {
                    visible: false,
                    duration: 0.1
                }, 2.0);

                // 2. Assemble IN (Staggered)
                const assemblyStart = 2.5 + (index * 0.5); // Spread over the rest of the scroll

                // Reset to visible
                tl.set(part, { visible: true }, assemblyStart);

                // Animate back to origin
                tl.to(part.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                    duration: 2,
                    ease: "elastic.out(1, 0.7)",
                }, assemblyStart);

                // Rotate in
                tl.to(part.rotation,
                    { x: 0, y: 0, z: 0, duration: 2, ease: "power2.out" },
                    assemblyStart
                );
            });

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
