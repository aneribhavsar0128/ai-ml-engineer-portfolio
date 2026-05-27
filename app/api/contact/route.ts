import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "aneribhavsar0128@gmail.com";

    const referer = request.headers.get("referer") || "http://localhost:3000";
    const origin = request.headers.get("origin") || "http://localhost:3000";

    // Send email using FormSubmit's free, zero-config email forwarder
    const response = await fetch(`https://formsubmit.co/ajax/${receiverEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Referer": referer,
        "Origin": origin
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New Portfolio Message from ${name}`
      })
    });

    const result = await response.json();

    if (response.ok && (result.success === "true" || result.success === true)) {
      return NextResponse.json({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      });
    } else {
      console.error("FormSubmit error:", result);
      return NextResponse.json(
        { error: result.message || "Failed to send message. Please try again." },
        { status: response.status || 400 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
