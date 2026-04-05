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
        <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', fontWeight: 700, background: 'linear-gradient(to right, #fff, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          한결의 CS 아카이브
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--muted)', maxWidth: '600px', lineHeight: '1.7', wordBreak: 'keep-all' }}>
          컴퓨터공학의 깊은 이론부터 현대적인 시스템 설계까지, 
          추상화된 개념 뒤에 숨겨진 정교한 논리를 탐구하고 기록합니다. 
          기술의 본질을 이해하고 더 나은 구조를 고민하는 공간입니다.
        </p>
      </header>

      {/* Writing Section */}
      <section className="fade-in" style={{ animationDelay: '0.2s' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.8rem' }}>글 목록</h2>
          <span style={{ color: 'var(--muted)', fontSize: '0.9rem', cursor: 'pointer' }}>전체 보기 →</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[
            { title: "현대 운영체제의 CPU 스케줄링과 선점형 멀티태스킹", date: "2026. 04. 05", category: "OS" },
            { title: "분산 시스템에서의 일관성 모델과 CAP 정리의 재해석", date: "2026. 03. 28", category: "System" },
            { title: "자료구조의 효율성: 해시 테이블의 충돌 해결 전략 비교", date: "2026. 03. 15", category: "Algorithm" },
            { title: "컴파일러 최적화 기법: 인라이닝과 루프 언롤링의 원리", date: "2026. 03. 02", category: "Compiler" }
          ].map((post, i) => (
            <div key={i} className="glass glass-hover" style={{ padding: '24px', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', wordBreak: 'keep-all' }}>{post.title}</h3>
                <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 8px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '4px' }}>{post.category}</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{post.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="fade-in" style={{ animationDelay: '0.3s', marginTop: 'auto', paddingTop: '64px', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: '24px', color: 'var(--muted)', fontSize: '0.9rem' }}>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
          <a href="#">Email</a>
        </div>
        <p style={{ marginTop: '24px', color: 'var(--muted)', fontSize: '0.85rem' }}>
          © 2026 한결. Built with Next.js, TypeSafe and Passion.
        </p>
      </footer>
    </div>
  );
}
