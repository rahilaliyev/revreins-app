import { createRoot } from 'react-dom/client';

import App from './App.tsx';

const rootElement = document.getElementById('root') as HTMLElement;
createRoot(rootElement).render(<App />);
