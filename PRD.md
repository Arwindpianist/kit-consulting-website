## 🧾 Product Requirements Document (PRD)

### Project Title: **KIT Consulting Official Website**

### Stack: **Next.js 15 (App Router) + TailwindCSS + TypeScript + Vercel Hosting + Zoho Mail Integration**

---

### 1. **Project Overview**

KIT Consulting is a technical consultancy specializing in:

* Tendering Support and Strategies
* Technical Support and Due Diligence
* EPCC Project Management
* Remote Engineering Solutions

The goal of this project is to create a **professional, modern, and blue-themed corporate website** that reflects KIT Consulting’s expertise and credibility. The site should act as both a **company profile** and a **lead generation platform**.

---

### 2. **Objectives**

* Establish a strong online presence for KIT Consulting.
* Present the company’s **services, expertise, and project history** clearly.
* Allow potential clients to **contact or request consultation easily**.
* Be easy to maintain and scale (Next.js + Vercel).
* Match the **blue/white/gray** corporate color palette from the official company profile.

---

### 3. **Target Audience**

* Engineering, procurement, and construction companies.
* Energy, chemical, and power plant operators.
* Project managers, tendering specialists, and procurement teams.

---

### 4. **Core Features**

#### 4.1 **Homepage**

* Hero section with company tagline:

  > “Your trusted partner in Construction Execution, Tendering and Process Optimization.”
* Quick navigation to Services, Projects, and Contact.
* Animated counters (e.g., Years of Experience, Projects Completed).
* Call-to-action (CTA): “Partner with KIT Consulting Today.”

#### 4.2 **About Page**

* Overview of KIT Consulting’s mission and vision.
* Company introduction and leadership (Ir. Justin as contact).
* Optional section for certifications or affiliations.

#### 4.3 **Services Page**

Each service should have its own sub-section with iconography:

1. **Tendering Support & Strategies**
2. **Technical Support & Due Diligence**
3. **EPCC Project Management**
4. **Remote Engineering Solutions**

Each section includes:

* Short description (from profile)
* Relevant image or background graphic
* CTA: “Enquire about this service”

#### 4.4 **Projects / Past References**

* Display projects in a filterable and searchable list.
* Columns: *Client*, *Scope*, *Year*, *Category*.
* Allow users to filter by service (TSS, RE, TDD, EPM).
* Highlight notable projects (e.g., Shell, Petronas, Genetec Technology).

#### 4.5 **Contact Page**

* Form with: Name, Email, Company, Message.
* Integrated with **Zoho Mail** (form submissions go to [kit.engineering.consulting@gmail.com](mailto:kit.engineering.consulting@gmail.com)).
* Include Google Maps embed (optional).
* Contact info and clickable phone/email links.

#### 4.6 **Footer**

* Quick links (Home, About, Services, Projects, Contact)
* Email + phone + company address
* Copyright © KIT Consulting 2025
* Social icons (optional: LinkedIn)

---

### 5. **Technical Requirements**

| Category          | Specification                                      |
| ----------------- | -------------------------------------------------- |
| **Framework**     | Next.js 15 (App Router)                            |
| **Language**      | TypeScript                                         |
| **Styling**       | TailwindCSS (with corporate blue theme)            |
| **Hosting**       | Vercel                                             |
| **Email Service** | Zoho Mail (via SMTP or API)                        |
| **Deployment**    | GitHub → Vercel CI/CD                              |
| **Analytics**     | Google Analytics 4                                 |
| **SEO**           | Meta tags, structured data, sitemap, robots.txt    |
| **Performance**   | Optimized images, static generation where possible |

---

### 6. **Design Guidelines**

* **Primary Color:** #003366 (deep blue)
* **Secondary Color:** #0066CC (bright blue)
* **Accent:** #E5E5E5 / white for contrast
* **Typography:** Sans-serif (e.g., Inter or Poppins)
* **Layout:** Clean grid, responsive on all devices
* **Mood:** Professional, technical, reliable

---

### 7. **Non-Functional Requirements**

* Responsive design (mobile-first).
* Load time < 2 seconds on Vercel CDN.
* Accessibility compliance (WCAG 2.1 AA).
* Secure form submission (Zoho SMTP over TLS).

---

### 8. **Deliverables**

1. **Next.js source code** (GitHub repo)
2. **Responsive website** hosted on Vercel
3. **Zoho Mail integration** for contact form
4. **Google Analytics + SEO setup**
5. Optional: Admin dashboard (future phase)

---

### 9. **Future Enhancements (Phase 2)**

* Admin panel to add/update projects easily.
* Blog / Insights section for tendering & engineering tips.
* Client login area for shared documents.
* PDF profile download section.

---