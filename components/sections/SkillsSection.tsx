'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { skills } from '@/lib/data'

const icons: Record<string, string> = {
  code: '{ }',
  server: '⚙',
  smartphone: '📱',
  shield: '🛡',
  cloud: '☁',
  cpu: '🤖',
}

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-xs" style={{ color: '#94a3b8' }}>{name}</span>
        <span className="font-mono text-xs" style={{ color: '#475569' }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const displaySkills = activeCategory
    ? skills.filter((s) => s.category === activeCategory)
    : skills

  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="What I Know"
          title="Skills & Tech Stack"
          subtitle="From low-level Linux kernel to production React apps — I've built across the full stack."
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className="font-mono text-xs px-4 py-2 rounded-lg transition-all duration-200"
            style={{
              background: activeCategory === null ? 'linear-gradient(135deg, #06b6d4, #7c3aed)' : 'rgba(255,255,255,0.04)',
              color: activeCategory === null ? '#fff' : '#475569',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            All
          </button>
          {skills.map((s) => (
            <button
              key={s.category}
              onClick={() => setActiveCategory(s.category === activeCategory ? null : s.category)}
              className="font-mono text-xs px-4 py-2 rounded-lg transition-all duration-200"
              style={{
                background: activeCategory === s.category ? 'linear-gradient(135deg, #06b6d4, #7c3aed)' : 'rgba(255,255,255,0.04)',
                color: activeCategory === s.category ? '#fff' : '#475569',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {s.category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displaySkills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl">{icons[group.icon] || '⚡'}</span>
                <div>
                  <p className="font-semibold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {group.category}
                  </p>
                  <p className="font-mono text-xs" style={{ color: '#475569' }}>
                    {group.items.length} skills
                  </p>
                </div>
              </div>
              {group.items.map((item, j) => (
                <SkillBar
                  key={item.name}
                  name={item.name}
                  level={item.level}
                  color={
                    j % 2 === 0
                      ? 'linear-gradient(90deg, #06b6d4, #7c3aed)'
                      : 'linear-gradient(90deg, #7c3aed, #06b6d4)'
                  }
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <div className="mt-16 text-center">
          <p className="font-mono text-xs tracking-widest mb-6" style={{ color: '#334155', letterSpacing: '0.2em' }}>
            ALSO COMFORTABLE WITH
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Git', 'GitHub', 'Figma', 'Canva', 'XAMPP', 'VS Code', 'Postman', 'Linux', 'Ubuntu', 'Nginx', 'PM2', 'JWT', 'REST', 'PWA', 'Burp Suite', 'Metasploit', 'Gemini API'].map((tag, i) => (
              <span key={tag} className={`tech-tag ${i % 2 === 0 ? '' : 'violet'}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
