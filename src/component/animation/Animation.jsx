import React, { useEffect, useRef } from 'react';
import './animation.css'; // Create a CSS file for styling the boxes

const BoxAnimation = () => {
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const animationFrameRef = useRef(null);
  const speed = 2; // Speed in pixels per frame (adjust as needed)

  useEffect(() => {
    const container1 = container1Ref.current;
    const container2 = container2Ref.current;

    let position = container1.clientWidth;
    let animationFrameId;

    const animate = () => {
      position -= speed;

      // Move both containers together
      container1.style.transform = `translateX(${position}px)`;
      container2.style.transform = `translateX(${position + container1.clientWidth}px)`;

      // Reset position when the first container moves completely out of the screen
      if (position + container1.clientWidth <= 0) {
        position += container1.clientWidth;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div className="outer-container">
      <div className="container" ref={container1Ref}>
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
      <div className="container" ref={container2Ref}>
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    </div>
  );
};

export default BoxAnimation;