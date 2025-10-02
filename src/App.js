import React from 'react';

import Create from './routes/create.js';
import All from './routes/all.js';
import Update from './routes/update.js';



function App() {
  let path = window.location.pathname;

  const base = "/tiae24-frontend";
  if (path.startsWith(base)) {
    path = path.slice(base.length);
  }

  let page = null;

  if (path === "/") {
    page = <All/>;
  } else if (path === "tiae24-frontend/create") {
    page = <Create/>;
  } else if (path.startsWith("tiae24-frontend/update/")) {
    page = <Update/>;
  } else {
    page = <div>404 - Page not found</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href={`${base}/`}>All Posts</a> | <a href={`${base}/create`}>Create Post</a>
        </nav>
      </header>

      <main>
        {page}
      </main>
    </div>
  );
}

export default App;