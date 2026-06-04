'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { personalInfo } from '@/lib/data'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Replace with your Formspree endpoint: https://formspree.io/f/YOUR_ID
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    padding: '14px 16px',
    color: '#f0f4ff',
    fontSize: '14px',
    fontFamily: 'DM Sans, sans-serif',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <SectionWrapper id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Me"
          subtitle="Available for internships, freelance projects, and collaborations. Let's build something."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <div>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#64748b' }}>
              Whether you&apos;re a recruiter, startup, or fellow developer — drop a message.
              I typically respond within 24 hours.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5 mb-10">
              {[
                {
                  icon: '✉',
                  label: 'Email',
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                  color: '#06b6d4',
                },
                {
                  icon: '📍',
                  label: 'Location',
                  value: 'Hinjewadi, Pune, India',
                  href: null,
                  color: '#a78bfa',
                },
                {
                  icon: '📞',
                  label: 'Phone',
                  value: personalInfo.phone,
                  href: `tel:${personalInfo.phone}`,
                  color: '#06b6d4',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '18px' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs mb-0.5" style={{ color: '#334155' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium transition-colors"
                        style={{ color: item.color }}
                        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8' }}
                        onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: '#94a3b8' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-mono text-xs px-5 py-3 rounded-xl glass transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)'; e.currentTarget.style.color = '#06b6d4' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#94a3b8' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-mono text-xs px-5 py-3 rounded-xl glass transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'; e.currentTarget.style.color = '#a78bfa' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#94a3b8' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="glass rounded-3xl p-8" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs block mb-2" style={{ color: '#475569' }}>Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(6,182,212,0.4)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs block mb-2" style={{ color: '#475569' }}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(6,182,212,0.4)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-xs block mb-2" style={{ color: '#475569' }}>Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity / Project collab / ..."
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(6,182,212,0.4)' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                />
              </div>
              <div>
                <label className="font-mono text-xs block mb-2" style={{ color: '#475569' }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(6,182,212,0.4)' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                />
              </div>

              {status === 'sent' && (
                <div className="rounded-xl p-4 text-center font-mono text-xs"
                  style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#10b981' }}>
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="rounded-xl p-4 text-center font-mono text-xs"
                  style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444' }}>
                  Something went wrong. Email me directly at jaydhakad92@gmail.com
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-xl font-medium text-sm text-white transition-all duration-200"
                style={{
                  background: status === 'sending'
                    ? 'rgba(6,182,212,0.3)'
                    : 'linear-gradient(135deg, #06b6d4, #7c3aed)',
                  boxShadow: '0 0 30px rgba(6,182,212,0.2)',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={(e) => { if (status !== 'sending') (e.target as HTMLElement).style.boxShadow = '0 0 40px rgba(6,182,212,0.4)' }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.boxShadow = '0 0 30px rgba(6,182,212,0.2)' }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>

              <p className="text-center font-mono text-xs" style={{ color: '#334155' }}>
                Or email directly at{' '}
                <a href="mailto:jaydhakad92@gmail.com" style={{ color: '#06b6d4' }}>jaydhakad92@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
