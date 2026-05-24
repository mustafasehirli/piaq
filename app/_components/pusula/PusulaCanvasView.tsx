"use client";

import { PannableCanvasView } from "@/app/_components/canvas/PannableCanvasView";

type PusulaCanvasViewProps = {
  className?: string;
};

export function PusulaCanvasView({ className = "" }: PusulaCanvasViewProps) {
  return <PannableCanvasView ariaLabel="Pusula Tahtasi" className={className} />;
}
