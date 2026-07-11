const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://eldicvcpdccekmuqquuj.supabase.co",
  "sb_publishable_2uBtPE8LfNq4pkr-Oo9-uA_wlrb0BUE"
);

async function test() {
  // Try insert into student_registrations
  const { data, error } = await supabase.from("student_registrations").insert({
    full_name: "اختبار النظام",
    email: "test@example.com",
    phone: "0912345678",
    level: "مبتدئ",
    goal: "اختبار",
    message: "هذا اختبار",
    assessment_score: 6,
    assessment_details: { hasPC: 1, cpuGpuDiff: 1, aiLevel: 1, aiTools: 2, readiness: 1 },
  }).select();

  if (error) {
    console.log("Insert error:", error.message, error.code, error.details);
  } else {
    console.log("Inserted successfully:", JSON.stringify(data));
    // Cleanup
    await supabase.from("student_registrations").delete().eq("email", "test@example.com");
    console.log("Cleaned up test data");
  }
}

test().catch(console.error);
