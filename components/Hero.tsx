import { Button } from "./ui/button"

export default function Hero() {
  return (
    <div className="pt-24 md:px-0 px-8 flex flex-col items-center justify-center gap-4">
      <div className="text-center text-neutral-900 dark:text-neutral-50 text-3xl md:text-4xl font-bold">
        DateDay.
      </div>
      <div className="text-xs md:text-sm text-center max-w-[36em] text-neutral-700 dark:text-neutral-300 font-medium">
        Easily Determine Weekdays Based On a Given Date.
      </div>
    </div>
  )
}
