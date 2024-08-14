import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Theme from './theme/Theme';

import Homepage from './pages/Homepage';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={Theme}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</BrowserRouter>
    </ChakraProvider>
);

