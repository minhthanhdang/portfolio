
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ProjectCardProps = {
  title: string,
  description1: string,
  description2: string,
  details: string[],
  link: string | null,
  date: string,
}

export const ProjectCard = ({
  title,
  description1,
  description2,
  details,
  link,
  date
}: ProjectCardProps) => {
  return (
    <Card className="w-full bg-muted">
      <CardHeader className="pb-4">
        <CardTitle className="text-[19px] leading-4 flex justify-between">
          <div>
            {title}
          </div>
          <div>
            {date}
          </div>
        </CardTitle>
        <CardDescription className="flex justify-between">
          <div>
            {description1}
          </div>
          <div>
            {description2}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          {details.map((detail, index) => (
            <div key={index} className="text-sm text-muted-foreground">
              {detail}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}