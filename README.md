<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Syne&weight=700&size=32&pause=1000&color=06B6D4&center=true&vCenter=true&width=500&lines=Jay+Dhakad+%E2%80%94+Portfolio;Full-Stack+%C3%97+Cybersecurity;I+Build+Things+That+Work." alt="Typing SVG" />

<br/>

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-7C3AED?style=for-the-badge&logo=framer&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

**Personal portfolio website — glassmorphism dark theme, animated, fully responsive.**

[🌐 Live Demo](https://jaydhakad.vercel.app) · [📧 Contact](mailto:jaydhakad92@gmail.com) · [💼 LinkedIn](https://www.linkedin.com/in/jay-dhakad-aaa59628a/)

</div>

---

## ✨ Features

- 🌊 **Glassmorphism UI** — frosted glass cards on a deep dark aurora background
- 🎯 **Custom Cursor** — glowing cyan cursor with lag ring
- ✍️ **Typing Animation** — hero roles cycle with typewriter effect
- 🎠 **Photo Gallery** — 3-photo switcher in About section
- 📊 **Animated Skill Bars** — scroll-triggered progress bars per category
- 🃏 **3D Tilt Cards** — project cards with parallax tilt on hover
- 🔢 **Animated Counters** — CGPA, wins, projects count up on scroll
- 🏆 **Timeline Experience** — alternating left/right animated timeline
- 📜 **10 Certifications** — all Coursera credentials linked
- 📱 **Fully Responsive** — mobile hamburger nav, stacked layouts
- ✉️ **Contact Form** — Formspree-powered, no backend needed

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Typing Effect | react-type-animation |
| 3D Tilt | react-parallax-tilt |
| Fonts | Syne + DM Sans + JetBrains Mono |
| Deployment | Vercel |

---

## 🚀 Run Locally

```bash
# Clone
git clone https://github.com/jaydhakad8810/personal_portfolio.git
cd personal_portfolio

# Install
npm install

# Add your photos to public/images/
# hero.jpg | about1.jpg | about2.jpg

# Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
jay-portfolio/
├── app/
│   ├── globals.css        # Aurora orbs, glass styles, custom cursor
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Main page — assembles all sections
├── components/
│   ├── sections/          # Hero, About, Skills, Experience, Projects,
│   │                      # Certifications, Achievements, Contact
│   └── ui/                # Navbar, Footer, Cursor, Aurora, SectionWrapper
├── lib/
│   └── data.ts            # ✏️ All content lives here — edit this file
└── public/
    └── images/            # hero.jpg, about1.jpg, about2.jpg
```

---

## ✏️ Editing Content

All your data is in **`lib/data.ts`** — one file to rule them all:

```ts
// Change bio, tagline, social links
export const personalInfo = { ... }

// Add/edit projects
export const projects = [ ... ]

// Add certifications
export const certifications = [ ... ]

// Edit skills & levels
export const skills = [ ... ]
```

---

## 📬 Contact Form Setup

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a form → copy your form ID (e.g. `xpwzgkln`)
3. Open `components/sections/ContactSection.tsx`
4. Replace `YOUR_FORMSPREE_ID` with your ID

---

## 🌍 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or: push to GitHub → import at [vercel.com](https://vercel.com) → live in 2 minutes. Free.

---

## 👨‍💻 About Me

**Jay Dhakad** — BTech IT @ MIT ADT University, Pune (Batch 2027)

- 🛡️ Penetration Testing Intern @ Ailexity Software
- 🏗️ Built DGSystem — production platform for Dhakad Group, Nashik
- 🥈 Runner-Up @ Linux OSCI International Hackathon, Netherlands
- 🔐 Google Cybersecurity Professional Certificate

---

<div align="center">

Made with 💙 by Jay Dhakad

[![GitHub](https://img.shields.io/badge/GitHub-jaydhakad8810-181717?style=flat-square&logo=github)](https://github.com/jaydhakad8810)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-jay--dhakad-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/jay-dhakad-aaa59628a/)

</div>
