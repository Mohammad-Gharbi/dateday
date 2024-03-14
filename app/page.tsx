import Hero from "@/components/Hero"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <Hero />
      <div className="w-[28rem] flex flex-row justify-center items-center gap-4">
        <Input placeholder="eg. Van Gough inspired portrait of a dog" />
        <Button>Generate </Button>
      </div>
      <div className="w-[28rem]">
        <img className="rounded-md" src="/dog.jpg" alt="" />
      </div>
    </div>
  )
}
