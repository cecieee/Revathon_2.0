import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import gsap from 'gsap';

const PeepingHead = ({ fromBottom = false }) => {
    const headRef = useRef();
    const { scene } = useGLTF('/models/Head.glb');

    // Clone scene to avoid conflicts if used elsewhere
    const clonedScene = React.useMemo(() => scene.clone(), [scene]);

    useEffect(() => {
        if (!headRef.current) return;

        if (fromBottom) {
            // Mobile: Pop up from bottom
            gsap.set(headRef.current.position, { y: -12 });
            console.log("RobotFooter: Initialized pop-up animation (mobile)");
        } else {
            // Desktop: Hang from top
            gsap.set(headRef.current.position, { y: 9 });
            console.log("RobotFooter: Initialized hanging animation (desktop)");
        }

        // Random peeping animation logic
        const peep = () => {
            if (!headRef.current) return;

            const duration = 0.8 + Math.random() * 0.5;

            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.delayedCall(Math.random() * 2 + 0.5, peep);
                }
            });

            if (fromBottom) {
                // Mobile: Pop UP from bottom (right-side up)
                tl.fromTo(headRef.current.position,
                    { y: -12 }, // Start hidden below
                    {
                        y: -6.5, // End visible at bottom
                        duration: duration,
                        ease: "back.out(1.2)"
                    }
                )
                    // 2. Look Left
                    .to(headRef.current.rotation, {
                        y: -0.5,
                        x: 0.2,
                        duration: 0.5,
                        ease: "power2.out"
                    }, "+=0.1")
                    // 3. Look Right
                    .to(headRef.current.rotation, {
                        y: 0.5,
                        x: 0.2,
                        duration: 1.0,
                        ease: "power2.inOut"
                    }, "+=0.2")
                    // 4. Return to Center
                    .to(headRef.current.rotation, {
                        y: 0,
                        x: 0.2,
                        duration: 0.5,
                        ease: "power2.inOut"
                    })
                    // 5. Hide (Pop Down)
                    .to(headRef.current.position, {
                        y: -14, // Hide below
                        duration: 0.8,
                        ease: "back.in(1.2)",
                        delay: 0.2
                    });
            } else {
                // Desktop: Pop DOWN from top (upside down)
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
            }
        };

        // Start the first peep after a small delay
        const initialDelay = gsap.delayedCall(1, peep);

        return () => {
            initialDelay.kill();
            gsap.killTweensOf(headRef.current?.position);
            gsap.killTweensOf(headRef.current?.rotation);
        };
    }, [fromBottom]);

    // Initial rotation based on direction
    const initialRotation = fromBottom
        ? [0.2, 0, 0]  // Right-side up, looking slightly down
        : [Math.PI - 0.2, Math.PI, 0]; // Upside down + Facing Front

    const initialY = fromBottom ? -12 : 9;

    return (
        <primitive
            ref={headRef}
            object={clonedScene}
            scale={1.2}
            position={[0, initialY, 0]}
            rotation={initialRotation}
        />
    );
};

const RobotFooter = ({ fromBottom = false }) => {
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

                <PeepingHead fromBottom={fromBottom} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default RobotFooter;

// Preload the head model
useGLTF.preload('/models/Head.glb');
