import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initAnalytics } from './utils/analytics';
import { initWebVitals } from './utils/webVitals';

initAnalytics();

// Initialize Web Vitals monitoring
initWebVitals();

// Create a root element for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(<App />);
