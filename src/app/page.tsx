import React from 'react';

export default function Home() {
  return (
    <div className="container" style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '80px 24px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '64px'
    }}>
      {/* Header Section */}
      <header className="fade-in" style={{ animationDelay: '0.1s' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '16px', background: 'linear-gradient(to right, #fff, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Hangyeol
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--muted)', maxWidth: '600px', lineHeight: '1.6' }}>
          Building digital experiences at the intersection of design and code. 
          Exploring the future of web through minimalist aesthetics and powerful engineering.
        </p>
      </header>

      {/* Featured Articles Placeholder */}
      <section className="fade-in" style={{ animationDelay: '0.2s' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h2>Writing</h2>
          <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>View all →</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[
            { title: "Building the Invisible: Minimalist UI Design", date: "Apr 5, 2026", category: "Design" },
            { title: "Next.js 16 and the Future of Server Components", date: "Mar 28, 2026", category: "Engineering" },
            { title: "The Art of Clean Code in Modern Web Apps", date: "Mar 15, 2026", category: "Best Practices" }
          ].map((post, i) => (
      <div className="glass glass-hover" style={{ padding: '24px', transition: 'transform 0.2s ease', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1.25rem' }}>{post.title}</h3>
                <span style={{ color: 'var(--accent)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{post.category}</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{post.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="fade-in" style={{ animationDelay: '0.3s', marginTop: 'auto', paddingTop: '64px', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: '24px', color: 'var(--muted)', fontSize: '0.9rem' }}>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">X (Twitter)</a>
          <a href="#">Email</a>
        </div>
        <p style={{ marginTop: '24px', color: 'var(--muted)', fontSize: '0.8rem' }}>
          © 2026 Hangyeol. Built with Next.js and Passion.
        </p>
      </footer>

    </div>
  );
}
