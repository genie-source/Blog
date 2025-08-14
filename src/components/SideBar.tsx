const SideBar = ()=>{
    return (
          <aside className="sidebar">
                <div className="widget">
                    <h3>카테고리</h3>
                    <ul>
                        <li><a href="#">All</a></li>
                        <li><a href="#">Develop</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Experience</a></li>
                    </ul>
                </div>

                <div className="widget">
                    <h3>태그</h3>
                    <div>
                        <a href="#" className="tag">JavaScript</a>
                        <a href="#" className="tag">React</a>
                        <a href="#" className="tag">Node.js</a>
                        <a href="#" className="tag">CSS</a>
                        <a href="#" className="tag">HTML</a>
                        <a href="#" className="tag">Vue.js</a>
                        <a href="#" className="tag">Python</a>
                        <a href="#" className="tag">AWS</a>
                    </div>
                </div>
            </aside>
    )
}

export default SideBar