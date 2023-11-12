import {AppLayout} from "./components/app-layout/AppLayout";
import {LoginPage} from "./components/login/LoginPage";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
        <AppLayout>
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
            </Routes>
        </AppLayout>
        </Router>
        // <LoginPage/>
    );}

export default App;
