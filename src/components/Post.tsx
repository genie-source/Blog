const Post = () =>{
    return(
      <article className="post">
            <div className="post-image">
                <span>📱 모바일 앱 개발</span>
            </div>
            <div className="post-content">
                <div className="post-meta">
                    <span>2024년 8월 12일</span>
                    <span>관리자</span>
                </div>
                <h2>React Native로 크로스플랫폼 앱 만들기</h2>
                <p>React Native를 사용해서 iOS와 Android 동시 개발하는 방법에 대해 알아보겠습니다. 하나의 코드베이스로 두 플랫폼을 모두 지원할 수 있습니다.</p>
                <a href="#" className="read-more">더 읽기 →</a>
            </div>
        </article>
    )
}

export default Post 