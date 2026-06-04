'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { certifications } from '@/lib/data'

export default function CertificationsSection() {
  return (
    <SectionWrapper id="certifications">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="10 verified certifications across cybersecurity, DevOps, Linux, and automation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-2xl p-5 group block transition-all duration-300"
              style={{
                border: `1px solid ${cert.color === 'cyan' ? 'rgba(6,182,212,0.15)' : 'rgba(124,58,237,0.15)'}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cert.color === 'cyan' ? 'rgba(6,182,212,0.4)' : 'rgba(124,58,237,0.4)'
                e.currentTarget.style.background = cert.color === 'cyan' ? 'rgba(6,182,212,0.04)' : 'rgba(124,58,237,0.04)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = cert.color === 'cyan' ? 'rgba(6,182,212,0.15)' : 'rgba(124,58,237,0.15)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{
                    background: cert.color === 'cyan' ? 'rgba(6,182,212,0.1)' : 'rgba(124,58,237,0.1)',
                    border: `1px solid ${cert.color === 'cyan' ? 'rgba(6,182,212,0.2)' : 'rgba(124,58,237,0.2)'}`,
                    color: cert.color === 'cyan' ? '#06b6d4' : '#a78bfa',
                    fontSize: cert.icon.length === 1 && cert.icon !== cert.icon.toUpperCase() ? '20px' : '14px',
                    fontWeight: 700,
                    fontFamily: 'Syne, sans-serif',
                  }}
                >
                  {cert.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    className="font-semibold text-sm leading-snug mb-1 group-hover:text-white transition-colors"
                    style={{ fontFamily: 'Syne, sans-serif', color: '#e2e8f0' }}
                  >
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs" style={{ color: '#475569' }}>{cert.issuer}</p>
                </div>

                {/* Arrow */}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: cert.color === 'cyan' ? '#06b6d4' : '#a78bfa' }}
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>

              {/* Verify badge */}
              <div className="mt-4 flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: cert.color === 'cyan' ? '#06b6d4' : '#7c3aed' }}
                />
                <span className="font-mono text-xs" style={{ color: '#334155' }}>
                  Verified · Coursera
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6">
          {[
            { value: '10', label: 'Certifications', color: '#06b6d4' },
            { value: '5+', label: 'Cybersecurity courses', color: '#a78bfa' },
            { value: 'Google', label: 'Professional certificate', color: '#06b6d4' },
          ].map((s) => (
            <div key={s.label} className="text-center glass rounded-2xl py-6"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="font-bold text-3xl mb-1" style={{ fontFamily: 'Syne, sans-serif', color: s.color }}>{s.value}</p>
              <p className="font-mono text-xs" style={{ color: '#475569' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
