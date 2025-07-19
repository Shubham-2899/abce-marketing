import React, { useEffect, useRef } from "react";

const WaveBackground: React.FC<{isDark : boolean}> = ({ isDark}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const width = window.innerWidth;
    const height = 400;

    canvas.width = width;
    canvas.height = height;

    const lines = 30;
    const amplitude = 80;
    const frequency = 0.005;

    ctx.clearRect(0, 0, width, height);
    // ctx.globalCompositeOperation = "lighter";

    for (let i = 0; i < lines; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      const alpha = 0.03 + i * 0.01;

      ctx.strokeStyle = isDark ? `rgba(255,255,255, ${alpha})` : `rgba(0,0,0, ${alpha})`;

      const yOffset = i * 5;

      for (let x = 0; x < width; x++) {
        const y =
          height / 3 +
          yOffset +
          Math.sin(x * frequency + i * 0.2) * amplitude;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
    }
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        opacity: 0.6,
      }}
    />
  );
};

export default WaveBackground;
