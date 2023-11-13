import HomePage from "./components/homepage/homepage";
import {LoginPage} from "./components/login/LoginPage";
import {Route, Routes} from 'react-router-dom';
import SignUpPage from "./components/signup/SignUpPage";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    );
}

export default App;
