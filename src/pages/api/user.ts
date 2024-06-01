import { NextApiRequest, NextApiResponse } from 'next';

let userData = {
  id: 1,
  name: 'John Gadiano',
  email: 'johngadianooo@gmail.com',
  bio: 'Making every day count.',
  post: [
    {
      title: "Post 1",
      content: "A MARKOV CHAIN ANALYSIS AND REGRESSION MODELING OF JASMINE RICE MARKETING IN THE MUNICIPALITY OF ABORLAN IN PALAWAN"
    },
    {
      title: "Post 2",
      content: "TIBUDAN, JOSHUA SERGE G,DELICIAS, ALDRIN T, JANORAS, KENNETH CLIFFORD M, GADIANO, JOHN P"
    }
  ]
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(userData);
  } else if (req.method === 'PUT') {
    const { id, name, email, bio, post } = req.body;
    if (!id || !name || !email || !bio || !post) {
      res.status(400).json({ error: "Missing required fields" });
    } else {
      userData = { id, name, email, bio, post };
      res.status(200).json(userData);
    }
  } else if (req.method === 'POST') {
    const { name, email, bio, post } = req.body;
    if (!name || !email || !bio || !post) {
      res.status(400).json({ error: "Missing required fields" });
    } else {
      const id = userData.id + 1;
      userData = { id, name, email, bio, post };
      res.status(201).json(userData);
    }
  } else if (req.method === 'DELETE') {
    userData = {
      id: 1,
      name: '',
      email: '',
      bio: '',
      post: []
    };
    res.status(200).end('User data deleted successfully');
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
