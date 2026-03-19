import { createClient } from '@supabase/supabase-js';

const supabaseUrl =  'https://vngglknaprzwerkodnto.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuZ2dsa25hcHJ6d2Vya29kbnRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NTE3NTIsImV4cCI6MjA4OTQyNzc1Mn0.5w_lobzLfpq9Tc8VkzRVP-sAk7_AMHk4AeXdhuvQneA';
export const supabase = createClient(supabaseUrl, supabaseKey);
