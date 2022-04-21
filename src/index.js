import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import FrontPageContextProvider from './store/FrontPageContextProvider'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<FrontPageContextProvider>
    <App />
</FrontPageContextProvider>
  
);


