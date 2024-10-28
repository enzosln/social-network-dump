import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DirectMessagePage from "./page/DirectMessagePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/instagram/direct" element={<DirectMessagePage />} />
            </Routes>
        </Router>
    );
}

export default App;
