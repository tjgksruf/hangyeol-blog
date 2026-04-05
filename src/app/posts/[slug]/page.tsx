import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/posts';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container" style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '80px 24px',
      minHeight: '100vh',
    }}>
      {/* Back Button */}
      <nav style={{ marginBottom: '48px' }}>
        <Link href="/" style={{ color: 'var(--muted)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>←</span> 뒤로 가기
        </Link>
      </nav>

      <article className="fade-in">
        <header style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
             <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 8px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '4px' }}>
              {post.category}
            </span>
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px', fontWeight: 700, lineHeight: '1.2' }}>
            {post.title}
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>{post.date}</p>
        </header>

        <div className="article-content" style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8', 
          color: 'var(--foreground)',
          whiteSpace: 'pre-wrap',
          wordBreak: 'keep-all'
        }}>
          {post.content}
        </div>

        <footer style={{ marginTop: '80px', paddingTop: '48px', borderTop: '1px solid var(--border)' }}>
          <div className="glass" style={{ padding: '32px', textAlign: 'center' }}>
            <h4 style={{ marginBottom: '16px' }}>글이 흥미로우셨나요?</h4>
            <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>더 많은 컴퓨터공학 지식을 공유하고 있습니다.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <Link href="/" className="glow-dot" style={{ display: 'none' }} />
              <Link href="/" style={{ color: 'var(--accent)', fontWeight: 600 }}>메인으로 이동 →</Link>
            </div>
          </div>
        </footer>
      </article>

    </div>
  );
}
