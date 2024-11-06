
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TechIcon } from "@/components/ui/tech-icon"

const WEB_STACK = [
  { icon: "webpack", name: "Webpack" },
  { icon: "sass", name: "Sass" },
  { icon: "nodejs", name: "Node" },
  { icon: "reactjs", name: "React" },
  { icon: "typescript", name: "TypeScript" },
  { icon: "nextjs2", name: "Next" },
  { icon: "tailwindcss", name: "Tailwind" },
  { icon: "jest", name: "Jest" },
  { icon: "aws", name: "AWS" },
  { icon: "docker", name: "Docker" },
  { icon: "expressjs", name: "Express" },
  { icon: "mysql", name: "MySQL" },
  { icon: "postgresql", name: "Postgres" },
  { icon: "dbeaver", name: "DBeaver" },
  { icon: "postman", name: "Postman" },
]

export const WebCard = () => {
  return (
    <Card className="w-full bg-muted">
      <CardHeader className="pb-4">
        <CardTitle className="text-[19px] leading-4">
          -- Web Development --
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