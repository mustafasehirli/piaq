"use client";

import { useRef, useState } from "react";

type PannableCanvasViewProps = {
  ariaLabel: string;
  className?: string;
};

export function PannableCanvasView({ ariaLabel, className = "" }: PannableCanvasViewProps) {
  const [isPanning, setIsPanning] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const panRef = useRef({
    scrollLeft: 0,
    scrollTop: 0,
    startX: 0,
    startY: 0
  });

  function startPan(event: React.PointerEvent<HTMLDivElement>) {
    const canvas = canvasRef.current;

    if (!canvas) return;

    canvas.setPointerCapture(event.pointerId);
    panRef.current = {
      scrollLeft: canvas.scrollLeft,
      scrollTop: canvas.scrollTop,
      startX: event.clientX,
      startY: event.clientY
    };
    setIsPanning(true);
  }

  function movePan(event: React.PointerEvent<HTMLDivElement>) {
    const canvas = canvasRef.current;

    if (!canvas || !isPanning) return;

    const deltaX = event.clientX - panRef.current.startX;
    const deltaY = event.clientY - panRef.current.startY;
    canvas.scrollLeft = panRef.current.scrollLeft - deltaX;
    canvas.scrollTop = panRef.current.scrollTop - deltaY;
  }

  function stopPan(event: React.PointerEvent<HTMLDivElement>) {
    const canvas = canvasRef.current;

    if (canvas?.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId);
    }

    setIsPanning(false);
  }

  return (
    <section
      aria-label={ariaLabel}
      className={`relative h-[calc(100vh-112px)] min-h-[640px] overflow-hidden bg-white ${className}`}
    >
      <div
        className={`absolute inset-0 overflow-hidden ${isPanning ? "cursor-grabbing" : "cursor-grab"}`}
        onPointerCancel={stopPan}
        onPointerDown={startPan}
        onPointerLeave={stopPan}
        onPointerMove={movePan}
        onPointerUp={stopPan}
        ref={canvasRef}
      >
        <div className="h-[2200px] w-[3200px] bg-[radial-gradient(circle_at_1px_1px,color-mix(in_oklch,var(--text-muted)_34%,transparent)_1px,transparent_0)] [background-size:24px_24px]" />
      </div>

      <aside
        aria-label="Canvas menu alani"
        className="absolute left-8 top-8 z-10 h-[520px] w-[184px] rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] shadow-[0_18px_42px_oklch(0.18_0.018_80_/_0.10)]"
      />
    </section>
  );
}
