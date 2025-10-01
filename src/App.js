import React from 'react';

import Create from './routes/create.js';
import All from './routes/all.js';
import Update from './routes/update.js';


function App() {
  const path = window.location.pathname;

  let page = null;

  if (path === "/") {
    page = <All/>;
  } else if (path === "/create") {
    page = <Create/>;
  } else if (path.startsWith("/update/")) {
    page = <Update/>;
  } else {
    page = <div>404 - Page not found</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="/">All Posts</a> | <a href="/create">Create Post</a>
        </nav>
      </header>

      <main>
        {page}
      </main>
    </div>
  );
}

export default App;