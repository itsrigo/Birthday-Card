import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom/client';

// Constants
const CARD_WIDTH = 240;
const CARD_HEIGHT = 320;
const CARD_DEPTH = 8;

// Generate random confetti
function generateConfetti(count) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: -5 - Math.random() * 30,
    rotation: Math.random() * 360,
    color: ['#FF9EBB', '#FFD700', '#FF6B6B', '#98D8C8', '#FFB347'][Math.floor(Math.random() * 5)],
    w: 6 + Math.random() * 8,
    h: 4 + Math.random() * 6,
    animDuration: 2.5 + Math.random() * 2.5,
    animDelay: Math.random() * 2.5,
    drift: (Math.random() - 0.5) * 80,
    isCircle: Math.random() > 0.6
  }));
}

// 3D Petal with actual geometry
function Petal({ angle, petalIndex, totalPetals, color, isOpen, delay }) {
  const unfoldAngle = isOpen ? 75 : 5; // Amount petal rotates outward
  const petalRotation = (petalIndex / totalPetals) * 360;
  
  // Petal has multiple segments for depth
  const segments = 3;
  
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '28px',
        height: '50px',
        marginLeft: '-14px',
        marginTop: '-50px',
        transformOrigin: '50% 100%',
        transformStyle: 'preserve-3d',
        transform: `rotateZ(${petalRotation}deg) rotateX(${isOpen ? unfoldAngle : 5}deg)`,
        transition: `transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`,
      }}
    >
      {/* Petal segments to show depth */}
      {Array.from({ length: segments }).map((_, segIndex) => {
        const depthOffset = segIndex * 3;
        const opacity = 1 - segIndex * 0.15;
        const darkening = segIndex * 0.1;
        
        return (
          <div
            key={`segment-${segIndex}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50% 50% 35% 35%',
              background: `linear-gradient(135deg, ${color} 0%, ${adjustBrightness(color, -darkening)} 100%)`,
              filter: `drop-shadow(${2 + segIndex}px ${3 + segIndex}px ${4 + segIndex}px rgba(0,0,0,0.3))`,
              transform: `translateZ(${-depthOffset}px)`,
              transformStyle: 'preserve-3d',
              opacity: opacity,
              boxShadow: `
                inset -2px -4px 6px rgba(0,0,0,0.2),
                inset 1px 2px 4px rgba(255,255,255,0.3),
                0 6px 12px rgba(0,0,0,0.25)
              `
            }}
          />
        );
      })}
    </div>
  );
}

// Helper to adjust color brightness
function adjustBrightness(color, amount) {
  const hex = color.replace('#', '');
  const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount * 50)));
  const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount * 50)));
  const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount * 50)));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// 3D Flower bloom with accordion-like folding
function FlowerBloom({ flowerConfig, isOpen }) {
  const { x, y, petalColor, stemColor, delay, scale } = flowerConfig;
  
  // Flower rises and scales as card opens
  const flowerRise = isOpen ? 30 : 0;
  const flowerScale = isOpen ? scale : scale * 0.7;
  
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        bottom: '20px',
        width: 0,
        height: 0,
        transformStyle: 'preserve-3d',
        transform: `translateX(${x}px) translateY(${-flowerRise}px) translateZ(20px) scale(${flowerScale})`,
        transition: `transform 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`,
        perspective: '1200px'
      }}
    >
      {/* Main stem - accordion folded */}
      <div
        style={{
          position: 'absolute',
          left: '-3px',
          bottom: 0,
          width: '6px',
          height: '80px',
          background: `linear-gradient(to right, ${stemColor}dd 0%, ${stemColor} 50%, ${stemColor}dd 100%)`,
          borderRadius: '3px',
          boxShadow: `
            inset -1px 0 2px rgba(0,0,0,0.3),
            inset 1px 0 2px rgba(255,255,255,0.2),
            2px 2px 6px rgba(0,0,0,0.3)
          `,
          transformStyle: 'preserve-3d',
          transform: isOpen ? 'scaleY(1)' : 'scaleY(0.5) translateY(20px)',
          transformOrigin: 'bottom center',
          transition: `transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`
        }}
      />

      {/* Leaves - fold out from stem */}
      <div
        style={{
          position: 'absolute',
          left: '-12px',
          bottom: '30px',
          width: '20px',
          height: '12px',
          background: `linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)`,
          borderRadius: '50% 50% 50% 0',
          transform: isOpen ? 'rotateX(0deg) rotateZ(-40deg)' : 'rotateX(90deg) rotateZ(-40deg)',
          transformOrigin: 'right center',
          transformStyle: 'preserve-3d',
          transition: `transform 1.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 0.1}s`,
          boxShadow: '1px 2px 4px rgba(0,0,0,0.3), inset -1px -1px 2px rgba(0,0,0,0.2)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '-12px',
          bottom: '50px',
          width: '20px',
          height: '12px',
          background: `linear-gradient(225deg, #4CAF50 0%, #2E7D32 100%)`,
          borderRadius: '50% 50% 0 50%',
          transform: isOpen ? 'rotateX(0deg) rotateZ(40deg)' : 'rotateX(90deg) rotateZ(40deg)',
          transformOrigin: 'left center',
          transformStyle: 'preserve-3d',
          transition: `transform 1.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 0.15}s`,
          boxShadow: '1px 2px 4px rgba(0,0,0,0.3), inset -1px -1px 2px rgba(0,0,0,0.2)'
        }}
      />

      {/* Bloom container - petals fan out */}
      <div
        style={{
          position: 'absolute',
          left: '-60px',
          bottom: '80px',
          width: '120px',
          height: '120px',
          transformStyle: 'preserve-3d',
          perspective: '1200px'
        }}
      >
        {/* Petals */}
        {Array.from({ length: 7 }).map((_, i) => (
          <Petal
            key={`petal-${i}`}
            angle={(i / 7) * 360}
            petalIndex={i}
            totalPetals={7}
            color={petalColor}
            isOpen={isOpen}
            delay={delay + 0.05 + i * 0.05}
          />
        ))}

        {/* Center of flower - 3D sphere */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '30px',
            height: '30px',
            marginLeft: '-15px',
            marginTop: '-15px',
            borderRadius: '50%',
            background: `radial-gradient(circle at 35% 35%, #FFE066 0%, #FFD700 40%, #FFA500 100%)`,
            boxShadow: `
              0 0 15px #FFD700dd,
              0 6px 15px rgba(0,0,0,0.4),
              inset -2px -2px 4px rgba(0,0,0,0.3),
              inset 2px 2px 6px rgba(255,255,255,0.5)
            `,
            transform: isOpen ? 'scale(1) translateZ(15px)' : 'scale(0.6) translateZ(5px)',
            transition: `transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`,
            zIndex: 10
          }}
        >
          {/* Center shine */}
          <div
            style={{
              position: 'absolute',
              width: '40%',
              height: '40%',
              top: '15%',
              left: '20%',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.7)',
              filter: 'blur(2px)'
            }}
          />
        </div>

        {/* Inner petal layer for more depth */}
        {Array.from({ length: 7 }).map((_, i) => {
          const petalRotation = (i / 7) * 360 + 25;
          return (
            <div
              key={`inner-petal-${i}`}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '20px',
                height: '38px',
                marginLeft: '-10px',
                marginTop: '-38px',
                transformOrigin: '50% 100%',
                transform: `rotateZ(${petalRotation}deg) translateY(${isOpen ? 0 : 8}px) rotateX(${isOpen ? -55 : -15}deg)`,
                borderRadius: '50% 50% 35% 35%',
                background: `linear-gradient(to bottom, ${adjustBrightness(petalColor, 0.15)} 0%, ${petalColor} 100%)`,
                opacity: isOpen ? 0.75 : 0.3,
                transformStyle: 'preserve-3d',
                transition: `opacity 1.2s ease-out ${delay}s, transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`,
                boxShadow: '0 3px 8px rgba(0,0,0,0.2), inset 0 -3px 4px rgba(0,0,0,0.15)'
              }}
            />
          );
        })}
      </div>

      {/* Base shadow on card */}
      <div
        style={{
          position: 'absolute',
          left: '-35px',
          bottom: '10px',
          width: '70px',
          height: '12px',
          borderRadius: '50%',
          background: `radial-gradient(ellipse, rgba(0,0,0,0.3) 0%, transparent 80%)`,
          filter: 'blur(2px)',
          opacity: isOpen ? 1 : 0.1,
          transition: `opacity 1.2s ease-out ${delay}s`,
          transform: 'translateZ(-5px)'
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

  // Flower configurations
  const flowers = [
    { x: 0, y: 0, petalColor: '#FF85A1', stemColor: '#2E7D32', delay: 0.1, scale: 1.3, id: 'center' },
    { x: -50, y: 30, petalColor: '#E8638F', stemColor: '#2E7D32', delay: 0.4, scale: 0.95, id: 'left' },
    { x: 50, y: 30, petalColor: '#CE93D8', stemColor: '#2E7D32', delay: 0.35, scale: 0.98, id: 'right' },
    { x: -25, y: -20, petalColor: '#EF9A9A', stemColor: '#2E7D32', delay: 0.5, scale: 0.8, id: 'back-left' },
    { x: 25, y: -20, petalColor: '#FFCC80', stemColor: '#2E7D32', delay: 0.45, scale: 0.85, id: 'back-right' }
  ];

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

  // Text reveal animation - delayed to let flowers open
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
        }, 1600 + index * 80);
      });

      setTimeout(() => setShowConfetti(true), 1600 + fullText.length * 80 + 300);
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
          {/* Card back panel - where flowers emerge from */}
          <div
            style={{
              position: 'absolute',
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              transform: `translateZ(${-CARD_DEPTH / 2}px)`,
              background: 'linear-gradient(145deg, #FFFAF6 0%, #FFF8F2 50%, #FFF3EC 100%)',
              borderRadius: '3px 10px 10px 3px',
              backfaceVisibility: 'hidden',
              overflow: 'visible',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05), inset 0 80px 40px rgba(0,0,0,0.08)'
            }}
          >
            {/* Flowers pop out from inside */}
            {flowers.map((flower) => (
              <FlowerBloom key={flower.id} flowerConfig={flower} isOpen={isCardOpen} />
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
                overflow: 'hidden',
                boxShadow: 'inset 0 0 30px rgba(0,0,0,0.1)'
              }}
            >
              {/* Text reveal area */}
              <div
                style={{
                  opacity: isCardOpen ? 1 : 0,
                  transition: isCardOpen ? 'opacity 0.4s ease 1.8s' : 'opacity 0.1s ease',
                  position: 'absolute',
                  bottom: '22px',
                  left: 0,
                  right: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {/* Text */}
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
                        transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </div>

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
                          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease'
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </div>

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
                          transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease'
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

      {/* Hint text */}
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

function App() {
  return <BirthdayCard />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);