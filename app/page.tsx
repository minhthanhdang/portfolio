"use client"
import { Navbar } from "./_components/navbar";

import { Header } from "./_components/header";
import { WebCard } from "./_components/web-card";
import { AICard } from "./_components/ai-card";
import { ProjectSection } from "./_components/project-section";
import { useRef } from "react";


export default function Home() {

  const projectRef = useRef<HTMLDivElement | null>(null)
  
  return (
    <div className="relative w-[100vw] flex flex-col gap-6 items-center px-10 py-10">
      <div className="relative w-[90vw] max-w-[1280px]">
        <Navbar projectRef={projectRef}/>
      </div>
      <div className="relative w-[90vw] max-w-[1280px] mt-[40px]">
        <Header />
      </div>

      <div className="relative w-full border-2 border-b-black mt-[40px]">

      </div>

      <div className="relative grid grid-cols-3 gap-x-10 w-[90vw] max-w-[1280px] mt-[30px] px-10">
        
        <div className="col-span-2 flex flex-col order-1" ref={projectRef}>
          <ProjectSection />
        </div>
        <div className="col-span-1 flex flex-col gap-6 order-2">
          <div className="relative w-full flex flex-col items-center">
            <WebCard />
          </div>
          <div className="relative w-full flex flex-col items-center">
            <AICard />
          </div>
        </div>
      </div>
    </div>
  );
}
