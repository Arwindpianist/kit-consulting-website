import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import type { ContactFormData } from "@/lib/types"

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Check if email credentials are configured
    const zohoUser = process.env.ZOHO_USER
    const zohoPass = process.env.ZOHO_PASS

    if (!zohoUser || !zohoPass) {
      // If credentials not configured, log and return success (for testing/development)
      console.log("Contact form submission (email not configured):", body)
      return NextResponse.json({ 
        success: true, 
        message: "Message received successfully",
        dev_mode: true 
      }, { status: 200 })
    }

    // Configure Zoho SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: zohoUser,
        pass: zohoPass,
      },
    })

    // Email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #003366 0%, #0066cc 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f5f7fa; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #003366; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 4px; border-left: 3px solid #0066cc; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">KIT Consulting Website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${body.name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${body.email}</div>
              </div>
              <div class="field">
                <span class="label">Company:</span>
                <div class="value">${body.company || 'Not provided'}</div>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="value">${body.message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="footer">
                <p>This message was sent from the KIT Consulting website contact form.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email
    await transporter.sendMail({
      from: `"KIT Consulting Website" <${zohoUser}>`,
      to: "info@kitengineeringconsulting.net",
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.name}`,
      html: emailHtml,
    })

    return NextResponse.json({ 
      success: true, 
      message: "Message sent successfully" 
    }, { status: 200 })
    
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ 
      error: "Failed to send message. Please try again or contact us directly via email." 
    }, { status: 500 })
  }
}
