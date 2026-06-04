'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { projects } from '@/lib/data'

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="What I've Built"
          title="Projects"
          subtitle="Production-deployed, client-facing, real-world systems — not just demos."
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="font-mono text-xs px-4 py-2 rounded-lg transition-all duration-200"
              style={{
                background: filter === cat ? 'linear-gradient(135deg, #06b6d4, #7c3aed)' : 'rgba(255,255,255,0.04)',
                color: filter === cat ? '#fff' : '#475569',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.05}
                glareColor={project.color === 'cyan' ? '#06b6d4' : '#7c3aed'}
                glarePosition="all"
                scale={1.02}
                transitionSpeed={600}
              >
                <div
                  className="glass rounded-3xl p-7 h-full flex flex-col transition-all duration-300"
                  style={{
                    border: `1px solid ${project.color === 'cyan' ? 'rgba(6,182,212,0.2)' : 'rgba(124,58,237,0.2)'}`,
                    minHeight: '320px',
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{project.icon}</span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
                            {project.title}
                          </h3>
                          {project.featured && (
                            <span
                              className="font-mono text-xs px-2 py-0.5 rounded-full"
                              style={{
                                background: 'rgba(6,182,212,0.1)',
                                color: '#06b6d4',
                                border: '1px solid rgba(6,182,212,0.2)',
                              }}
                            >
                              featured
                            </span>
                          )}
                        </div>
                        <p className="font-mono text-xs" style={{ color: '#475569' }}>{project.subtitle}</p>
                      </div>
                    </div>
                    <span
                      className="font-mono text-xs px-3 py-1 rounded-full shrink-0"
                      style={{
                        background: project.color === 'cyan' ? 'rgba(6,182,212,0.08)' : 'rgba(124,58,237,0.08)',
                        color: project.color === 'cyan' ? '#22d3ee' : '#a78bfa',
                        border: `1px solid ${project.color === 'cyan' ? 'rgba(6,182,212,0.15)' : 'rgba(124,58,237,0.15)'}`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#64748b' }}>
                    {project.description}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span key={tech} className={`tech-tag ${project.color === 'violet' ? 'violet' : ''}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-mono text-xs px-4 py-2.5 rounded-xl transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#94a3b8',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = project.color === 'cyan' ? 'rgba(6,182,212,0.4)' : 'rgba(124,58,237,0.4)'; e.currentTarget.style.color = '#f0f4ff' }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#94a3b8' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 font-mono text-xs px-4 py-2.5 rounded-xl transition-all duration-200"
                        style={{
                          background: project.color === 'cyan' ? 'rgba(6,182,212,0.1)' : 'rgba(124,58,237,0.1)',
                          border: `1px solid ${project.color === 'cyan' ? 'rgba(6,182,212,0.3)' : 'rgba(124,58,237,0.3)'}`,
                          color: project.color === 'cyan' ? '#06b6d4' : '#a78bfa',
                        }}
                      >
                        ↗ Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/jaydhakad8810"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 font-mono text-sm px-7 py-3.5 rounded-xl glass transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)'; e.currentTarget.style.color = '#f0f4ff' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#94a3b8' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            See all repositories on GitHub →
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
