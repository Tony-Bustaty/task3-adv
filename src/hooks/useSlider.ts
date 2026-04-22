import { useState, useEffect, useCallback } from "react";
import type { SliderType } from "../components/Slider/BaseSlider";

export function useSlider(totalItems: number, type: SliderType) {
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);

  const calcVisible = useCallback(() => {
    if (window.innerWidth <= 1100) return 1;
    if (window.innerWidth <= 1650) return 2;
    return type === "gallery" ? 4 : 3;
  }, [type]);
  useEffect(() => {
    const mediaQueries = [
      window.matchMedia("(max-width: 1100px)"),
      window.matchMedia("(max-width: 1650px)"),
    ];

    const handleChange = () => {
      const newVisible = calcVisible();

      setVisible((prev) => {
        if (prev !== newVisible) {
          setIndex((i) => Math.min(i, Math.max(0, totalItems - newVisible)));
        }
        return newVisible;
      });
    };

    // attach listeners
    mediaQueries.forEach((mq) => mq.addEventListener("change", handleChange));

    // initial check
    handleChange();

    return () => {
      mediaQueries.forEach((mq) =>
        mq.removeEventListener("change", handleChange),
      );
    };
  }, [calcVisible, totalItems]);

  const maxIndex =type==="gallery"?  Math.max(0, Math.ceil(totalItems / visible) - 1): Math.max(0, totalItems - visible) ;
  const next = useCallback(
    () => setIndex((p) => (p >= maxIndex? 0 : p + 1)),
    [maxIndex],
  );
  const prev = useCallback(
    () => setIndex((p) => (p <= 0 ? maxIndex : p - 1)),
    [maxIndex],
  );
  const trackOffset =type==="gallery" ? index * 100 : index * (100 / visible);

  return { index, visible, next, prev, trackOffset };
}
