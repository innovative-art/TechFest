import { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(500, 500);
    renderer.setClearColor(0x000000, 0);
    
    // Clear any existing canvas
    if (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    
    containerRef.current.appendChild(renderer.domElement);
    
    // Create glowing sphere
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Create a wireframe globe effect
    const wireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0x00f0ff })
    );
    scene.add(wireframe);
    
    // Add particles inside the sphere
    const particles = new THREE.Group();
    scene.add(particles);
    
    // Create particles
    for (let i = 0; i < 100; i++) {
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 16, 16),
        new THREE.MeshBasicMaterial({ 
          color: new THREE.Color(
            Math.random() < 0.33 ? 0x00f0ff : Math.random() < 0.5 ? 0x9d4edd : 0xff2a6d
          ),
          transparent: true,
          opacity: 0.7
        })
      );
      
      // Random position inside the sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = Math.random() * 1.8;
      
      particle.position.x = radius * Math.sin(phi) * Math.cos(theta);
      particle.position.y = radius * Math.sin(phi) * Math.sin(theta);
      particle.position.z = radius * Math.cos(phi);
      
      particles.add(particle);
    }
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      wireframe.rotation.y += 0.003;
      wireframe.rotation.x += 0.001;
      
      particles.children.forEach((particle: THREE.Object3D, i: number) => {
        const time = Date.now() * 0.001;
        const offset = i * 0.01;
        
        particle.position.y += Math.sin(time + offset) * 0.002;
        particle.position.x += Math.cos(time + offset) * 0.002;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Initial resize
    handleResize();
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      scene.clear();
      renderer.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className={`relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] ${className || ''}`}
    >
      {/* Three.js will be rendered inside this div */}
      {/* Floating elements */}
      <div className="absolute -top-4 -left-4 bg-[#ff2a6d33] w-16 h-16 rounded-full blur-sm animate-float"></div>
      <div className="absolute top-1/2 -right-8 bg-[#00f0ff33] w-20 h-20 rounded-full blur-sm animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute -bottom-6 left-1/3 bg-[#9d4edd33] w-24 h-24 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default ThreeScene;
