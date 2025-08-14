import Post from "../components/Post"
import SideBar from "../components/SideBar"

const Home = () =>{
    return(
        <div className="main-content">
            <main className="posts">
                <Post />
            </main>
            <SideBar />
        </div>
    )
}

export default Home