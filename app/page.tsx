"use client"

import Hero from "@/components/Hero"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [DD, setDD] = useState<string | undefined>("25")
  const [MM, setMM] = useState<string | undefined>("11")
  const [YYYY, setYYYY] = useState<string | undefined>("2024")
  const [day, setDay] = useState<string | undefined>()

  useEffect(() => {
    const date = new Date(`${YYYY + "-" + MM + "-" + DD}`)
    const dayOfWeek = date?.getDay()

    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]

    setDay(weekdays[dayOfWeek ? dayOfWeek : 0])
  }, [DD, MM, YYYY])

  const handleChange = (e: any, type: string) => {
    const value = e.target.value

    switch (type) {
      case "DD":
        setDD(value)
        break
      case "MM":
        setMM(value)
        break
      case "YYYY":
        setYYYY(value)
        break
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <Hero />
      <div className="w-72 md:w-[24rem] flex flex-row justify-center items-center gap-4">
        <Input
          className="w-12 md:w-[60%]"
          type="text"
          placeholder="DD"
          value={DD}
          onChange={(e) => handleChange(e, "DD")}
        />
        <Input
          className="w-12 md:w-[60%]"
          type="text"
          placeholder="MM"
          value={MM}
          onChange={(e) => handleChange(e, "MM")}
        />
        <Input
          className="w-24 md:w-[100%]"
          type="text"
          placeholder="YYYY"
          value={YYYY}
          onChange={(e) => handleChange(e, "YYYY")}
        />
      </div>
      <div className="w-72 md:w-[24rem]">
        <div className="flex flex-col space-y-3 items-center">
          <div className="rounded-md bg-neutral-100 dark:bg-neutral-800 w-72 md:w-[24rem] h-fit p-4 text-center text-2xl font-bold">
            {day}
          </div>
        </div>
      </div>
    </div>
  )
}
