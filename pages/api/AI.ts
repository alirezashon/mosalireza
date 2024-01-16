import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  imageUrl: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const prompt = 'Generate an image of a snake.';
    const response = await openai.completions.create({
      engine: 'text-davinci-003', // Use the appropriate engine
      prompt,
      max_tokens: 150,
      model: 'text-davinci-003', // Specify the model you want to use
    });

    const imageUrl = response.data.choices[0].text.trim();
    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
