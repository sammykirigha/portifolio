import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "../../../components/EmailComponent";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("the request body", body);
  const { message, email, name, subject } = body;

  // Check if the required fields are present
  if (!message || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // resend declaration with API key as parameter
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: email, 
      to: "dkirigha18@gmail.com", 
      subject,
      react: EmailTemplate({ email, message, subject, name}), 
    });

    if (error) {
      return NextResponse.json(
        { message: "Email sending failed", error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}