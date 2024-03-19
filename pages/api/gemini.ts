import type { NextApiRequest, NextApiResponse } from "next"
import { GoogleGenerativeAI } from "@google/generative-ai"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt } = req.body

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
  const model = genAI.getGenerativeModel({ model: "gemini-pro" })

  const result = await model.generateContent(prompt)
  const text = result.response.text()

  try {
    res.status(200).json({ data: { text: text } })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Text generation failed." })
  }
}
