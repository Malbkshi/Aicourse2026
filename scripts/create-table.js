async function createTable() {
  const url = "https://eldicvcpdccekmuqquuj.supabase.co";
  const key = "sb_publishable_2uBtPE8LfNq4pkr-Oo9-uA_wlrb0BUE";

  // Try pg-meta API
  const endpoints = [
    "/pg/meta/tables",
    "/api/pg/tables",
    "/pg/tables",
  ];

  for (const ep of endpoints) {
    const res = await fetch(url + ep, {
      headers: {
        apikey: key,
        Authorization: "Bearer " + key,
      },
    });
    console.log(ep + ": " + res.status);
    if (res.ok) {
      const data = await res.text();
      console.log("  Response:", data.substring(0, 200));
    }
  }

  // Try to create table via REST API using schema parameter
  // First check what schemas are accessible
  const schemasRes = await fetch(url + "/rest/v1/", {
    headers: {
      apikey: key,
      Authorization: "Bearer " + key,
      Accept: "application/openapi+json",
    },
  });
  console.log("Root OpenAPI:", schemasRes.status);

  // Try a direct SQL query via the REST API
  const sqlRes = await fetch(url + "/rest/v1/rpc/", {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: "Bearer " + key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  console.log("RPC root:", sqlRes.status);
}

createTable().catch(console.error);
