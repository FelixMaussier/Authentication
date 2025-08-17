"use client";
import "tailwindcss";
import Iridescence from "@/components/reactbits/Iridescence";
import InteractiveFormWrapper from "@/components/Forms/InteractiveFormWrapper";

export default function SpaceLanding() {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Iridescence
            color={[0.4, 0.1, 0.5]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
        <InteractiveFormWrapper />
      </div>
    </>
  );
}
