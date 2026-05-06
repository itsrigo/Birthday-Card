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

// Flower configurations
const FLOWERS = [
  {
    x: 0, zOff: 60, stemH: 88, petalCount: 6, outerColor: '#D4145A',
    innerColor: '#FF85A1', centerColor: '#FFD700', petalW: 22, petalH: 40,
    delay: 0.05, scale: 1.15
  },
  {
    x: -50, zOff: 38, stemH: 68, petalCount: 6, outerColor: '#AA1465',
    innerColor: '#E8638F', centerColor: '#FFA500', petalW: 18, petalH: 34,
    delay: 0.18, scale: 0.95
  },
  {
    x: 50, zOff: 42, stemH: 74, petalCount: 7, outerColor: '#7B1FA2',
    innerColor: '#CE93D8', centerColor: '#FFE066', petalW: 18, petalH: 34,
    delay: 0.13, scale: 0.98
  },
  {
    x: -26, zOff: 52, stemH: 80, petalCount: 5, outerColor: '#C62828',
    innerColor: '#EF9A9A', centerColor: '#FFD700', petalW: 20, petalH: 38,
    delay: 0.22, scale: 1.05
  },
  {
    x: 28, zOff: 48, stemH: 76, petalCount: 8, outerColor: '#E65100',
    innerColor: '#FFCC80', centerColor: '#5D4037', petalW: 16, petalH: 30,
    delay: 0.16, scale: 1
  },
  {
    x: -78, zOff: 22, stemH: 54, petalCount: 6, outerColor: '#AD1457',
    innerColor: '#F48FB1', centerColor: '#FFA000', petalW: 15, petalH: 28,
    delay: 0.3, scale: 0.82
  },
  {
    x: 78, zOff: 26, stemH: 58, petalCount: 5, outerColor: '#BF360C',
    innerColor: '#FFAB91', centerColor: '#FFD700', petalW: 16, petalH: 30,
    delay: 0.27, scale: 0.88
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

// Flower component
function Flower({ flower, isOpen }) {
  const stemBottom = -(flower.stemH + 52);
  const openTransform = `translateX(${flower.x}px) translateZ(${flower.zOff}px) scale(${flower.scale})`;
  const closedTransform = `translateX(${flower.x}px) translateZ(2px) scale(0)`;

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        bottom: 0,
        width: 0,
        height: 0,
        transformStyle: 'preserve-3d',
        transform: isOpen ? openTransform : closedTransform,
        transformOrigin: 'center bottom',
        opacity: isOpen ? 1 : 0,
        transition: isOpen
          ? `transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${flower.delay}s, opacity 0.1s ease ${flower.delay}s`
          : 'transform 0.5s ease 0s, opacity 0.08s ease 0s',
        willChange: 'transform, opacity'
      }}
    >
      {/* Stem */}
      <div
        style={{
          position: 'absolute',
          left: '-4px',
          bottom: 0,
          width: '8px',
          height: `${flower.stemH}px`,
          background: 'linear-gradient(to right, #2E7D32 0%, #66BB6A 50%, #2E7D32 100%)',
          borderRadius: '4px',
          boxShadow: '3px 0 10px rgba(20,60,20,0.45), -1px 0 4px rgba(0,0,0,0.2), inset 1px 0 3px rgba(255,255,255,0.15)'
        }}
      />

      {/* Leaves */}
      <div
        style={{
          position: 'absolute',
          left: '-18px',
          bottom: `${flower.stemH * 0.42}px`,
          width: '22px',
          height: '12px',
          background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
          borderRadius: '50% 0 50% 50%',
          transform: 'rotateZ(-38deg)',
          boxShadow: '2px 3px 7px rgba(20,60,20,0.35)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '4px',
          bottom: `${flower.stemH * 0.26}px`,
          width: '22px',
          height: '12px',
          background: 'linear-gradient(225deg, #4CAF50 0%, #2E7D32 100%)',
          borderRadius: '0 50% 50% 50%',
          transform: 'rotateZ(38deg)',
          boxShadow: '-2px 3px 7px rgba(20,60,20,0.35)'
        }}
      />

      {/* Flower bloom */}
      <div
        style={{
          position: 'absolute',
          left: '-50px',
          top: `${stemBottom}px`,
          width: '100px',
          height: '100px',
          transform: 'rotateX(-45deg)',
          backfaceVisibility: 'hidden'
        }}
      >
        {/* Petals */}
        {Array.from({ length: flower.petalCount }).map((_, i) => {
          const angle = (i / flower.petalCount) * 360;
          return (
            <div
              key={`outer-petal-${i}`}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginLeft: `-${flower.petalW / 2}px`,
                marginTop: `-${flower.petalH}px`,
                width: `${flower.petalW}px`,
                height: `${flower.petalH}px`,
                transformOrigin: '50% 100%',
                transform: `rotateZ(${angle}deg)`,
                borderRadius: '52% 52% 36% 36%',
                background: `linear-gradient(to top, ${flower.outerColor} 0%, ${flower.innerColor} 55%, #FFE0EC 100%)`,
                boxShadow: '0 5px 12px rgba(0,0,0,0.22), inset 0 -6px 10px rgba(0,0,0,0.12), inset 1px 1px 4px rgba(255,255,255,0.3)'
              }}
            />
          );
        })}

        {/* Inner petals */}
        {Array.from({ length: flower.petalCount }).map((_, i) => {
          const angle = (i / flower.petalCount) * 360 + 180 / flower.petalCount;
          return (
            <div
              key={`inner-petal-${i}`}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginLeft: `-${flower.petalW * 0.35}px`,
                marginTop: `-${flower.petalH * 0.68}px`,
                width: `${flower.petalW * 0.7}px`,
                height: `${flower.petalH * 0.68}px`,
                transformOrigin: '50% 100%',
                transform: `rotateZ(${angle}deg)`,
                borderRadius: '52% 52% 36% 36%',
                background: `linear-gradient(to top, ${flower.innerColor} 0%, #FFD6E8 100%)`,
                opacity: 0.9
              }}
            />
          );
        })}

        {/* Flower center */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '28px',
            height: '28px',
            marginLeft: '-14px',
            marginTop: '-14px',
            borderRadius: '50%',
            background: `radial-gradient(circle at 35% 28%, #ffffffCC 0%, ${flower.centerColor}EE 40%, ${flower.centerColor}88 100%)`,
            boxShadow: `0 0 14px ${flower.centerColor}BB, 0 6px 18px rgba(0,0,0,0.28), inset 0 -3px 5px rgba(0,0,0,0.18)`,
            zIndex: 10
          }}
        />

        {/* Pollen */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          return (
            <div
              key={`pollen-${i}`}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: flower.outerColor,
                marginLeft: '-2px',
                marginTop: '-2px',
                transform: `translate(${Math.cos(angle) * 10}px, ${Math.sin(angle) * 10}px)`,
                opacity: 0.7
              }}
            />
          );
        })}
      </div>
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
        }, 650 + index * 80);
      });

      setTimeout(() => setShowConfetti(true), 650 + fullText.length * 80 + 300);
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
    window.addEventListener('mousemove', (e) => handleMouseMove(e));
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
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
                animation: `confettiFall ${piece.animDuration}s ${piece.animDelay}s ease-in infinite`,
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
            <div
              style={{
                position: 'absolute',
                top: '40%',
                right: '-30px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200,160,220,0.12) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            {/* Decorative flower in corner */}
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '28px',
                height: '28px',
                opacity: 0.25,
                pointerEvents: 'none'
              }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '7px',
                    height: '14px',
                    marginLeft: '-3.5px',
                    marginTop: '-12px',
                    borderRadius: '50% 50% 40% 40%',
                    background: '#E8A0B0',
                    transformOrigin: '50% 100%',
                    transform: `rotate(${i * 60}deg)`
                  }}
                />
              ))}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '8px',
                  height: '8px',
                  marginLeft: '-4px',
                  marginTop: '-4px',
                  borderRadius: '50%',
                  background: '#FFD700'
                }}
              />
            </div>

            {/* Text reveal area */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
              {/* Decorative element */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  opacity: 0.22,
                  width: '60px',
                  display: 'flex',
                  gap: '4px',
                  justifyContent: 'center'
                }}
              >
                {['#FF9EBB', '#FFD700', '#CE93D8'].map((color, i) => (
                  <div key={i} style={{ position: 'relative', width: '16px', height: '16px' }}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <div
                        key={j}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '5px',
                          height: '9px',
                          marginLeft: '-2.5px',
                          marginTop: '-8px',
                          borderRadius: '50% 50% 40% 40%',
                          background: color,
                          transformOrigin: '50% 100%',
                          transform: `rotate(${j * 72}deg)`
                        }}
                      />
                    ))}
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '5px',
                        height: '5px',
                        marginLeft: '-2.5px',
                        marginTop: '-2.5px',
                        borderRadius: '50%',
                        background: '#FFD700'
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Animated text reveal */}
              <div
                style={{
                  opacity: isCardOpen ? 1 : 0,
                  transition: isCardOpen ? 'opacity 0.4s ease 0.5s' : 'opacity 0.1s ease',
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

                {/* Decorative dots */}
                <div
                  style={{
                    marginTop: '8px',
                    display: 'flex',
                    gap: '6px',
                    opacity: textReveal[fullText.length - 1] ? 1 : 0,
                    transform: textReveal[fullText.length - 1] ? 'scale(1)' : 'scale(0.4)',
                    transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)'
                  }}
                >
                  {['#FF9EBB', '#FFD700', '#FF9EBB'].map((color, i) => (
                    <div
                      key={i}
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: color,
                        boxShadow: `0 0 5px ${color}`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card inside back panel */}
          <div
            style={{
              position: 'absolute',
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              transform: `translateZ(${-CARD_DEPTH / 2}px) rotateY(180deg)`,
              background: 'linear-gradient(140deg, #FFB3C6 0%, #FF85A1 50%, #E8638F 100%)',
              borderRadius: '10px 3px 3px 10px',
              backfaceVisibility: 'hidden',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ position: 'absolute', inset: '12px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '6px' }} />
            {/* Message space */}
            <div style={{ opacity: 0.4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '10px',
                    height: '20px',
                    marginLeft: '-5px',
                    marginTop: '-18px',
                    borderRadius: '50% 50% 40% 40%',
                    background: 'rgba(255,255,255,0.6)',
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
                  width: '12px',
                  height: '12px',
                  marginLeft: '-6px',
                  marginTop: '-6px',
                  borderRadius: '50%',
                  background: 'rgba(255,220,80,0.8)'
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '18px',
                left: 0,
                right: 0,
                textAlign: 'center',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '9px',
                letterSpacing: '2px',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic'
              }}
            >
              with love ♥
            </div>
          </div>

          {/* Flowers inside card */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: CARD_WIDTH,
              height: 0,
              transformStyle: 'preserve-3d',
              transform: `translateZ(${-CARD_DEPTH / 2 + 3}px)`,
              pointerEvents: 'none'
            }}
          >
            {FLOWERS.map((flower, i) => (
              <Flower key={i} flower={flower} isOpen={isCardOpen} />
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

              {/* Corner decorations */}
              {[
                { top: '20px', left: '20px' },
                { top: '20px', right: '20px' },
                { bottom: '20px', left: '20px' },
                { bottom: '20px', right: '20px' }
              ].map((position, i) => (
                <div key={i} style={{ position: 'absolute', ...position, width: '16px', height: '16px', pointerEvents: 'none' }}>
                  <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1.5px', background: 'rgba(255,255,255,0.65)', marginTop: '-0.75px' }} />
                  <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1.5px', background: 'rgba(255,255,255,0.65)', marginLeft: '-0.75px' }} />
                </div>
              ))}

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

                {/* Bottom divider */}
                <div style={{ position: 'absolute', bottom: '52px', left: '14px', right: '14px', height: '1.5px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.7), transparent)' }} />
              </div>
            </div>

            {/* Back side (when flipped) */}
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
              {/* Decorative circle */}
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255,182,193,0.15) 0%, transparent 70%)',
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

          {/* Card edges */}
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