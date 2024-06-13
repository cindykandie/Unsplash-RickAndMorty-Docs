import axios from 'axios';

export default async function handler(req, res) {
  const { query } = req;
  const { data } = await axios.get('https://rickandmortyapi.com/api/character', {
    params: query
  });
  res.status(200).json(data);
}
