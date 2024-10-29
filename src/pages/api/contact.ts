// src/pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success?: boolean;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;

    // Basic validation (add more checks if needed)
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      // Process form submission (e.g., send an email or save to database)
      // For this example, just log the data
      console.log('Form data received:', { firstName, lastName, email, message });

      // Respond with success
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error processing the form:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Only allow POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
