import { useEffect } from "react";
import { useRef } from "react";

export default function StrictModeComponent() {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Mounting for the first time");
    } else {
      console.log("Mounting again for the debug purposes");
    }
  }, []);
}
