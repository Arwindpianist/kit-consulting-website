import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      company,
      projectType,
      rating,
      testimonial,
      permissionToPublish,
    } = body

    // Validate required fields
    if (!name || !company || !projectType || !rating || !testimonial) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    })

    // Generate star rating display
    const starDisplay = "⭐".repeat(rating) + "☆".repeat(5 - rating)

    // Create email content
    const mailOptions = {
      from: process.env.ZOHO_USER,
      to: "info@kitengineeringconsulting.net",
      subject: `TESTIMONIAL - ${company} - ${name} (${rating}/5 stars)`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
              }
              .header {
                background: linear-gradient(135deg, #003366 0%, #0066cc 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border: 1px solid #e0e0e0;
              }
              .section {
                background: white;
                padding: 20px;
                margin-bottom: 20px;
                border-radius: 8px;
                border-left: 4px solid #0066cc;
              }
              .label {
                font-weight: bold;
                color: #003366;
                margin-bottom: 5px;
              }
              .value {
                color: #666;
                margin-bottom: 15px;
              }
              .rating {
                font-size: 24px;
                margin: 10px 0;
              }
              .testimonial-box {
                background: #fff;
                padding: 20px;
                border-radius: 8px;
                border: 2px solid #0066cc;
                font-style: italic;
                margin: 20px 0;
              }
              .permission-badge {
                display: inline-block;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
                margin-top: 10px;
              }
              .permission-yes {
                background: #10b981;
                color: white;
              }
              .permission-no {
                background: #ef4444;
                color: white;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #999;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">⭐ New Testimonial Received</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Client Feedback Submission</p>
            </div>
            
            <div class="content">
              <!-- Rating Section -->
              <div class="section">
                <div class="label">Overall Rating</div>
                <div class="rating">${starDisplay} (${rating}/5)</div>
              </div>

              <!-- Client Information -->
              <div class="section">
                <h2 style="color: #003366; margin-top: 0;">Client Information</h2>
                <div class="label">Name</div>
                <div class="value">${name}</div>
                
                <div class="label">Company</div>
                <div class="value">${company}</div>
                
                <div class="label">Service Type</div>
                <div class="value">${projectType}</div>
              </div>

              <!-- Testimonial Content -->
              <div class="section">
                <h2 style="color: #003366; margin-top: 0;">Testimonial</h2>
                <div class="testimonial-box">
                  "${testimonial}"
                </div>
              </div>

              <!-- Permission Status -->
              <div class="section">
                <div class="label">Publication Permission</div>
                <span class="permission-badge ${permissionToPublish ? 'permission-yes' : 'permission-no'}">
                  ${permissionToPublish ? '✓ Permission Granted' : '✗ Permission Not Granted'}
                </span>
                ${permissionToPublish ? 
                  '<p style="color: #10b981; margin-top: 10px; font-size: 14px;">✓ This testimonial can be published on the website and marketing materials.</p>' : 
                  '<p style="color: #ef4444; margin-top: 10px; font-size: 14px;">⚠ This testimonial is for internal use only.</p>'
                }
              </div>
            </div>

            <div class="footer">
              <p>This testimonial was submitted via the KIT Consulting testimonial form.</p>
              <p>© ${new Date().getFullYear()} KIT Consulting. All rights reserved.</p>
            </div>
          </body>
        </html>
      `,
      text: `
NEW TESTIMONIAL RECEIVED
========================

Rating: ${starDisplay} (${rating}/5)

CLIENT INFORMATION
------------------
Name: ${name}
Company: ${company}
Service Type: ${projectType}

TESTIMONIAL
-----------
"${testimonial}"

PUBLICATION PERMISSION
----------------------
${permissionToPublish ? '✓ Permission Granted - Can be published' : '✗ Permission Not Granted - Internal use only'}

---
Submitted via KIT Consulting Testimonial Form
© ${new Date().getFullYear()} KIT Consulting
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Testimonial submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error submitting testimonial:", error)
    return NextResponse.json(
      { error: "Failed to submit testimonial" },
      { status: 500 }
    )
  }
}

