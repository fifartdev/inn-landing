import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, honeypot } = body;

  // Honeypot check — bots fill this, humans don't
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  // Basic validation
  if (!name || !phone || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Inn Academy <info@innacademy.gr>",
      to: ["academy@innjobs.net", "info@innacademy.gr"],
      subject: `Νέα Αίτηση Συμμετοχής — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a7ea4;">Νέα Αίτηση Συμμετοχής</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px;">Ονοματεπώνυμο</td>
              <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Τηλέφωνο</td>
              <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">${email}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="color: #94a3b8; font-size: 12px;">
            Αποστολή από innacademy.gr — ${new Date().toLocaleString("el-GR")}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
