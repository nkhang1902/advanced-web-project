import {AppLayout} from "./components/app-layout/AppLayout";
import HomePage from "./components/homepage/homepage";
import {LoginPage} from "./components/login/LoginPage";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from "./components/signup/SignUpPage";

function App() {
    return (
            <AppLayout>
                <Routes>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </AppLayout>
        // <LoginPage/>
    );}

export default App;
