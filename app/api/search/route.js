import { client } from "../../../lib/sanity";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";

  if (!q || q.length < 2) {
    return new Response(JSON.stringify([]), { status: 200 });
  }

  const results = await client.fetch(
    `
    *[_type=="post" && (
      title match $q || 
      excerpt match $q || 
      category match $q || 
      $q in tags[]
    )][0...5]{
      title,
      "slug": slug.current,
      category
    }
  `,
    { q: `*${q}*` }
  );

  return new Response(JSON.stringify(results), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
