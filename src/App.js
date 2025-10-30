import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Create from './routes/create.js';
import All from './routes/all.js';
import Update from './routes/update.js';


import Register from './routes/register.js';
import Login from './routes/login.js';
import Invite from './routes/invite.js';



function App() {
    return (
        <BrowserRouter basename="/tiae24-frontend">

            <div className="App">
                <header className="App-header">

                    <nav>
                        <Link to="/">All Posts</Link>
            |
                        <Link to="/create">Create Post</Link>
            |
                        <Link to="/reg">register</Link>
            |
                        <Link to="/login">login</Link>
                    </nav>

                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<All />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/update/:id" element={<Update />} />
                        <Route path="/reg" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/invite/:id" element={<Invite />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}


export default App;
