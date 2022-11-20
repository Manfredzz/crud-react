import React from 'react';
import Header from './Components/header';
import MainPage from './Components/Pages/mainPage';
import NewPost from './Components/Pages/newPost';
import { CardDataContext } from './Components/FirebaseConfig/crudFirebase';
import { database } from './Components/FirebaseConfig/config';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
            <CardDataContext>
                    <Routes>
                        <Route exact path="/" element={<><Header /><MainPage /></>} />
                        <Route path="/newpost" element={<><Header /><NewPost /></>} />
                    </Routes>
            </CardDataContext>
            </Router>
        </div>
    );
}

export default App;
