import { useEffect } from "react";
import useWow from "./useWow";

export default function useSpy() {
  const { sayWow } = useWow();

  useEffect(() => {
    const report = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      console.log(`🕵️🏴‍☠️🦜: User clicked at position ${x}, ${y}`);

      if (x > 300 && x < 500 && y < 200) {
        sayWow();
      }
    };

    document.addEventListener("click", report);

    return () => document.removeEventListener("click", report);
  });
}
