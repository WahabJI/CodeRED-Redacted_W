// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//Learn about Next.js API endpoints: https://nextjs.org/learn/basics/api-routes/creating-api-routes#:~:text=Creating%20a%20simple%20API%20endpoint
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

//Serverless Functions (also known as Lambdas).
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
