export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).json({ error: 'Parâmetros obrigatórios' });
  res.status(200).json({ result: parseFloat(a) - parseFloat(b) });
}
