import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const rootElement = document.getElementById('root') as HTMLElement;
createRoot(rootElement).render(<App />);
