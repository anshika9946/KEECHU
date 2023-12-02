import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ComposeNewsletter from './RoutesP/ComposeNewsletter';
import Unsubscribe from './RoutesP/Unsubscribe';
import SubscriberList from './RoutesP/SubscriberList';
import Error from './RoutesP/Error';
import PHome from './RoutesP/PHome';
import './App.css';
import PMerch from './RoutesP/PMerch';
import PNewsletter from './RoutesP/PNewsletter';
import PBlogs from './RoutesP/PBlogs';
import TestEmail from './RoutesP/TestMail';


const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' exact element={<PHome/>}/>
					<Route path='/merch' element={<PMerch />} />
					<Route path='/newsletter' element={<PNewsletter />} />
					<Route path='/blogs' element={<PBlogs />} />
					<Route path='/composeNewsletter' element={<ComposeNewsletter />} />
					<Route path='/unsubscribe' element={<Unsubscribe />} />
					<Route path='/subscriberList' element={<SubscriberList />} />
					<Route path='/testing100' element={<TestEmail />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App