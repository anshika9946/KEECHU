import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Merch from './pages/Merch';
import Newsletter from './pages/Newsletter';
import AlreadySubscribed from './confirmation/AlreadySubscribed';
import ComposeNewsletter from './confirmation/ComposeNewsletter';
import Error from './confirmation/Error';
import SubscriptionSuccess from './confirmation/SubscriptionSuccess';
import Unsubscribe from './confirmation/Unsubscribe';
import VerificationEmail from './confirmation/VerificationEmail';
import Verify from './confirmation/Verify';

import './App.css';



const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/merch' element={<Merch />} />
					<Route path='/newsletter' element={<Newsletter />} />
					<Route path='/alreadySubscribed' element={<AlreadySubscribed />} />
					<Route path='/composeNewsletter' element={<ComposeNewsletter/>}/>
					<Route path='/error' element={<Error/>}/>
					<Route path='/subscriptionSuccess' element={<SubscriptionSuccess/>}/>
					<Route path='/unsubscribe' element={<Unsubscribe/>}/>
					<Route path='/verificationEmail' element={<VerificationEmail/>}/>
					<Route path='/verify' element={<Verify/>}/>



				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App