import PinnedPost from "../components/PinnedPost"
import Post from "../components/Post"
import SideBar from "../components/SideBar"

const Home = () =>{
    return(
        <div className="main-content">
            <div className="pinned-posts">
                <PinnedPost />
                <PinnedPost />
            </div>
            <div className="posts">
                <Post />
                <Post />
            </div>
            <SideBar />
        </div>
    )
}

export default Home