import {Route, Routes} from 'react-router-dom';
import  LoginPage from './components/Login/LoginPage';
import SignUpPage from './components/SignUp/SignUpPage';
import HomePage from './components/HomePage/HomePage';

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
