const PinnedPost = () => {
  return (
    <article className="pinned-post">
      <div className="pin-icon">📌</div>
      <div className="post-content">
        <div className="post-header">
          <span className="post-emoji">🥊</span>
          <div>
            <h3 className="post-title">Next.js의 SSR & 캐싱 전략</h3>
            <time className="post-date">2024.08.15</time>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PinnedPost;