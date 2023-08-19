"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { interpolate } from "@popmotion/popcorn";
import styles from "./style.module.scss";

export function CardThree({
  height = 400,
  width = 300,
  name,
  title,
  image,
}: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [tapped, setTapped] = useState(false);

  const centerPoint = useMemo(() => {
    return [width / 2, height / 2];
  }, [width, height]);
  const xy = useMotionValue(centerPoint);

  const tx = 0.05;

  const transformX = interpolate([0, width], [width * tx, width * tx * -1]);
  const rotateY = useTransform(xy, ([x]) => transformX(x));

  const transformY = interpolate(
    [0, height],
    [height * tx * -1, height * tx * 1]
  );
  const rotateX = useTransform(xy, ([, y]) => transformY(y));

  const config = {
    stiffness: 150,
    damping: 20,
  };

  const springX = useSpring(rotateX, config);
  const springY = useSpring(rotateY, config);

  const gradientOpacity = useTransform(xy, ([, y]) => {
    return interpolate([0, height], [0, 0.3])(y);
  });

  const gradientOpacitySpring = useSpring(gradientOpacity, config);

  const gradient = useTransform(gradientOpacitySpring, (opacity) => {
    let [x, y] = xy.get();
    if (y === centerPoint[1]) {
      y = centerPoint[1] + 1;
    }

    const angle = Math.atan2(y - centerPoint[1], x - centerPoint[0]);
    const degree =
      ((angle > 0 ? angle : 2 * Math.PI + angle) * 360) / (2 * Math.PI) - 90;
    return `linear-gradient(${degree}deg, rgba(255,255,255,${opacity}), rgba(255,255,255,0) 80%)`;
  });

  function onMouseOver(e: any) {
    if (tapped) return;
    const rect = e.target.getBoundingClientRect();
    xy.set([e.clientX - rect.left, e.clientY - rect.top]);
  }

  function hoverStart() {
    setHover(true);
  }

  function hoverEnd() {
    setHover(false);
  }

  useEffect(() => {
    if (!hover) {
      xy.set(centerPoint);
    }
  }, [hover, xy, centerPoint]);

  return (
    <div
      className={styles.container}
      ref={ref}
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <motion.div
        className={styles.content}
        style={{
          scale: 1,
          rotateX: springX,
          rotateY: springY,
        }}
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        onTapCancel={(e: any) => {
          setTapped(false);
          onMouseOver(e);
        }}
        onTapStart={() => {
          setTapped(true);
        }}
        onTap={(e) => {
          setTapped(false);
        }}
        onHoverStart={hoverStart}
        onHoverEnd={hoverEnd}
        onMouseMove={onMouseOver}
      >
        <div className={styles.shadow} />
        <div className={styles.relative_container}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${image.src})` }}
          />
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
              padding: "20px 10px",
              backgroundColor: "rgba(0,0,0,0.6)",
              zIndex: "0",
            }}
          >
            <h1 style={{ color: "white" }}>{name}</h1>
            <p
              style={{
                fontSize: "16px",
                color: "white",
                fontWeight: "600",
              }}
            >
              {title}
            </p>
          </div>
        </div>
        <motion.div
          className={styles.gradient}
          style={{
            background: gradient,
          }}
        />
      </motion.div>
    </div>
  );
}
