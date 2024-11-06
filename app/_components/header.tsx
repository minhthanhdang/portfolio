import { Button } from "@/components/ui/button"
import Link from "next/link"


export const Header = () => {

  return (
    <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-2 justify-between items-center rounded-xl px-10 gap-[40px]">
      <div className="relative col-span-1 h-full w-full flex flex-col justify-start items-start font-medium text-[30px]">
        <div>
          Hi, I'm <span className="font-bold"> Minh Thanh Dang</span> --- Junior Software Developer and Engineer.
        </div>
        <div className="px-4 flex gap-3 items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_5px_rgba(34,197,94,0.5)]"></div>
          <div className="text-[14px]">
            I'm open to work!
          </div>
        </div>
        <div className="flex gap-2">

        </div>
      </div>
      <div className="relative col-span-1 h-full w-full flex flex-col gap-4 justify-center items-end">
        <div className="relative font-medium text-[20px] text-end leading-6">
          Design & Build awesome full-stack applications with me!
        </div>
        <div className="relative flex gap-4">
          <Button 
            className="h-[48px] rounded-3xl px-6 text-[16px]"
            onClick={()=>{
              window.open("https://www.linkedin.com/in/mtddev/", "_blank")
            }} 
          >
            Contact me!
          </Button>
          <Button variant="secondary" className="h-[48px] rounded-3xl px-6 text-[16px] shadow-md border-[1px]">
            See my projects
          </Button>
        </div>

      </div>
    </div>
  )
}