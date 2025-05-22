import formidable from 'formidable'
import fs from 'fs'

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' })
  }

  const form = new formidable.IncomingForm({ keepExtensions: true })

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'Error parsing file' })
    }

    const labType = fields.labType?.[0] || ''
    const notes = fields.notes?.[0] || ''
    const fileName = files.file?.[0]?.originalFilename || 'no-file'

    // Simulated GPT response (placeholder)
    const fakeResponse = `
      Simulated analysis:
      Lab Type: ${labType}
      Notes: ${notes}
      File: ${fileName}
      This is a placeholder response until OpenAI integration is added.
    `

    res.status(200).json({ analysis: fakeResponse })
  })
}