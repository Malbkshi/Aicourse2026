const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://eldicvcpdccekmuqquuj.supabase.co";
const anonKey = "sb_publishable_2uBtPE8LfNq4pkr-Oo9-uA_wlrb0BUE";

async function setup() {
  // Try using the Supabase Management API if a token exists
  const token = process.env.SUPABASE_ACCESS_TOKEN;

  if (!token) {
    console.log(`
❌ SUPABASE_ACCESS_TOKEN not set.

To create the table, please run this SQL in your Supabase Dashboard SQL Editor:

────────────────────────────────────────────────────────────────
-- Create student_registrations table
CREATE TABLE IF NOT EXISTS student_registrations (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  level TEXT NOT NULL,
  goal TEXT NOT NULL,
  message TEXT,
  assessment_score INT DEFAULT 0,
  assessment_details JSONB DEFAULT '{}'::jsonb
);

-- Enable RLS
ALTER TABLE student_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anon inserts and selects
CREATE POLICY "Enable insert for anon" ON student_registrations
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Enable select for anon" ON student_registrations
  FOR SELECT TO anon
  USING (true);
────────────────────────────────────────────────────────────────

How to run:
1. Go to https://supabase.com/dashboard/project/eldicvcpdccekmuqquuj
2. Open the "SQL Editor" tab
3. Paste the SQL above
4. Click "Run"
`);
    return;
  }

  const sql = `
CREATE TABLE IF NOT EXISTS student_registrations (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  level TEXT NOT NULL,
  goal TEXT NOT NULL,
  message TEXT,
  assessment_score INT DEFAULT 0,
  assessment_details JSONB DEFAULT '{}'::jsonb
);

ALTER TABLE student_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for anon" ON student_registrations
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Enable select for anon" ON student_registrations
  FOR SELECT TO anon
  USING (true);
`;

  const res = await fetch(
    `https://api.supabase.com/v1/projects/eldicvcpdccekmuqquuj/database/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: sql }),
    }
  );

  if (res.ok) {
    console.log("✅ Table created successfully!");
  } else {
    const text = await res.text();
    console.log("❌ Failed:", res.status, text.substring(0, 500));
  }
}

setup().catch(console.error);
