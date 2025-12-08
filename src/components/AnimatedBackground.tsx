import { useEffect, useRef } from "react";

export const AnimatedBackground = () => {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    let currentScroll = 0;
    
    const handleScroll = () => {
      const newScroll = window.pageYOffset;
      currentScroll = newScroll;
      
      blobRefs.current.forEach((blob, index) => {
        if (!blob) return;
        
        const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 40;
        const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40;
        
        blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        blob.style.transition = "transform 1.4s ease-out";
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0">
        {/* Purple blob - top left */}
        <div
          ref={(ref) => { blobRefs.current[0] = ref; }}
          className="absolute top-0 -left-4 w-72 h-72 md:w-96 md:h-96 bg-purple-500 rounded-full filter blur-[128px] opacity-40 animate-blob"
        />
        {/* Indigo blob - top right */}
        <div
          ref={(ref) => { blobRefs.current[1] = ref; }}
          className="absolute top-20 right-20 w-72 h-72 md:w-96 md:h-96 bg-indigo-500 rounded-full filter blur-[128px] opacity-30 animate-blob animation-delay-2000"
        />
        {/* Indigo blob - bottom right */}
        <div
          ref={(ref) => { blobRefs.current[2] = ref; }}
          className="absolute bottom-0 right-20 w-72 h-72 md:w-96 md:h-96 bg-indigo-600 rounded-full filter blur-[128px] opacity-35 animate-blob animation-delay-4000"
        />
        {/* Purple blob - bottom left */}
        <div
          ref={(ref) => { blobRefs.current[3] = ref; }}
          className="absolute -bottom-20 left-20 w-72 h-72 md:w-96 md:h-96 bg-purple-600 rounded-full filter blur-[128px] opacity-40 animate-blob"
        />
      </div>
    </div>
  );
};
