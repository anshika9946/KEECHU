import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Newsletter from './pages/Newsletter';
import ComposeNewsletter from './pages/ComposeNewsletter';
import Unsubscribe from './pages/Unsubscribe';
import SubscriberList from './pages/SubscriberList';

import './App.css';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/newsletter' element={<Newsletter />} />
					<Route path='/composeNewsletter' element={<ComposeNewsletter />} />
					<Route path='/unsubscribe' element={<Unsubscribe />} />
					<Route path='/subscriberList' element={<SubscriberList />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App