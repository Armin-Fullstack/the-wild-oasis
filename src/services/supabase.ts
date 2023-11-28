import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rwtrcyhuingclzghnqgz.supabase.co";
const supabaseKey =
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3dHJjeWh1aW5nY2x6Z2hucWd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExNzA5NjksImV4cCI6MjAxNjc0Njk2OX0
    .X5R92JCgrXh6Ab9ZwVOtMS2Ho8UnNxFFjJA7avP0LNk;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
