import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

import Home from '@pages/Home.jsx';
import Profile from '@pages/Profile.jsx';
import NotFound from '@pages/NotFound.jsx';

import Navbar from '@components/Navbar';

function App() {
    const location = useLocation();

    return (

        <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0">
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="page-fade"
                    timeout={300}
                    appear
                    enter
                    exit
                >
                    <div className="transition-wrapper">
                        <Routes location={location}>
                            <Route path="/" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </CSSTransition>
            </TransitionGroup>

            <Navbar />
        </div>
    );
}

export default App;
