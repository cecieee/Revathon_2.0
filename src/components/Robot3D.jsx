import React, { Suspense, Component } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import RobotModel from "./RobotModel";

// Error Boundary to catch WebGL errors gracefully
class WebGLErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('WebGL Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Return null to hide the 3D component on error, letting the rest of the page render
            return null;
        }
        return this.props.children;
    }
}

const Robot3D = () => {
    const handleCreated = ({ gl }) => {
        // Handle WebGL context loss and restoration
        const canvas = gl.domElement;

        canvas.addEventListener('webglcontextlost', (event) => {
            event.preventDefault();
            console.warn('WebGL context lost. Attempting to restore...');
        }, false);

        canvas.addEventListener('webglcontextrestored', () => {
            console.log('WebGL context restored.');
        }, false);
    };

    return (
        <WebGLErrorBoundary>
            <div className="fixed inset-0 pointer-events-none z-10">
                <Canvas
                    onContextMenu={(e) => e.preventDefault()}
                    camera={{ position: [0, 0, 8], fov: 45 }}
                    gl={{
                        alpha: true,
                        antialias: true,
                        powerPreference: "high-performance",
                        failIfMajorPerformanceCaveat: false
                    }}
                    onCreated={handleCreated}
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
                </Canvas>
            </div>
        </WebGLErrorBoundary>
    );
};

export default Robot3D;
