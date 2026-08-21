import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import './extra.css';
import './settings.css';
import './crud.css';
import './client.css';
import './reference-ui.css';
import './waba.css';
import './email-reference.css';
import './business-reference.css';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
