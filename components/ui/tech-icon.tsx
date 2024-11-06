
import StackIcon from "tech-stack-icons";
import { SiExpress } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiLangchain } from "react-icons/si";
import { SiDbeaver } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";

interface TechIconProps {
  icon: string;
  name: string;
}

const SiIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "expressjs":
      return <SiExpress width={24} height={24}/>
    case "tensorflow":
      return <SiTensorflow width={24} height={24}/>
    case "langchain":
      return <SiLangchain width={24} height={24}/>
    case "dbeaver":
      return <SiDbeaver width={24} height={24}/>
    case "numpy":
      return <SiNumpy width={24} height={24}/>
    case "pandas":
      return <SiPandas width={24} height={24}/>
    default:
      return <SiExpress width={24} height={24}/>
  }
}

const SI_ICON = ["expressjs", "tensorflow", "langchain", "dbeaver", "numpy", "pandas"];

export const TechIcon = ({ icon, name }: TechIconProps) => {
  return (
    <div className="h-[36px] flex gap-2 items-center bg-white px-4 py-2 rounded-lg border-[1px] border-accent shadow-md border-black font-medium">
      {SI_ICON.includes(icon)
        ? <SiIcon icon={icon}/>
        : <StackIcon name={icon} className="w-[20px] h-[20px]"/>
        } 
      <div>
        {name}
      </div>
    </div>
  )
}