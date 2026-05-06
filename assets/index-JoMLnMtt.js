import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom/client';

// Constants
const CARD_WIDTH = 240;
const CARD_HEIGHT = 320;
const CARD_DEPTH = 8;
const PETAL_COLORS = [
  '#FF9EBB', '#FFD700', '#FF6B6B', '#98D8C8', '#FFB347',
  '#C9A0DC', '#87CEEB', '#FFDAB9', '#B5EAD7'
];

// Enhanced flower configurations with pop-up mechanics
const FLOWERS = [
  {
    id: 'main-flower',
    x: 0,
    y: 0,
    z: 60,
    stemH: 95,
    stemRadius: 4,
    petalCount: 8,
    outerColor: '#D4145A',
    innerColor: '#FF85A1',
    centerColor: '#FFD700',
    petalW: 26,
    petalH: 48,
    petalThickness: 8,
    delay: 0.05,
    scale: 1.2,
    foldLayers: 3,
    leafCount: 4,
    bloomHeight: 20,
    unfoldDuration: 1.2
  },
  {
    id: 'side-flower-left',
    x: -65,
    y: 25,
    z: 38,
    stemH: 72,
    stemRadius: 3.5,
    petalCount: 7,
    outerColor: '#AA1465',
    innerColor: '#E8638F',
    centerColor: '#FFA500',
    petalW: 22,
    petalH: 40,
    petalThickness: 6,
    delay: 0.25,
    scale: 0.9,
    foldLayers: 2,
    leafCount: 3,
    bloomHeight: 18,
    unfoldDuration: 1.1
  },
  {
    id: 'side-flower-right',
    x: 65,
    y: 25,
    z: 42,
    stemH: 78,
    stemRadius: 3.5,
    petalCount: 7,
    outerColor: '#7B1FA2',
    innerColor: '#CE93D8',
    centerColor: '#FFE066',
    petalW: 22,
    petalH: 40,
    petalThickness: 6,
    delay: 0.2,
    scale: 0.95,
    foldLayers: 2,
    leafCount: 3,
    bloomHeight: 18,
    unfoldDuration: 1.1
  },
  {
    id: 'back-flower-left',
    x: -45,
    y: -15,
    z: 22,
    stemH: 60,
    stemRadius: 3,
    petalCount: 6,
    outerColor: '#C62828',
    innerColor: '#EF9A9A',
    centerColor: '#FFD700',
    petalW: 19,
    petalH: 35,
    petalThickness: 5,
    delay: 0.35,
    scale: 0.85,
    foldLayers: 2,
    leafCount: 2,
    bloomHeight: 15,
    unfoldDuration: 1.0
  },
  {
    id: 'back-flower-right',
    x: 45,
    y: -15,
    z: 28,
    stemH: 65,
    stemRadius: 3,
    petalCount: 6,
    outerColor: '#E65100',
    innerColor: '#FFCC80',
    centerColor: '#5D4037',
    petalW: 19,
    petalH: 35,
    petalThickness: 5,
    delay: 0.3,
    scale: 0.88,
    foldLayers: 2,
    leafCount: 2,
    bloomHeight: 15,
    unfoldDuration: 1.0
  }
];

// Generate random confetti
function generateConfetti(count) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: -5 - Math.random() * 30,
    rotation: Math.random() * 360,
    color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    w: 6 + Math.random() * 8,
    h: 4 + Math.random() * 6,
    animDuration: 2.5 + Math.random() * 2.5,
    animDelay: Math.random() * 2.5,
    drift: (Math.random() - 0.5) * 80,
    isCircle: Math.random() > 0.6
  }));
}

// Enhanced 3D Petal Component
function Petal3D({ index, flower, petalAngle, isUnfolding, unfoldProgress }) {
  const petalRotation = (index / flower.petalCount) * 360;
  
  // Folding animation - petals fold out as card opens
  const foldProgress = unfoldProgress;
  const petalFold = isUnfolding ? foldProgress * 85 : 0; // Fold angle in degrees
  const petalLift = isUnfolding ? foldProgress * 15 : 0; // Vertical lift
  
  // 3D depth for petal
  const petalDepth = flower.petalThickness;
  
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: `${flower.petalW}px`,
        height: `${flower.petalH}px`,
        marginLeft: `-${flower.petalW / 2}px`,
        marginTop: `-${flower.petalH}px`,
        transformOrigin: '50% 100%',
        transform: `rotateZ(${petalRotation}deg) translateY(${-petalLift}px) rotateX(${-petalFold}deg)`,
        transformStyle: 'preserve-3d',
        perspective: '1200px'
      }}
    >
      {/* Front face of petal */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '52% 52% 36% 36%',
          background: `linear-gradient(to bottom, ${flower.innerColor} 0%, ${flower.outerColor} 65%, #FFB3C6 100%)`,
          boxShadow: `
            0 8px 16px rgba(0,0,0,0.25),
            inset 0 -8px 12px rgba(0,0,0,0.15),
            inset 1px 2px 6px rgba(255,255,255,0.4),
            0 0 20px rgba(255,150,170,0.2)
          `,
          filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.2))',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden'
        }}
      />
      
      {/* Side/depth face of petal */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: `${petalDepth}px`,
          bottom: 0,
          left: 0,
          background: `linear-gradient(to right, ${flower.outerColor}dd 0%, ${flower.innerColor}aa 100%)`,
          borderRadius: '0 0 8px 8px',
          transformStyle: 'preserve-3d',
          transform: `rotateX(90deg)`,
          transformOrigin: 'bottom center',
          boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.3)'
        }}
      />

      {/* Back face (slightly darker) */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '52% 52% 36% 36%',
          background: `linear-gradient(to bottom, ${flower.outerColor}cc 0%, #B8536A 100%)`,
          transform: `translateZ(-${petalDepth}px)`,
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden'
        }}
      />
    </div>
  );
}

// Enhanced 3D Stem Component
function Stem3D({ flower, isUnfolding, unfoldProgress }) {
  const stemRise = isUnfolding ? unfoldProgress * flower.bloomHeight : 0;
  
  return (
    <div
      style={{
        position: 'absolute',
        left: `${flower.x}px`,
        bottom: 0,
        width: `${flower.stemRadius * 2}px`,
        height: `${flower.stemH}px`,
        marginLeft: `-${flower.stemRadius}px`,
        transformStyle: 'preserve-3d',
        transform: `translateY(${-stemRise}px)`,
        transition: isUnfolding ? `transform ${flower.unfoldDuration}s cubic-bezier(0.34, 1.56, 0.64, 1) ${flower.delay}s` : 'transform 0.6s ease-out'
      }}
    >
      {/* Main stem cylinder */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `linear-gradient(to right, #2D6A3A 0%, #4CAF50 40%, #2D6A3A 100%)`,
          borderRadius: `${flower.stemRadius}px`,
          boxShadow: `
            2px 2px 8px rgba(0,0,0,0.3),
            inset -1px 0 4px rgba(0,0,0,0.2),
            inset 1px 0 3px rgba(255,255,255,0.15)
          `,
          transformStyle: 'preserve-3d'
        }}
      />

      {/* Left side of stem */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: `${flower.stemRadius}px`,
          background: `linear-gradient(to right, #1B4620 0%, #2D6A3A 100%)`,
          borderRadius: `${flower.stemRadius}px 0 0 ${flower.stemRadius}px`,
          boxShadow: 'inset 1px 0 3px rgba(255,255,255,0.1)'
        }}
      />

      {/* Leaves */}
      {Array.from({ length: flower.leafCount }).map((_, i) => {
        const leafOffset = (i / flower.leafCount) * flower.stemH * 0.8;
        const leafSide = i % 2 === 0 ? 'left' : 'right';
        const leafRotation = leafSide === 'left' ? -35 : 35;
        
        return (
          <div
            key={`leaf-${i}`}
            style={{
              position: 'absolute',
              bottom: `${leafOffset}px`,
              [leafSide]: `${leafSide === 'left' ? -14 : -14}px`,
              width: '22px',
              height: '14px',
              background: `linear-gradient(135deg, #4CAF50 0%, #2E7D32 70%, #1B4620 100%)`,
              borderRadius: '50% 50% 50% 0',
              transform: `rotate(${leafRotation}deg) translateZ(5px)`,
              transformStyle: 'preserve-3d',
              boxShadow: `
                2px 1px 4px rgba(0,0,0,0.2),
                inset -1px -1px 2px rgba(0,0,0,0.2),
                inset 1px 1px 2px rgba(255,255,255,0.1)
              `,
              opacity: 0.85,
              animation: isUnfolding ? `leafUnfold ${flower.unfoldDuration * 0.8}s ease-out ${flower.delay + 0.1}s forwards` : 'none',
              transformOrigin: leafSide === 'left' ? 'right center' : 'left center'
            }}
          />
        );
      })}
    </div>
  );
}

// Enhanced 3D Flower Component
function Flower3D({ flower, isOpen }) {
  const unfoldProgress = isOpen ? 1 : 0;
  const baseZ = flower.z;
  const bloomZ = isOpen ? baseZ + 20 : baseZ;
  
  // Container rises and scales as card opens
  const containerTransform = isOpen
    ? `translateX(${flower.x}px) translateZ(${bloomZ}px) scale(${flower.scale})`
    : `translateX(${flower.x}px) translateZ(2px) scale(${flower.scale * 0.8})`;

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        bottom: 0,
        width: 0,
        height: 0,
        transformStyle: 'preserve-3d',
        transform: containerTransform,
        transformOrigin: `${-flower.x}px bottom`,
        opacity: isOpen ? 1 : 0.3,
        transition: `
          transform ${flower.unfoldDuration + 0.4}s cubic-bezier(0.34, 1.56, 0.64, 1) ${flower.delay}s,
          opacity 0.3s ease ${flower.delay}s
        `,
        willChange: 'transform, opacity'
      }}
    >
      {/* Stem with 3D depth */}
      <Stem3D flower={flower} isUnfolding={isOpen} unfoldProgress={unfoldProgress} />

      {/* Flower bloom container */}
      <div
        style={{
          position: 'absolute',
          left: `${-flower.x}px`,
          bottom: `${flower.stemH}px`,
          width: '120px',
          height: '120px',
          marginLeft: '-60px',
          marginBottom: '-60px',
          transformStyle: 'preserve-3d',
          perspective: '1200px'
        }}
      >
        {/* Petals */}
        {Array.from({ length: flower.petalCount }).map((_, i) => (
          <Petal3D
            key={`petal-${i}`}
            index={i}
            flower={flower}
            petalAngle={(i / flower.petalCount) * 360}
            isUnfolding={isOpen}
            unfoldProgress={unfoldProgress}
          />
        ))}

        {/* Flower center with 3D depth */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '32px',
            height: '32px',
            marginLeft: '-16px',
            marginTop: '-16px',
            borderRadius: '50%',
            transformStyle: 'preserve-3d',
            perspective: '1000px',
            transform: isOpen ? 'scale(1) translateZ(8px)' : 'scale(0.7) translateZ(2px)',
            transition: `transform ${flower.unfoldDuration}s ease-out ${flower.delay}s`,
            background: `radial-gradient(circle at 35% 28%, #ffffffEE 0%, ${flower.centerColor}FF 35%, ${flower.centerColor}CC 100%)`,
            boxShadow: `
              0 0 16px ${flower.centerColor}DD,
              0 8px 20px rgba(0,0,0,0.35),
              inset 0 -4px 8px rgba(0,0,0,0.2),
              inset 1px 2px 6px rgba(255,255,255,0.5)
            `,
            zIndex: 20
          }}
        >
          {/* Center shine/highlight */}
          <div
            style={{
              position: 'absolute',
              width: '60%',
              height: '60%',
              top: '15%',
              left: '15%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
              filter: 'blur(1px)'
            }}
          />

          {/* Stamen details */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const radius = 10;
            return (
              <div
                key={`stamen-${i}`}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '3px',
                  height: '6px',
                  marginLeft: '-1.5px',
                  marginTop: '-3px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, #FFE066 0%, #D4A000 100%)`,
                  transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  opacity: 0.9
                }}
              />
            );
          })}
        </div>

        {/* Inner petal layer for depth */}
        {Array.from({ length: flower.petalCount }).map((_, i) => {
          const angle = (i / flower.petalCount) * 360 + 180 / flower.petalCount;
          const unfoldAngle = isOpen ? angle : angle + 20;
          return (
            <div
              key={`inner-petal-${i}`}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: `${flower.petalW * 0.65}px`,
                height: `${flower.petalH * 0.65}px`,
                marginLeft: `-${(flower.petalW * 0.65) / 2}px`,
                marginTop: `-${flower.petalH * 0.65}px`,
                transformOrigin: '50% 100%',
                transform: `rotateZ(${angle}deg) translateY(${isOpen ? 0 : 8}px) rotateX(${isOpen ? -60 : -20}deg)`,
                borderRadius: '52% 52% 36% 36%',
                background: `linear-gradient(to bottom, ${flower.innerColor} 0%, #FFD6E8 100%)`,
                opacity: isOpen ? 0.85 : 0.4,
                transformStyle: 'preserve-3d',
                boxShadow: `
                  0 4px 10px rgba(0,0,0,0.15),
                  inset 0 -4px 6px rgba(0,0,0,0.1)
                `,
                transition: `opacity ${flower.unfoldDuration}s ease-out ${flower.delay}s, transform ${flower.unfoldDuration}s cubic-bezier(0.34, 1.56, 0.64, 1) ${flower.delay}s`
              }}
            />
          );
        })}
      </div>

      {/* Bottom shadow cast on card for depth perception */}
      <div
        style={{
          position: 'absolute',
          left: `${-flower.x}px`,
          bottom: `${flower.stemH - 5}px`,
          width: '70px',
          height: '15px',
          marginLeft: '-35px',
          borderRadius: '50%',
          background: `radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, transparent 80%)`,
          filter: 'blur(3px)',
          opacity: isOpen ? 1 : 0.2,
          transition: `opacity ${flower.unfoldDuration}s ease-out ${flower.delay}s`
        }}
      />
    </div>
  );
}

// Main Birthday Card Component
function BirthdayCard() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [rotation, setRotation] = useState({ x: -15, y: -22 });
  const [scale, setScale] = useState(1);
  const [textReveal, setTextReveal] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [bobbing, setBobbing] = useState(0);

  const isDraggingRef = useRef(false);
  const isMovingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(0);
  const startTimeRef = useRef(null);
  const confetti = useMemo(() => generateConfetti(70), []);

  // Text content
  const firstName = 'Happy';
  const secondLine = 'Birthday!';
  const recipientName = 'Ana Laura';
  const fullText = firstName + ' ' + secondLine + ' ' + recipientName;

  // Animation loop for bobbing effect
  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      setBobbing(Math.sin((timestamp - startTimeRef.current) / 1000 * 1.2) * 7);
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  // Text reveal animation
  useEffect(() => {
    if (isCardOpen) {
      setTextReveal(Array(fullText.length).fill(false));
      setShowConfetti(false);

      fullText.split('').forEach((char, index) => {
        setTimeout(() => {
          setTextReveal((prev) => {
            const newReveal = [...prev];
            newReveal[index] = true;
            return newReveal;
          });
        }, 1200 + index * 80);
      });

      setTimeout(() => setShowConfetti(true), 1200 + fullText.length * 80 + 300);
    } else {
      setTextReveal([]);
      setShowConfetti(false);
    }
  }, [isCardOpen]);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e) => {
    isDraggingRef.current = true;
    isMovingRef.current = false;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;

    if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
      isMovingRef.current = true;
    }

    setRotation((prev) => ({
      x: Math.max(-40, Math.min(40, prev.x + deltaY * 0.45)),
      y: prev.y + deltaX * 0.65
    }));

    dragStartRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  useEffect(() => {
    const moveHandler = (e) => handleMouseMove(e);
    const upHandler = () => handleMouseUp();
    
    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseup', upHandler);
    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseup', upHandler);
    };
  }, [handleMouseMove, handleMouseUp]);

  // Touch handlers
  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMouseDown({ clientX: touch.clientX, clientY: touch.clientY });
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
  };

  // Wheel zoom handler
  const handleWheel = (e) => {
    e.preventDefault();
    setScale((prev) => Math.max(0.4, Math.min(2.2, prev - e.deltaY * 0.0008)));
  };

  // Card flip handler
  const handleCardClick = (e) => {
    e.stopPropagation();
    if (!isMovingRef.current) {
      setIsCardOpen((prev) => !prev);
      setHasLoaded(true);
    }
  };

  const cardRotationZ = isCardOpen ? -158 : 0;

  return (
    <div
      data-testid="birthday-card-scene"
      className="w-full h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(155deg, #FFF8F5 0%, #FFE8D8 55%, #FFF5EC 100%)',
        userSelect: 'none'
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      onWheel={handleWheel}
    >
      <style>{`
        @keyframes confettiFall {
          to {
            transform: translateY(100vh) translateX(var(--drift, 0px)) rotate(720deg);
            opacity: 0;
          }
        }
        
        @keyframes leafUnfold {
          from {
            opacity: 0;
            transform: rotateZ(var(--rotation, 0deg)) translateY(10px) rotateX(0deg);
          }
          to {
            opacity: 0.85;
            transform: rotateZ(var(--rotation, 0deg)) translateY(0px) rotateX(-45deg);
          }
        }

        @keyframes hintPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '20%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,160,180,0.18) 0%, transparent 70%)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '18%',
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,200,120,0.14) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Confetti animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {confetti.map((piece, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                left: `${piece.x}%`,
                top: `${piece.y}%`,
                width: `${piece.w}px`,
                height: `${piece.isCircle ? piece.w : piece.h}px`,
                borderRadius: piece.isCircle ? '50%' : '2px',
                background: piece.color,
                transform: `rotate(${piece.rotation}deg)`,
                animation: `confettiFall ${piece.animDuration}s ${piece.animDelay}s ease-in forwards`,
                opacity: 0.9
              }}
            />
          ))}
        </div>
      )}

      {/* Main card container */}
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          perspective: '1100px',
          perspectiveOrigin: '50% 44%'
        }}
      >
        <div
          style={{
            position: 'relative',
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale}) translateY(${bobbing}px)`,
            cursor: isDraggingRef.current ? 'grabbing' : 'grab'
          }}
        >
          {/* Card back panel */}
          <div
            style={{
              position: 'absolute',
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              transform: `translateZ(${-CARD_DEPTH / 2}px)`,
              background: 'linear-gradient(145deg, #FFFAF6 0%, #FFF8F2 50%, #FFF3EC 100%)',
              borderRadius: '3px 10px 10px 3px',
              backfaceVisibility: 'hidden',
              overflow: 'hidden'
            }}
          >
            {/* Card interior shadows for depth */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(ellipse at 50% 30%, transparent 0%, rgba(0,0,0,0.05) 50%, transparent 100%),
                  radial-gradient(ellipse at 20% 80%, transparent 0%, rgba(0,0,0,0.08) 70%, transparent 100%)
                `,
                pointerEvents: 'none'
              }}
            />

            {/* Decorative circles */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,182,193,0.18) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-10px',
                right: '-10px',
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,215,100,0.14) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            {/* Text reveal area */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
              {/* Animated text reveal */}
              <div
                style={{
                  opacity: isCardOpen ? 1 : 0,
                  transition: isCardOpen ? 'opacity 0.4s ease 1.4s' : 'opacity 0.1s ease',
                  position: 'absolute',
                  bottom: '22px',
                  left: 0,
                  right: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {/* First line */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1px' }}>
                  {firstName.split('').map((char, i) => (
                    <span
                      key={i}
                      style={{
                        display: 'inline-block',
                        color: '#C8236B',
                        fontSize: '19px',
                        fontWeight: '700',
                        fontFamily: 'Georgia, serif',
                        letterSpacing: '0.5px',
                        transform: textReveal[i] ? 'translateY(0)' : 'translateY(16px)',
                        opacity: textReveal[i] ? 1 : 0,
                        transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease',
                        textShadow: '0 1px 4px rgba(200,35,107,0.2)'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </div>

                {/* Second line */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5px' }}>
                  {secondLine.split('').map((char, i) => {
                    const index = firstName.length + 1 + i;
                    return (
                      <span
                        key={i}
                        style={{
                          display: 'inline-block',
                          color: '#B8860B',
                          fontSize: '19px',
                          fontWeight: '700',
                          fontFamily: 'Georgia, serif',
                          letterSpacing: '0.5px',
                          transform: textReveal[index] ? 'translateY(0)' : 'translateY(16px)',
                          opacity: textReveal[index] ? 1 : 0,
                          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease',
                          textShadow: '0 1px 4px rgba(180,120,0,0.2)'
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </div>

                {/* Divider */}
                <div
                  style={{
                    width: '50px',
                    height: '1.5px',
                    marginBottom: '5px',
                    background: 'linear-gradient(to right, transparent, #D4AF37, transparent)',
                    opacity: textReveal[firstName.length + 1 + secondLine.length] ? 1 : 0,
                    transition: 'opacity 0.5s ease'
                  }}
                />

                {/* Name */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {recipientName.split('').map((char, i) => {
                    const index = firstName.length + 1 + secondLine.length + 1 + i;
                    return (
                      <span
                        key={i}
                        style={{
                          display: char === ' ' ? 'inline' : 'inline-block',
                          color: '#C8236B',
                          fontSize: '16px',
                          fontStyle: 'italic',
                          fontWeight: '600',
                          fontFamily: 'Georgia, serif',
                          letterSpacing: '1.5px',
                          transform: textReveal[index] ? 'translateY(0)' : 'translateY(16px)',
                          opacity: textReveal[index] ? 1 : 0,
                          transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease',
                          textShadow: '0 1px 5px rgba(200,35,107,0.25)'
                        }}
                      >
                        {char === ' ' ? ' ' : char}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Pop-up flowers container */}
          <div
            style={{
              position: 'absolute',
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              transform: `translateZ(${-CARD_DEPTH / 2 + 5}px)`,
              pointerEvents: 'none',
              overflow: 'visible'
            }}
          >
            {FLOWERS.map((flower) => (
              <Flower3D key={flower.id} flower={flower} isOpen={isCardOpen} />
            ))}
          </div>

          {/* Card front panel with flip animation */}
          <div
            data-testid="card-front-panel"
            style={{
              position: 'absolute',
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              transformStyle: 'preserve-3d',
              transformOrigin: 'left center',
              transform: `rotateY(${cardRotationZ}deg)`,
              transition: 'transform 0.85s cubic-bezier(0.34, 1.15, 0.64, 1)'
            }}
            onClick={handleCardClick}
          >
            {/* Front side */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(140deg, #FFB3C6 0%, #FF85A1 45%, #E8638F 100%)',
                borderRadius: '3px 10px 10px 3px',
                backfaceVisibility: 'hidden',
                cursor: 'pointer',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(180,50,90,0.18), 0 2px 8px rgba(180,50,90,0.1)',
                transform: `translateZ(${CARD_DEPTH / 2}px)`
              }}
            >
              {/* Border decorations */}
              <div style={{ position: 'absolute', inset: '14px', border: '1.5px solid rgba(255,255,255,0.45)', borderRadius: '5px', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: '18px', border: '0.5px solid rgba(255,255,255,0.25)', borderRadius: '3px', pointerEvents: 'none' }} />

              {/* Front content */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                {/* Large flower */}
                <div style={{ position: 'relative', width: '70px', height: '70px', marginBottom: '18px' }}>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '13px',
                        height: '26px',
                        marginLeft: '-6.5px',
                        marginTop: '-24px',
                        borderRadius: '50% 50% 40% 40%',
                        background: 'rgba(255,255,255,0.75)',
                        transformOrigin: '50% 100%',
                        transform: `rotate(${i * 45}deg)`
                      }}
                    />
                  ))}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, #FFE066, #FFA500)',
                      zIndex: 10,
                      boxShadow: '0 0 8px rgba(255,200,0,0.6)'
                    }}
                  />
                </div>

                {/* Text */}
                <div style={{ color: 'white', fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 'bold', letterSpacing: '1.5px', textShadow: '0 2px 8px rgba(140,0,50,0.3)', marginBottom: '6px' }}>
                  For You
                </div>

                {/* Divider */}
                <div style={{ width: '70px', height: '1.5px', background: 'linear-gradient(to right, transparent, rgba(255,220,180,0.9), transparent)', marginBottom: '8px' }} />

                {/* Hint text */}
                <div style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase' }}>
                  tap to open
                </div>
              </div>
            </div>

            {/* Back side (inside) */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(150deg, #FFFAF6 0%, #FFF5EE 100%)',
                borderRadius: '3px 10px 10px 3px',
                backfaceVisibility: 'hidden',
                transform: `rotateY(180deg) translateZ(${CARD_DEPTH / 2}px)`,
                overflow: 'hidden'
              }}
            >
              {/* Interior shadows for pop-up effect */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `
                    radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.08) 0%, transparent 60%),
                    radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.12) 0%, transparent 50%)
                  `,
                  pointerEvents: 'none'
                }}
              />

              {/* Message label */}
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  left: '18px',
                  right: '18px',
                  fontSize: '8px',
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                  color: '#C9A090',
                  fontFamily: 'system-ui, sans-serif'
                }}
              >
                Your message
              </div>

              {/* Lines for writing */}
              <div style={{ position: 'absolute', top: '44px', left: '14px', right: '14px' }}>
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} style={{ borderBottom: '1px solid rgba(200,155,135,0.22)', height: '24px' }} />
                ))}
              </div>

              {/* Bottom decoration */}
              <div style={{ position: 'absolute', bottom: '18px', left: 0, right: 0, fontSize: '14px', color: 'rgba(210,100,130,0.28)', textAlign: 'center' }}>
                ♥
              </div>
            </div>
          </div>

          {/* Card edges with depth */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${CARD_DEPTH}px`,
              height: CARD_HEIGHT,
              background: 'linear-gradient(to right, #D4A090, #C89080)',
              transformOrigin: 'left center',
              transform: 'rotateY(-90deg) translateZ(0px)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: CARD_WIDTH,
              height: `${CARD_DEPTH}px`,
              background: 'linear-gradient(to top, #D4B0A0, #E8C8B8)',
              transformOrigin: 'top center',
              transform: 'rotateX(-90deg)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: CARD_WIDTH,
              height: `${CARD_DEPTH}px`,
              background: 'linear-gradient(to bottom, #D4B0A0, #E8C8B8)',
              transformOrigin: 'bottom center',
              transform: 'rotateX(90deg)'
            }}
          />

          {/* Card shadow */}
          <div
            style={{
              position: 'absolute',
              bottom: -60,
              left: '5%',
              width: '90%',
              height: '40px',
              background: 'radial-gradient(ellipse, rgba(160,80,60,0.22) 0%, transparent 75%)',
              transform: 'rotateX(90deg)',
              filter: 'blur(4px)'
            }}
          />
        </div>
      </div>

      {/* Hint text at bottom */}
      {!hasLoaded && (
        <div
          className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none"
          style={{ animation: 'hintPulse 2.5s ease-in-out infinite' }}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              padding: '10px 26px',
              borderRadius: '100px',
              color: '#8C6050',
              fontSize: '13px',
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '0.3px',
              border: '1px solid rgba(255,255,255,0.7)',
              boxShadow: '0 2px 20px rgba(180,90,60,0.1)'
            }}
          >
            Click the card to open • Drag to rotate • Scroll to zoom
          </div>
        </div>
      )}
    </div>
  );
}

// App root
function App() {
  return <BirthdayCard />;
}

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);