
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vngglknaprzwerkodnto.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuZ2dsa25hcHJ6d2Vya29kbnRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NTE3NTIsImV4cCI6MjA4OTQyNzc1Mn0.5w_lobzLfpq9Tc8VkzRVP-sAk7_AMHk4AeXdhuvQneA';
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.use(express.json());
app.use(cors());

// Admin registration endpoint
app.post('/admin-register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }
  // Check if admin already exists
  const { data: existing, error: existingError } = await supabase
    .from('admins')
    .select('id')
    .eq('email', email)
    .single();
  if (existing) {
    return res.status(409).json({ error: 'Admin already exists.' });
  }
  // Hash password
  const saltRounds = 10;
  const password_hash = await bcrypt.hash(password, saltRounds);
  // Insert new admin
  const { error: insertError } = await supabase
    .from('admins')
    .insert([{ email, password_hash }]);
  if (insertError) {
    return res.status(500).json({ error: 'Failed to create admin.' });
  }
  res.json({ success: true });
});

app.post('/admin-login', async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase
    .from('admins')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !data) return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, data.password_hash);

  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  // You can add JWT or session logic here
  res.json({ success: true });
});

app.listen(3001, () => {
  console.log('Backend running on port 3001');
});
