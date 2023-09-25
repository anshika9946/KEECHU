import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Merch from './pages/Merch';

import './App.css';



const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/merch' element={<Merch />} />

				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App