export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests are allowed' });
  }

  // Dummy response to simulate success
  res.status(200).json({
    analysis: 'This is a simulated response. API is working correctly!'
  });
}
