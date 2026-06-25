import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Server-side validation
    if (!name || name.trim().length < 2)
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    if (!subject || subject.trim().length < 5)
      return NextResponse.json({ error: "Subject is required." }, { status: 400 });
    if (!message || message.trim().length < 20)
      return NextResponse.json({ error: "Message must be at least 20 characters." }, { status: 400 });

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    // Hardcoded recipient — all contact form emails go here
    const TO_EMAIL = "awaiskhalil476@gmail.com";

    if (!RESEND_API_KEY || RESEND_API_KEY === "re_your_api_key_here") {
      // Dev mode — no API key yet, just log
      console.log("📧 [DEV] Contact form submission:", { name, email, subject, message });
      console.log(`📬 Would send to: ${TO_EMAIL}`);
      return NextResponse.json({ success: true, dev: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [TO_EMAIL],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0A0F1E;font-family:'Segoe UI',system-ui,sans-serif;">
  <div style="max-width:580px;margin:0 auto;padding:32px 16px;">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#6366F1,#8B5CF6);border-radius:16px 16px 0 0;padding:28px 32px;text-align:center;">
      <div style="font-size:32px;margin-bottom:8px;">📬</div>
      <h1 style="margin:0;color:white;font-size:22px;font-weight:700;letter-spacing:-0.3px;">New Contact Message</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">From your portfolio website</p>
    </div>

    <!-- Body -->
    <div style="background:#0F172A;border:1px solid rgba(255,255,255,0.07);border-top:none;border-radius:0 0 16px 16px;padding:28px 32px;">
      
      <!-- Sender info -->
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
            <span style="color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;display:block;margin-bottom:3px;">From</span>
            <span style="color:#F8FAFC;font-size:15px;font-weight:600;">${name}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
            <span style="color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;display:block;margin-bottom:3px;">Reply To</span>
            <a href="mailto:${email}" style="color:#22D3EE;font-size:14px;text-decoration:none;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0;">
            <span style="color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;display:block;margin-bottom:3px;">Subject</span>
            <span style="color:#F8FAFC;font-size:14px;">${subject}</span>
          </td>
        </tr>
      </table>

      <!-- Message -->
      <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:12px;padding:20px;">
        <p style="color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 10px;">Message</p>
        <p style="color:#CBD5E1;font-size:14px;line-height:1.8;margin:0;white-space:pre-wrap;">${message}</p>
      </div>

      <!-- Reply button -->
      <div style="text-align:center;margin-top:24px;">
        <a href="mailto:${email}?subject=Re: ${subject}" 
           style="display:inline-block;background:linear-gradient(135deg,#6366F1,#8B5CF6);color:white;text-decoration:none;padding:12px 28px;border-radius:9px;font-weight:600;font-size:14px;letter-spacing:0.02em;">
          Reply to ${name} →
        </a>
      </div>

      <!-- Footer -->
      <p style="color:#334155;font-size:11px;text-align:center;margin:24px 0 0;border-top:1px solid rgba(255,255,255,0.05);padding-top:20px;">
        Sent on ${new Date().toLocaleString("en-US", { weekday:"long", year:"numeric", month:"long", day:"numeric", hour:"2-digit", minute:"2-digit" })}
        <br>via your portfolio contact form
      </p>
    </div>
  </div>
</body>
</html>
        `,
        text: `New portfolio contact message\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nSent from your portfolio at ${new Date().toLocaleString()}`,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API error:", errText);
      return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error. Please try again later." }, { status: 500 });
  }
}
