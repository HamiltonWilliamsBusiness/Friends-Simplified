import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FriendsContextProvider } from './context/FriendContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FriendsContextProvider>
      <App />
    </FriendsContextProvider>
  </React.StrictMode>
);


