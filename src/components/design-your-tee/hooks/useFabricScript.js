import { useEffect } from "react";

export const useFabricScript = (onScriptLoad) => {
  useEffect(() => {
    // Check if Fabric.js is already loaded
    if (window.fabric) {
      onScriptLoad();
      return;
    }

    // Load Fabric.js script dynamically
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.5.0/fabric.min.js";
    script.onload = onScriptLoad;
    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script if the component unmounts
      document.body.removeChild(script);
    };
  }, [onScriptLoad]); // Only re-run if onScriptLoad changes
};
