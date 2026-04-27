import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

type Lang = "gr" | "en" | "fr";

const confirmationCopy: Record<Lang, {
  subject: string;
  heading: string;
  greeting: (name: string) => string;
  body: string;
  fallback: string;
  team: string;
}> = {
  gr: {
    subject: "Η εγγραφή σας ολοκληρώθηκε με επιτυχία! — Inn Academy",
    heading: "Η εγγραφή σας ολοκληρώθηκε με επιτυχία!",
    greeting: (name) => `Αγαπητέ/ή <strong>${name}</strong>,`,
    body: "Σας ευχαριστούμε για το ενδιαφέρον σας στο πρόγραμμα <strong>Diploma in Hotel Management</strong> της Inn Academy. Ένας εξειδικευμένος σύμβουλος σπουδών θα επικοινωνήσει μαζί σας εντός των επόμενων ωρών για να σας καθοδηγήσει στα επόμενα βήματα και να λύσει κάθε σας απορία.",
    fallback: "Εάν έχετε οποιαδήποτε άμεση ερώτηση, μπορείτε να επικοινωνήσετε μαζί μας στο",
    team: "Με εκτίμηση,<br/>Η Ομάδα της Inn Academy",
  },
  en: {
    subject: "Your registration is confirmed! — Inn Academy",
    heading: "Your registration is confirmed!",
    greeting: (name) => `Dear <strong>${name}</strong>,`,
    body: "Thank you for your interest in the <strong>Diploma in Hotel Management</strong> programme at Inn Academy. One of our dedicated study advisors will be in touch within the next few hours to guide you through the next steps and answer any questions you may have.",
    fallback: "If you have any immediate questions, feel free to reach us at",
    team: "Warm regards,<br/>The Inn Academy Team",
  },
  fr: {
    subject: "Votre inscription est confirmée ! — Inn Academy",
    heading: "Votre inscription est confirmée !",
    greeting: (name) => `Cher/Chère <strong>${name}</strong>,`,
    body: "Nous vous remercions de l'intérêt que vous portez au programme <strong>Diploma in Hotel Management</strong> de l'Inn Academy. Un conseiller pédagogique dédié vous contactera dans les prochaines heures afin de vous guider dans les prochaines étapes et de répondre à toutes vos questions.",
    fallback: "Si vous avez des questions immédiates, n'hésitez pas à nous contacter à",
    team: "Cordialement,<br/>L'équipe Inn Academy",
  },
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, honeypot, lang, trackingParams } = body;
  const trackingRows = trackingParams && typeof trackingParams === "object"
    ? Object.entries(trackingParams as Record<string, string>)
        .map(([k, v]) => `<tr>
          <td style="padding: 8px 0; color: #666;">${k}</td>
          <td style="padding: 8px 0; font-weight: bold; color: #e8622a;">${v}</td>
        </tr>`).join("")
    : "";
  const copy = confirmationCopy[(lang as Lang) ?? "gr"] ?? confirmationCopy.gr;

  // Honeypot check — bots fill this, humans don't
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  // Basic validation
  if (!name || !phone || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await Promise.all([
      // Internal notification to Inn Academy
      resend.emails.send({
        from: "Inn Academy <info@innacademy.gr>",
        to: ["info@innacademy.gr"],
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
              ${trackingRows}
            </table>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
            <p style="color: #94a3b8; font-size: 12px;">
              Αποστολή από innacademy.gr — ${new Date().toLocaleString("el-GR")}
            </p>
          </div>
        `,
      }),

      // Confirmation email to the applicant
      resend.emails.send({
        from: "Inn Academy <info@innacademy.gr>",
        to: [email],
        subject: copy.subject,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
            <div style="background: #0a7ea4; padding: 32px 40px; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">
                Inn Academy
              </h1>
              <p style="margin: 6px 0 0; color: #bfecff; font-size: 13px;">
                Diploma in Hotel Management
              </p>
            </div>

            <div style="background: #ffffff; padding: 36px 40px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
              <h2 style="margin: 0 0 16px; font-size: 20px; color: #0a7ea4;">
                ${copy.heading}
              </h2>

              <p style="margin: 0 0 20px; line-height: 1.7; font-size: 15px; color: #334155;">
                ${copy.greeting(name)}
              </p>

              <p style="margin: 0 0 20px; line-height: 1.7; font-size: 15px; color: #334155;">
                ${copy.body}
              </p>

              <div style="background: #f0f9ff; border-left: 4px solid #0a7ea4; padding: 16px 20px; border-radius: 4px; margin: 0 0 28px;">
                <p style="margin: 0; font-size: 14px; color: #475569; line-height: 1.6;">
                  ${copy.fallback}
                  <a href="mailto:info@innacademy.gr" style="color: #0a7ea4; text-decoration: none; font-weight: 600;">
                    info@innacademy.gr
                  </a>.
                </p>
              </div>

              <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.7;">
                ${copy.team}
              </p>
            </div>

            <p style="text-align: center; color: #94a3b8; font-size: 11px; margin: 20px 0 0;">
              © ${new Date().getFullYear()} Inn Academy · innacademy.gr
            </p>
          </div>
        `,
      }),
    ]);

    // Log to Google Sheet — fire and forget, never block the response
    const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (sheetUrl) {
      fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, lang, trackingParams }),
      }).catch(() => {});
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
