// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: any[],
  paginations: any,
}|{name:string}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // check dk k phải get thì not support
  if(req.method !== 'GET') {
  return res.status(404).json({name :'method not support'})
  }
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1_limit=10')
  const responseJSON = await response.json()
  res.status(200).json(responseJSON)
}
