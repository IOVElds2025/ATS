import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId = null;

    const getBackgroundType = (element) => {
      if (!element) return 'light';
      
      const computedStyle = getComputedStyle(element);
      const backgroundColor = computedStyle.backgroundColor;
      const backgroundImage = computedStyle.backgroundImage;
      
      // Check for images
      if (backgroundImage && backgroundImage !== 'none') {
        if (backgroundImage.includes('gradient')) {
          return 'gradient';
        }
        return 'image';
      }

      // Check for transparency
      if (backgroundColor.includes('rgba') || backgroundColor.includes('transparent')) {
        // If transparent, check parent elements
        if (element.parentElement) {
          return getBackgroundType(element.parentElement);
        }
        return 'transparent';
      }

      // Calculate brightness for solid colors
      const rgb = backgroundColor.match(/\d+/g);
      if (!rgb) return 'light';
      
      const [r, g, b] = rgb.map(Number);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      
      return brightness < 128 ? 'dark' : 'light';
    };

    const updateCursorStyle = (element, cursorElement, dotElement) => {
      const backgroundType = getBackgroundType(element);
      
      // Remove all previous states
      const states = ['on-dark', 'on-light', 'on-transparent', 'on-image', 'on-gradient'];
      states.forEach(state => {
        cursorElement.classList.remove(state);
        dotElement.classList.remove(state);
      });

      // Add new state
      cursorElement.classList.add(`on-${backgroundType}`);
      dotElement.classList.add(`on-${backgroundType}`);
    };

    const updateCursorPosition = () => {
      if (cursorRef.current && dotRef.current) {
        const { x: cursorX, y: cursorY } = cursorPosition;
        const { x: dotX, y: dotY } = dotPosition;

        // Dynamic speed based on distance with tighter control
        const distance = Math.hypot(dotX - cursorX, dotY - cursorY);
        const baseSpeed = isHovering ? 0.15 : 0.25;
        const speedMultiplier = Math.min(distance * 0.01, 0.3);
        const cursorSpeed = baseSpeed + speedMultiplier;

        const nextCursorX = cursorX + (dotX - cursorX) * cursorSpeed;
        const nextCursorY = cursorY + (dotY - cursorY) * cursorSpeed;

        // Apply movement with sub-pixel precision
        cursorRef.current.style.transform = `translate3d(${nextCursorX.toFixed(2)}px, ${nextCursorY.toFixed(2)}px, 0) translate(-50%, -50%)`;
        dotRef.current.style.transform = `translate3d(${dotX.toFixed(2)}px, ${dotY.toFixed(2)}px, 0) translate(-50%, -50%)`;

        // Get element at cursor position with a small offset to improve detection
        const element = document.elementFromPoint(dotX, dotY);
        if (element) {
          updateCursorStyle(element, cursorRef.current, dotRef.current);
        }

        setCursorPosition({ x: nextCursorX, y: nextCursorY });
        animationFrameId = requestAnimationFrame(updateCursorPosition);
      }
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (!isVisible) setIsVisible(true);
      setDotPosition({ x: clientX, y: clientY });
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.tagName.toLowerCase() === 'select' ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('clickable') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleWindowLeave = () => {
      setIsVisible(false);
    };

    // Start animation loop
    animationFrameId = requestAnimationFrame(updateCursorPosition);

    // Add event listeners with passive flag for better performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseEnter, { passive: true });
    document.addEventListener('mouseout', handleMouseLeave, { passive: true });
    document.addEventListener('mouseleave', handleWindowLeave, { passive: true });

    // Hide native cursor
    document.body.classList.add('hide-cursor');

    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseleave', handleWindowLeave);
      document.body.classList.remove('hide-cursor');
    };
  }, [isVisible, isHovering, cursorPosition, dotPosition]);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'cursor-hovering' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovering ? 'cursor-hovering' : ''}`}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;