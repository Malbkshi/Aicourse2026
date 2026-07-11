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
