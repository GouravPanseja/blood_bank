import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQContainer from "../components/FAQContainer";
import NewsStories from "../components/NewsStories";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/faq" element={<FAQContainer />} />
                <Route path="/news" element={<NewsStories />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
