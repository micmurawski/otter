import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'Minimal App gist';

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
);
