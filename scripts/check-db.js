const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://eldicvcpdccekmuqquuj.supabase.co",
  "sb_publishable_2uBtPE8LfNq4pkr-Oo9-uA_wlrb0BUE"
);

async function check() {
  const tables = [
    "student_registrations",
    "trainer_registrations",
    "users",
    "profiles",
  ];

  for (const t of tables) {
    try {
      const { data, error, count } = await supabase
        .from(t)
        .select("*", { count: "estimated", head: true });
      if (error) {
        console.log(t + ": " + error.message + " (" + error.code + ")");
      } else {
        console.log("OK " + t + ": exists (~" + count + " rows)");
      }
    } catch (e) {
      console.log(t + ": " + e.message);
    }
  }
}

check().catch(console.error);
