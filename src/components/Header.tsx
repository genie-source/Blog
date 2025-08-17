const Header = () => {
    return(
        <header>
            <div className="header-content">
                <nav>
                    <a href="#" className="logo">Genie</a>
                    <ul className="nav-links">
                        <li><a href="#home">홈</a></li>
                        <li><a href="#about">소개</a></li>
                        <li><a href="#contact">연락처</a></li>
                    </ul>
                </nav>
                <div className="hero_">
                    <h2>안녕하세요</h2>
                    <p>코딩과 일상을 기록하는 공간입니다</p>
                </div>
            </div>
            <div className="social-links">
                    <a href="https://github.com/genie-source">github</a>
                    <a href="#resume">resume</a>
                    <a href="#linkedin">linkedIn</a>
            </div>
        </header>

    )
}

export default Header