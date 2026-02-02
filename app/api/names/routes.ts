import data from "@/app/api/db";

export async function GET() {
    console.log("Fetching all names");
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const { name } = await request.json();
  const newId = data.length ? Math.max(...data.map((item) => item.id)) + 1 : 1;
  const newEntry = { id: newId, name };
  data.push(newEntry);
  return new Response(JSON.stringify(newEntry), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}