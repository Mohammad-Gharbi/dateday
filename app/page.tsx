"use client"

import Hero from "@/components/Hero"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { RxReload } from "react-icons/rx"
import { useState } from "react"

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [image, setImage] = useState<string>("/dog.jpg")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleButtonClick = async () => {
    setLoading(true)
    setImage("")

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: inputValue }),
      })

      const { data: imageUrl } = await response.json()
      setImage(imageUrl)
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <Hero />
      <div className="w-[28rem] flex flex-row justify-center items-center gap-4">
        <Input
          placeholder="eg. Van Gough inspired portrait of a dog"
          value={inputValue}
          onChange={handleInputChange}
        />
        {loading ? (
          <Button disabled>
            <RxReload className="mr-2 h-4 w-4 animate-spin" />
            Generating
          </Button>
        ) : (
          <Button onClick={handleButtonClick}>Generate</Button>
        )}
      </div>
      <div className="w-[28rem]">
        {loading ? (
          <Skeleton className="w-[28rem] h-[28rem] rounded-md" />
        ) : (
          <img className="rounded-md" src={image} alt="generated image" />
        )}
      </div>
    </div>
  )
}
