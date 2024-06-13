import axios from 'axios';

export default async function handler(req, res) {
  const { query } = req;
  const { data } = await axios.get('https://api.unsplash.com/photos', {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
    },
    params: query
  });
  res.status(200).json(data);
}
