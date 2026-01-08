import React from 'react';
import ReactDOM from 'react-dom/client';
import ServicesSection from './ServicesSection';
import './index.css';

function App() {
  return (
    <div className="App">
      <ServicesSection />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
