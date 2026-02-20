import { Play, SkipBack, SkipForward } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { BorderBeam } from "@/registry/magicui/border-beam"

export function MusicPlayer() {
  return (
    <Card className="relative w-[350px] overflow-hidden">
      <CardHeader>
        <CardDescription>Stairway to Heaven - Led Zeppelin</CardDescription>
      </CardHeader>
      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-red-500 to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        borderWidth={2}
        className="from-transparent via-blue-500 to-transparent"
      />
    </Card>
  )
}
