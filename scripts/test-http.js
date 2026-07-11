async function test() {
  const url = "https://eldicvcpdccekmuqquuj.supabase.co";
  const key = "sb_publishable_2uBtPE8LfNq4pkr-Oo9-uA_wlrb0BUE";

  // Test 1: HEAD request
  const headRes = await fetch(url + "/rest/v1/student_registrations", {
    method: "HEAD",
    headers: {
      apikey: key,
      Authorization: "Bearer " + key,
      Prefer: "count=exact",
    },
  });
  console.log("HEAD status:", headRes.status);

  // Test 2: GET with head Prefer
  const getHeadRes = await fetch(url + "/rest/v1/student_registrations", {
    method: "GET",
    headers: {
      apikey: key,
      Authorization: "Bearer " + key,
      Prefer: "count=exact,head=true",
    },
  });
  console.log("GET (head=true) status:", getHeadRes.status);

  // Test 3: Regular GET
  const getRes = await fetch(url + "/rest/v1/student_registrations?limit=1", {
    method: "GET",
    headers: {
      apikey: key,
      Authorization: "Bearer " + key,
    },
  });
  console.log("GET status:", getRes.status);
  if (getRes.status !== 200) {
    const txt = await getRes.text();
    console.log("GET body:", txt.substring(0, 300));
  }

  // Test 4: INSERT
  const insRes = await fetch(url + "/rest/v1/student_registrations", {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: "Bearer " + key,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      full_name: "test",
      email: "t@t.com",
      phone: "0912345678",
      level: "test",
      goal: "test",
    }),
  });
  console.log("POST status:", insRes.status);
  if (insRes.status !== 201) {
    const txt = await insRes.text();
    console.log("POST body:", txt.substring(0, 300));
  } else {
    const data = await insRes.json();
    console.log("Inserted:", JSON.stringify(data));
  }
}

test().catch(console.error);
