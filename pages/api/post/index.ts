import { prisma } from '@/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const allPosts = await prisma.post.findMany();
      return res.status(200).json(allPosts);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else if (req.method === 'POST') {
    const title: string = req.body.title;

    try {
      const newPost = await prisma.post.create({
        data: { title },
      });

      return res.status(200).json(newPost);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating post!' });
    }
  }
}
