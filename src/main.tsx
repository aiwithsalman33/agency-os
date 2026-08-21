import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import './extra.css';
import './settings.css';
import './crud.css';
import './client.css';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
