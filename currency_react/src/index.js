import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Main from './components/main';

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <Main />
        </StyledEngineProvider>
    </React.StrictMode>
);

/**npm install --legacy-peer-deps --save @mui/material @emotion/react @emotion/styled
 */
/**npm install --legacy-peer-deps --save @mui/icons-material
 */
/**npm install --legacy-peer-deps --save @fontsource/roboto
 */
/**npm install --legacy-peer-deps --save @material-ui/styles */
/**npm install --legacy-peer-deps --save react-router-dom */