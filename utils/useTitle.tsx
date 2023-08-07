"use client";

import { useEffect, useRef } from "react";

export function useTilt(active: boolean | null) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }
  }, [active]);

  return ref;
}
