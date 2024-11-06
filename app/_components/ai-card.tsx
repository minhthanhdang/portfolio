
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TechIcon } from "@/components/ui/tech-icon"

const WEB_STACK = [
  { icon: "python", name: "Python" },
  { icon: "numpy", name: "NumPy" },
  { icon: "pandas", name: "Pandas" },
  { icon: "pytorch", name: "PyTorch" },
  { icon: "tensorflow", name: "TensorFlow" },
  { icon: "langchain", name: "LangChain" },
]

export const AICard = () => {
  return (
    <Card className="w-full bg-muted">
      <CardHeader className="pb-4">
        <CardTitle className="text-[19px] leading-4">
          -- Data & ML/AI --
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-x-4 gap-y-3 flex-wrap">
          {WEB_STACK.map((stack) => (
            <TechIcon key={stack.name} icon={stack.icon} name={stack.name} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}