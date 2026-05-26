import type { VercelRequest, VercelResponse } from "@vercel/node";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const headers = {
  "Content-Type": "application/json",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
        console.error("visitors api error: missing Supabase configuration");
        return res.status(200).json({ count: null });
      }

      const { visitor_id } = req.body;

      if (!visitor_id) {
        return res.status(200).json({ count: null });
      }

      const authHeaders = {
        ...headers,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        apiKey: SUPABASE_SERVICE_ROLE_KEY,
      };

      const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/visitors`, {
        method: "POST",
        headers: {
          ...authHeaders,
          Prefer: "resolution=ignore-duplicates",
        },
        body: JSON.stringify({ visitor_id }),
      });

      if (!insertRes.ok && insertRes.status !== 409) {
        console.error(
          "visitors api error: failed to record visitor",
          await insertRes.text(),
        );
      }

      const countRes = await fetch(
        `${SUPABASE_URL}/rest/v1/visitors?select=count`,
        {
          headers: {
            ...authHeaders,
            Prefer: "count=exact",
          },
        },
      );

      if (!countRes.ok) {
        console.error(
          "visitors api error: failed to read visitor count",
          await countRes.text(),
        );
        return res.status(200).json({ count: null });
      }

      const countHeader = countRes.headers.get("content-range");
      const count = Number(countHeader?.split("/")[1] ?? 0);

      return res.status(200).json({ count });
    } catch (error) {
      console.error("visitors api error:", error);
      return res.status(200).json({ count: null });
    }
  }
  return res.status(405).json({ error: "Method not allowed" });
}
