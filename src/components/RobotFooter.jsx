import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import gsap from 'gsap';

const PeepingHead = () => {
    const headRef = useRef();
    const { scene } = useGLTF('/models/Head.glb');

    // Clone scene to avoid conflicts if used elsewhere
    const clonedScene = React.useMemo(() => scene.clone(), [scene]);

    useEffect(() => {
        if (!headRef.current) return;

        // Initial state: hidden below the view
        // Initial state: hidden above the view
        // Initial state: hidden above the view
        gsap.set(headRef.current.position, { y: 9 });
        console.log("RobotFooter: Initialized hanging animation");

        // Random peeping animation logic
        const peep = () => {
            if (!headRef.current) return;

            const duration = 0.8 + Math.random() * 0.5; // Fast pop down

            const tl = gsap.timeline({
                onComplete: () => {
                    // Schedule next peep after random delay
                    gsap.delayedCall(Math.random() * 2 + 0.5, peep);
                }
            });

            // 1. Pop Down (Hanging) - Force start from Top
            tl.fromTo(headRef.current.position,
                { y: 9 }, // Start high above
                {
                    y: 6.8, // End (Visible at top)
                    duration: duration,
                    ease: "back.out(1.2)"
                }
            )
                // 2. Look Left (Rotate Y)
                .to(headRef.current.rotation, {
                    y: Math.PI - 0.5,
                    x: Math.PI - 0.2,
                    duration: 0.5,
                    ease: "power2.out"
                }, "+=0.1")
                // 3. Look Right (Rotate Y)
                .to(headRef.current.rotation, {
                    y: Math.PI + 0.5,
                    x: Math.PI - 0.2,
                    duration: 1.0,
                    ease: "power2.inOut"
                }, "+=0.2")
                // 4. Return to Center
                .to(headRef.current.rotation, {
                    y: Math.PI,
                    x: Math.PI - 0.2,
                    duration: 0.5,
                    ease: "power2.inOut"
                })
                // 5. Hide (Pop Up)
                .to(headRef.current.position, {
                    y: 10.2, // Hide above
                    duration: 0.8,
                    ease: "back.in(1.2)",
                    delay: 0.2
                });
        };

        // Start the first peep after a small delay
        const initialDelay = gsap.delayedCall(1, peep);

        return () => {
            initialDelay.kill();
            gsap.killTweensOf(headRef.current?.position);
            gsap.killTweensOf(headRef.current?.rotation);
        };
    }, []);

    return (
        <primitive
            ref={headRef}
            object={clonedScene}
            scale={1.2}
            position={[0, 9, 0]}
            rotation={[Math.PI - 0.2, Math.PI, 0]} // Upside down + Facing Front
        />
    );
};

const RobotFooter = () => {
    return (
        <div className="w-full h-40 md:h-40 relative overflow-hidden">
            {/* Mask the bottom to ensure it looks like it's coming from behind something if needed, 
            though the canvas bounds usually suffice. */}
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <PeepingHead />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default RobotFooter;

// Preload the head model
useGLTF.preload('/models/Head.glb');
