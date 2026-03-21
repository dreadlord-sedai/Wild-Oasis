import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oqvidrrbwhdjrcofwvmq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xdmlkcnJid2hkanJjb2Z3dm1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMDYwMjcsImV4cCI6MjA4OTU4MjAyN30.coqoeXm8repbMiRrulbQJ3fS9A5QjwueW2SqXUo90IQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
