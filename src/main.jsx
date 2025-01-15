import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import './index.css'
import App from './App.jsx'

import { TodoProvider } from '@context/TodoProvider.jsx';
import { ModalProvider } from '@context/ModalProvider';
import { ModalsProvider } from '@mantine/modals';
import { BrowserRouter } from 'react-router-dom';


const theme = createTheme({
    primaryColor: 'yellow',
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MantineProvider theme={theme} defaultColorScheme='dark'>
            <ModalsProvider>
                <TodoProvider>
                    <ModalProvider>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </ModalProvider>
                </TodoProvider>
            </ModalsProvider>
        </MantineProvider>
    </StrictMode >,
)
