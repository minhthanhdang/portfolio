import { Button } from "@/components/ui/button"
import React from "react"

interface NavbarProps {
  projectRef: React.RefObject<HTMLDivElement>
}

export const Navbar = ({
  projectRef
}: NavbarProps) => {

  const openResume = () => {
    window.open("/Resume.pdf", "_blank")
  }

  return (
    <div className="relative w-full h-[64px] flex justify-between items-center  rounded-xl px-10">
      <div className="flex items-center font-bold text-[30px]">
   
        MTD-DEV
   
      </div>
      <div className="flex gap-8 items-center">
        <Button 
          variant="ghost" className="text-[16px]"
          onClick={()=>{
            window.open("https://www.linkedin.com/in/mtddev/", "_blank")
          }} 
        >
          Contact
        </Button>
        <Button variant="ghost" className="text-[16px]" onClick={()=>{
          projectRef.current?.scrollIntoView({behavior: 'smooth'})
        }}>
          Projects
        </Button>
        <Button 
          className="h-[48px] rounded-3xl px-6 text-[16px]" 
          onClick={openResume}
        >
          Resume
        </Button>
      </div>
    </div>
  )
}