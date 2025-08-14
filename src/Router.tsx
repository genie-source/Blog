import { BrowserRouter, Route, Routes } from "react-router-dom"
import BlogHome from "./pages/BlogHome"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BlogHome />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router