import { Button } from "./ui/button"

export default function Hero() {
  return (
    <div className="pt-48 md:px-0 px-8 flex flex-col items-center justify-center gap-4">
      <div className="text-center text-neutral-900 dark:text-neutral-50 text-3xl md:text-4xl font-bold">
        AI Image Generator.
      </div>
      <div className="text-xs md:text-sm text-center max-w-[35em] text-neutral-700 dark:text-neutral-300 font-medium">
        AI art app that turns your words into images using OpenAI's DALL-E.
      </div>
      <div className="pt-8"></div>
    </div>
  )
}
