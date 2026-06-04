'use client'
interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <p className="font-mono text-xs tracking-widest mb-3" style={{ color: '#06b6d4', letterSpacing: '0.2em' }}>
        — {eyebrow} —
      </p>
      <h2
        className="text-4xl md:text-5xl font-bold mb-4"
        style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base max-w-xl mx-auto" style={{ color: '#94a3b8', lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
