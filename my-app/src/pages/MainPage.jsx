// src/pages/MainPage.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import LogoSphere from '../components/LogoSphere';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-full">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 3, 3]} />
                <Environment preset="sunset" />
                <OrbitControls enableZoom={false} />
                <LogoSphere
                    textureUrl="/logo.png"
                    position={[-2, 0, 0]}
                    onClick={() => navigate('/page1')}
                />
                <LogoSphere
                    textureUrl="/logo.png"
                    position={[2, 0, 0]}
                    onClick={() => navigate('/page2')}
                />
            </Canvas>
        </div>
    );
};

export default MainPage;
