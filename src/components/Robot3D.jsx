import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import RobotModel from "./RobotModel";

const Robot3D = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1}
                    castShadow
                />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <Suspense fallback={null}>
                    <RobotModel />
                    <Environment preset="city" />
                </Suspense>

                {/* Optional: Add controls for debugging? No, user wants scroll interaction. */}
                {/* <OrbitControls enableZoom={false} /> */}
            </Canvas>
        </div>
    );
};

export default Robot3D;
