import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Create from './routes/create.js';
import All from './routes/all.js';
import Update from './routes/update.js';



function App() {
    return (
        <BrowserRouter basename="/tiae24-frontend">

            <div className="App">
                <header className="App-header">

                    <nav>
                        <Link to="/">All Posts</Link>
            |
                        <Link to="/create">Create Post</Link>
                    </nav>

                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<All />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/update/:id" element={<Update />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}


export default App;
